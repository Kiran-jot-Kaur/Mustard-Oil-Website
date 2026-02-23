const badges = ["Lab Tested", "FSSAI Registered", "Farmer Sourced", "Direct From Farm Pricing"];

export function TrustBadgesRow() {
  return (
    <div className="flex flex-wrap gap-3">
      {badges.map((badge) => (
        <span key={badge} className="rounded-full border border-forest/20 bg-forest/5 px-4 py-2 text-sm font-medium text-forest">
          {badge}
        </span>
      ))}
    </div>
  );
}
