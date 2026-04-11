// Cinematic Noir — Section label with aperture accent
interface Props {
  label: string;
  number?: string;
}

export default function SectionLabel({ label, number }: Props) {
  return (
    <div className="flex items-center gap-4 mb-4">
      {number && (
        <span className="font-display text-[oklch(0.65_0.2_250)] text-sm font-semibold tracking-wider">
          {number}
        </span>
      )}
      <div className="h-px w-8 bg-gradient-to-r from-[oklch(0.65_0.2_250)] to-[oklch(0.75_0.14_80)]" />
      <span className="font-display text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
        {label}
      </span>
    </div>
  );
}
