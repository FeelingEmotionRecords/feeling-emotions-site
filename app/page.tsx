
'use client';
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { motion } from "framer-motion";
import { Download, Music, ShoppingCart, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans p-6">
      <section className="text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-wide"
        >
          Feeling Emotions Records
        </motion.h1>
        <p className="mt-4 text-lg text-gray-300">
          Musik mit Gefühl. Kreativ. Positiv. R&B mit Seele.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 py-10">
        <Card className="bg-zinc-900">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Music size={24} /> Hör rein & Lade Tracks
            </h2>
            <p className="text-gray-400">
              Hol dir emotionale Beats & Songs für ein paar Cent – fair und voller Vibes.
            </p>
            <Button className="w-full">
              <Download size={18} className="mr-2" /> Zum Musikshop
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Sparkles size={24} /> Mixing & Mastering bestellen
            </h2>
            <p className="text-gray-400">
              Du brauchst den perfekten Sound? Wir mixen & mastern mit Herz.
            </p>
            <form className="space-y-2">
              <Input placeholder="Dein Name" />
              <Input placeholder="Deine E-Mail" type="email" />
              <Textarea placeholder="Was brauchst du?" />
              <Button type="submit" className="w-full">Anfrage senden</Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 md:col-span-2">
          <CardContent className="p-6 space-y-4 text-center">
            <h2 className="text-2xl font-semibold flex justify-center gap-2">
              <ShoppingCart size={24} /> T-Shirts & Merch – coming soon
            </h2>
            <p className="text-gray-400">
              Stylische Fashion mit Feeling-Emotions-Vibe. Bald erhältlich.
            </p>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-gray-500 py-10 text-sm">
        &copy; {new Date().getFullYear()} Feeling Emotions Records – Alle Rechte vorbehalten
      </footer>
    </main>
  );
}
