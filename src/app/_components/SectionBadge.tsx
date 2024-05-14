export default function SectionBadge({ text }: { text: string }) {
  return (
    <h4 className="uppercase text-section-badge-font font-bold text-bg bg-accent w-fit h-fit px-4 py-1.5 rounded-lg whitespace-nowrap">
      {text}
    </h4>
  );
}
