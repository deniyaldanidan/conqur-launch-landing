type props = {
  children: React.ReactNode;
  cardTitle: string;
  cardContent: string;
};

export default function FeatureCard({
  children,
  cardTitle,
  cardContent,
}: props) {
  return (
    <div className="feature-card">
      <h3>{cardTitle}</h3>
      <p>{cardContent}</p>
      <div className="feature-icon-holder">{children}</div>
    </div>
  );
}
