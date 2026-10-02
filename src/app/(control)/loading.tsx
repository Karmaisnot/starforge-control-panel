export default function Loading() {
  return (
    <div className="page-stack" aria-label="Loading workspace">
      <div className="skeleton skeleton-title" />
      <div className="skeleton skeleton-copy" />
      <div className="metrics-grid">
        {Array.from({ length: 4 }).map((_, index) => <div className="skeleton skeleton-metric" key={index} />)}
      </div>
      <div className="skeleton skeleton-panel" />
    </div>
  );
}

