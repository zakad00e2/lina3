export default function BlueprintOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Corner marks — top right */}
      <div className="absolute top-8 right-8">
        <div className="w-8 h-px bg-gold/20" />
        <div className="w-px h-8 bg-gold/20" />
      </div>
      {/* Corner marks — top left */}
      <div className="absolute top-8 left-8 flex flex-col items-end">
        <div className="w-8 h-px bg-gold/20" />
        <div className="w-px h-8 bg-gold/20 self-start" />
      </div>
      {/* Corner marks — bottom right */}
      <div className="absolute bottom-8 right-8 flex flex-col justify-end">
        <div className="w-px h-8 bg-gold/20" />
        <div className="w-8 h-px bg-gold/20" />
      </div>
      {/* Corner marks — bottom left */}
      <div className="absolute bottom-8 left-8 flex flex-col items-end justify-end">
        <div className="w-px h-8 bg-gold/20 self-start" />
        <div className="w-8 h-px bg-gold/20" />
      </div>
      {/* Coord labels */}
      <span className="absolute top-10 right-20 coord-label">A1</span>
      <span className="absolute bottom-10 left-20 coord-label">B4</span>
    </div>
  );
}
