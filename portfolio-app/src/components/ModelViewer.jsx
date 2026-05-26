import { Suspense, useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Center, Environment, ContactShadows, Html, useProgress } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import * as THREE from 'three';
import { RotateCcw, Maximize2, Minimize2, Play, Pause } from 'lucide-react';
import { useLang } from '../context/LanguageContext.jsx';
import './ModelViewer.css';

// ---------- Yükleme göstergesi ----------
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="model-loader">
        <div className="model-loader-spinner" aria-hidden="true" />
        <p>{Math.round(progress)}%</p>
      </div>
    </Html>
  );
}

// ---------- STL modelini yükle ve göster ----------
function STLModel({ url, color = '#9C8B7A', autoRotate, modelRef }) {
  const geometry = useLoader(STLLoader, url);
  const meshRef = useRef();

  // İç ref'i dış ref ile senkronla
  useEffect(() => {
    if (modelRef) modelRef.current = meshRef.current;
  });

  // Geometriyi normalize et (merkeze al, normalleri hesapla)
  const processedGeometry = useMemo(() => {
    const g = geometry.clone();
    g.computeVertexNormals();
    g.computeBoundingBox();
    g.center();
    // Modeli makul boyuta ölçekle
    const bbox = g.boundingBox;
    const size = new THREE.Vector3();
    bbox.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 2 / maxDim; // Sahne içinde ~2 birim boyut
    g.scale(scale, scale, scale);
    return g;
  }, [geometry]);

  useFrame((_, delta) => {
    if (autoRotate && meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} geometry={processedGeometry} castShadow receiveShadow>
      <meshStandardMaterial
        color={color}
        metalness={0.25}
        roughness={0.55}
        flatShading={false}
      />
    </mesh>
  );
}

// ---------- Ana bileşen ----------
export default function ModelViewer({ url, title, defaultColor = '#9C8B7A' }) {
  const { lang } = useLang();
  const [autoRotate, setAutoRotate] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [color, setColor] = useState(defaultColor);
  const containerRef = useRef(null);
  const controlsRef = useRef(null);
  const modelRef = useRef(null);

  const palette = [
    { name: 'Stone', value: '#9C8B7A' },
    { name: 'Pearl', value: '#E8E3DC' },
    { name: 'Charcoal', value: '#3C3531' },
    { name: 'Burgundy', value: '#5C1A1B' },
    { name: 'Sage', value: '#8FA388' },
  ];

  const labels = lang === 'en'
    ? {
        instructions: 'Drag to rotate · Scroll to zoom · Right-click to pan',
        autoRotate: 'Auto-rotate',
        reset: 'Reset view',
        fullscreen: 'Fullscreen',
        exitFullscreen: 'Exit fullscreen',
        material: 'Material',
      }
    : {
        instructions: 'Döndürmek için sürükle · Yakınlaştırmak için kaydır · Sağ tık ile kaydır',
        autoRotate: 'Otomatik döndür',
        reset: 'Görünümü sıfırla',
        fullscreen: 'Tam ekran',
        exitFullscreen: 'Tam ekrandan çık',
        material: 'Malzeme',
      };

  const handleReset = () => {
    if (controlsRef.current) controlsRef.current.reset();
    if (modelRef.current) {
      modelRef.current.rotation.set(0, 0, 0);
    }
  };

  // Fullscreen API
  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await containerRef.current?.requestFullscreen();
        setFullscreen(true);
      } catch {}
    } else {
      try {
        await document.exitFullscreen();
        setFullscreen(false);
      } catch {}
    }
  };

  useEffect(() => {
    const onChange = () => setFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`model-viewer ${fullscreen ? 'is-fullscreen' : ''}`}
      role="region"
      aria-label={title ? `Interactive 3D model of ${title}` : 'Interactive 3D model'}
    >
      <Canvas
        camera={{ position: [3, 2, 4], fov: 45 }}
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true, preserveDrawingBuffer: true }}
      >
        <color attach="background" args={['#F2EEE7']} />

        {/* Aydınlatma */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <directionalLight position={[-5, 3, -5]} intensity={0.4} />

        <Suspense fallback={<Loader />}>
          <Center>
            <STLModel
              url={url}
              color={color}
              autoRotate={autoRotate}
              modelRef={modelRef}
            />
          </Center>
          <Environment preset="studio" background={false} />
          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.4}
            scale={6}
            blur={2.5}
            far={2}
          />
        </Suspense>

        <OrbitControls
          ref={controlsRef}
          enableDamping
          dampingFactor={0.08}
          minDistance={1.5}
          maxDistance={12}
          makeDefault
        />
      </Canvas>

      {/* Üst bilgi şeridi */}
      <div className="model-info" aria-hidden="true">
        <span className="model-info-dot" />
        <span>{labels.instructions}</span>
      </div>

      {/* Kontroller */}
      <div className="model-controls" role="toolbar" aria-label="3D viewer controls">
        <button
          type="button"
          className={`model-btn ${autoRotate ? 'is-active' : ''}`}
          onClick={() => setAutoRotate((v) => !v)}
          aria-pressed={autoRotate}
          aria-label={labels.autoRotate}
          title={labels.autoRotate}
        >
          {autoRotate ? <Pause size={16} /> : <Play size={16} />}
        </button>

        <button
          type="button"
          className="model-btn"
          onClick={handleReset}
          aria-label={labels.reset}
          title={labels.reset}
        >
          <RotateCcw size={16} />
        </button>

        <button
          type="button"
          className="model-btn"
          onClick={toggleFullscreen}
          aria-label={fullscreen ? labels.exitFullscreen : labels.fullscreen}
          title={fullscreen ? labels.exitFullscreen : labels.fullscreen}
        >
          {fullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        </button>
      </div>

      {/* Malzeme paleti */}
      <div className="model-palette" role="radiogroup" aria-label={labels.material}>
        <span className="model-palette-label">{labels.material}</span>
        {palette.map((p) => (
          <button
            key={p.value}
            type="button"
            role="radio"
            aria-checked={color === p.value}
            aria-label={p.name}
            title={p.name}
            className={`palette-swatch ${color === p.value ? 'is-active' : ''}`}
            style={{ background: p.value }}
            onClick={() => setColor(p.value)}
          />
        ))}
      </div>
    </div>
  );
}
