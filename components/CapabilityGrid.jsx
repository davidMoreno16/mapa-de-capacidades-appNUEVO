import CapabilityCard from "./CapabilityCard";

export default function CapabilityGrid({ capabilities }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "20px",
      marginTop: "20px"
    }}>
      {capabilities.map((cap, i) => (
        <CapabilityCard
          key={i}
          title={cap.name}
          description={cap.description}
        />
      ))}
    </div>
  );
}
