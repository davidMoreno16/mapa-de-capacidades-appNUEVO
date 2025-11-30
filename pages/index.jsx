import CapabilityGrid from "@/components/CapabilityGrid";

export default function Home() {

  const capabilities = [
    { name: "Ventas", description: "Gestión de pedidos mayoristas." },
    { name: "Inventarios", description: "Control de existencias y reposición." },
    { name: "Logística", description: "Despachos y entregas." },
    { name: "Clientes", description: "Manejo de cuentas y atención." },
    { name: "Proveedores", description: "Relación y compra a proveedores." },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>Mapa de Capacidades – Mega Mayorista</h1>
      <CapabilityGrid capabilities={capabilities} />
    </div>
  );
}

