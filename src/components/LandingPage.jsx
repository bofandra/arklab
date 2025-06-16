import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sparkles, Smartphone, Brain, Workflow, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleDemoClick = () => {
    navigate("/demo");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white font-sans relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 z-0"
      >
        <source src="/videos/tech-background.mp4" type="video/mp4" />
      </video>

      <header className="relative z-10 flex justify-between items-center px-10 py-6 border-b border-white/10">
        <h1 className="text-3xl font-bold tracking-tight">Arklab</h1>
        <Button onClick={handleDemoClick} className="bg-white text-black hover:bg-slate-100">Hubungi Kami</Button>
      </header>

      <section className="relative z-10 px-10 py-20 text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold tracking-wide mb-6 leading-tight bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
        >
          Solusi Digital Terpadu untuk Bisnis Modern
        </motion.h2>
        <p className="text-xl text-slate-300 mb-10">
          Arklab membantu Anda membangun aplikasi web, mobile, sistem AI, dan e-commerce
          secara efisien dan terintegrasi. Ciptakan otomatisasi dan skalabilitas bisnis Anda bersama kami.
        </p>
        <Button
          onClick={handleDemoClick}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg rounded-2xl shadow-xl"
        >
          Minta Demo
        </Button>
      </section>

      <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-10 pb-20">
        {[
          {
            icon: <Smartphone className="h-12 w-12" />,
            title: "Aplikasi Mobile",
            text: "Bangun aplikasi iOS dan Android cepat, modern, dan intuitif."
          },
          {
            icon: <Sparkles className="h-12 w-12" />,
            title: "Website Dinamis",
            text: "Tampilan profesional & performa tinggi untuk website bisnis Anda."
          },
          {
            icon: <Brain className="h-12 w-12" />,
            title: "Kecerdasan Buatan",
            text: "Integrasikan AI untuk otomatisasi dan pengambilan keputusan cerdas."
          },
          {
            icon: <Workflow className="h-12 w-12" />,
            title: "Otomatisasi Proses",
            text: "Tingkatkan efisiensi dengan alur kerja yang otomatis dan terukur."
          },
          {
            icon: <ShoppingCart className="h-12 w-12" />,
            title: "E-Commerce",
            text: "Solusi toko online lengkap dari katalog hingga pembayaran."
          }
        ].map(({ icon, title, text }, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md backdrop-blur">
              <CardContent>
                <div className="mb-4 text-cyan-400">{icon}</div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-slate-300 text-sm">{text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[30%] left-[10%] w-16 h-16 bg-cyan-400 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-[20%] right-[15%] w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-20 animate-bounce" />
      </div>

      <footer className="relative z-10 text-center text-slate-500 text-sm py-6 border-t border-white/10">
        © 2025 Arklab. Seluruh hak cipta dilindungi.
      </footer>
    </div>
  );
}
