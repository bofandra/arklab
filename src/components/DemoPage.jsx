import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { motion } from "framer-motion";

export default function DemoPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Mengirim...");
    setTimeout(() => {
      setStatus("Pesan berhasil dikirim!");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12 space-y-16">
      <section className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-4"
        >
          Layanan Unggulan Kami
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Web App", "Mobile App", "AI & Otomasi"].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-white/5 border border-white/10">
                <CardContent className="p-4">
                  <img
                    src={`/images/arklab${i + 1}.jpg`}
                    alt={feature}
                    className="rounded-lg mb-2"
                  />
                  <p className="text-sm text-slate-300">Solusi {feature} yang cepat dan andal.</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-semibold mb-4"
        >
          Tim Profesional Kami
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: "Ovi Shekh", role: "Co - Founder" },
            { name: "Abir Ahammed", role: "Co - Founder" },
            { name: "Bofandra Muhammad", role: "Indonesia Representative" }
          ].map(({ name, role }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white/5 border border-white/10 w-60">
                <CardContent className="p-4 text-center">
                  <img
                    src={`/images/team${index + 1}.png`}
                    alt={name}
                    className="rounded-full w-24 h-24 mx-auto mb-2"
                  />
                  <h3 className="text-lg font-medium mb-1">{name}</h3>
                  <p className="text-slate-400 text-sm">{role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-semibold mb-4"
        >
          Minta Demo Layanan Arklab
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <Input
            name="name"
            placeholder="Nama Anda"
            required
            className="bg-slate-800 text-white"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email Anda"
            required
            className="bg-slate-800 text-white"
            value={formData.email}
            onChange={handleChange}
          />
          <Textarea
            name="message"
            placeholder="Ceritakan kebutuhan digital Anda..."
            className="bg-slate-800 text-white"
            rows={5}
            value={formData.message}
            onChange={handleChange}
          />
          <Button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50"
            disabled={!formData.name || !formData.email || !formData.message}
          >
            Kirim Permintaan
          </Button>
          {status && <p className="text-slate-400 text-sm mt-2">{status}</p>}
        </motion.form>
      </section>
    </div>
  );
}
