export default function CapabilityCard({ title, description }) {
  return (
    <div style={{
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      background: "white",
      boxShadow: "0 3px 8px rgba(0,0,0,0.1)"
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

