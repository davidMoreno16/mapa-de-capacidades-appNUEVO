"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const capacidades = [
    "Gestión de inventarios",
    "Gestión de ventas",
    "Atención al cliente",
    "Logística y distribución",
    "Administración y finanzas",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      
      {/* NAVBAR */}
      <nav className="w-full bg-blue-600 text-white py-4 shadow-md">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4">
          <h1 className="text-xl font-bold">Mapa de Capacidades</h1>
          <a
            href="#contacto"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Contacto
          </a>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex flex-col items-center py-10 px-5">

        {/* LOGO + TITULO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          <Image
            src="/logo mayorista.png"
            alt="Logo Mega Mayorista"
            width={150}
            height={150}
            className="mx-auto mb-4"
          />
          <h2 className="text-4xl font-bold text-blue-700">Mega Mayorista</h2>
        </motion.div>

        {/* TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          {[ // Cards data
            {
              title: "Información del Estudiante",
              content: (
                <>
                  <p><strong>Nombre:</strong> David Moreno</p>
                  <p><strong>Materia:</strong> Aplicaciones Nativas Cloud</p>
                  <p><strong>Universidad:</strong> UTPL</p>
                </>
              ),
            },
            {
              title: "Empresa",
              content: (
                <>
                  <p><strong>Nombre:</strong> Mega Mayorista</p>
                  <p><strong>Ciudad:</strong> Ibarra</p>
                  <p><strong>Sector:</strong> Comercialización</p>
                </>
              ),
            },
            {
              title: "Mapa de Capacidades",
              content: (
                <ul className="list-disc ml-6">
                  {capacidades.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              ),
            },
            {
              title: "Aplicación Objetivo",
              content: (
                <p>
                  Visualizar el mapa de capacidades de Mega Mayorista para apoyar
                  la digitalización de procesos internos.
                </p>
              ),
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-xl shadow-lg bg-white border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                {card.title}
              </h3>
              {card.content}
            </motion.div>
          ))}
        </div>

        {/* CONTACTO */}
        <motion.section
          id="contacto"
          className="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl mt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">Contacto</h2>
          <p><strong>📧 Email:</strong> cdmoreno3@utpl.edu.ec</p>
          <p><strong>📱 WhatsApp:</strong> +593 96 773 1391</p>
          <p>
            <strong>🌐 Web Empresa:</strong>{" "}
            <a
              href="https://elmayorista.net/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              https://elmayorista.net/
            </a>
          </p>
        </motion.section>

        {/* FOOTER */}
        <motion.footer
          className="mt-10 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          © 2025 - Proyecto del Estudiante - UTPL
        </motion.footer>
      </div>
    </div>
  );
}
