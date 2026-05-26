// PDF'teki '>>>>>>' ok motifi
export default function ArrowMotif({ count = 7, className = '' }) {
  return (
    <span className={`arrow-motif ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M3 2 L9 7 L3 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="miter"
            fill="none"
          />
        </svg>
      ))}
    </span>
  );
}
