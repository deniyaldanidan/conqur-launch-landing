export default function SectionBadge({ text }: { text: string }) {
  return (
    <div className="uppercase text-section-badge-font font-bold text-text bg-accent w-fit h-fit px-4 py-1.5 rounded-lg whitespace-nowrap">
      {text}
    </div>
  );
}
