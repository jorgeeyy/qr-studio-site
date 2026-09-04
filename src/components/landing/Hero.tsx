import { Download, ArrowRight, QrCode } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";
import { PhoneFrame } from "./PhoneFrame";
import { APK_DOWNLOAD_URL } from "@/lib/constants";

const words = ["Create.", "Scan.", "Done."];

export function Hero() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <FadeIn className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  className="inline-block mr-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              A complete QR code toolkit that works fully offline. Create, customize, and scan — no internet needed.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={APK_DOWNLOAD_URL} download>
                <Button size="lg" className="rounded-full px-8 h-12 text-base gap-2 bg-white text-black hover:bg-white/90">
                  <Download className="w-5 h-5" />
                  Download APK
                </Button>
              </a>
              <a href="#features">
                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base gap-2 border-border text-white hover:bg-white/5">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </FadeIn>

          <FadeIn className="flex-shrink-0 relative" delay={0.15}>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneFrame className="w-[220px] sm:w-[240px]">
                <img
                  src="/screenshots/overview.jpg"
                  alt="QR Studio App"
                  className="w-full h-auto"
                />
              </PhoneFrame>
            </motion.div>

            <motion.div
              className="absolute -top-3 -right-3 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg shadow-white/10"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            >
              <QrCode className="w-6 h-6 text-black" />
            </motion.div>

            <motion.div
              className="absolute -bottom-2 -left-3 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs text-white font-medium backdrop-blur-sm"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
            >
              100% Offline
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
