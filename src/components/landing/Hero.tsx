import { Download, ArrowRight, QrCode } from "lucide-react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";
import { PhoneFrame } from "./PhoneFrame";
import { APK_DOWNLOAD_URL } from "@/lib/constants";

const phrases = [
  { prefix: "Create. Scan. ", highlight: "Done.", color: "text-emerald-400" },
  { prefix: "Create. Scan. ", highlight: "Share.", color: "text-emerald-400" },
];

function TypewriterText({ delay }: { delay: number }) {
  const [, forceRender] = useState(0);
  const textRef = useRef("");
  const phraseIdxRef = useRef(0);

  const render = useCallback(() => forceRender((k) => k + 1), []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let cancelled = false;

    function typeFull(text: string, cb: () => void) {
      let i = 0;
      function next() {
        if (cancelled) return;
        if (i <= text.length) {
          textRef.current = text.slice(0, i);
          i++;
          render();
          timeout = setTimeout(next, 80);
        } else {
          cb();
        }
      }
      next();
    }

    function deleteFull(text: string, cb: () => void) {
      let i = text.length;
      function next() {
        if (cancelled) return;
        if (i >= 0) {
          textRef.current = text.slice(0, i);
          i--;
          render();
          timeout = setTimeout(next, 40);
        } else {
          cb();
        }
      }
      next();
    }

    function run() {
      if (cancelled) return;
      const phrase = phrases[phraseIdxRef.current];
      const fullText = phrase.prefix + phrase.highlight;

      typeFull(fullText, () => {
        timeout = setTimeout(() => {
          deleteFull(fullText, () => {
            phraseIdxRef.current = (phraseIdxRef.current + 1) % phrases.length;
            timeout = setTimeout(run, 400);
          });
        }, 1200);
      });
    }

    timeout = setTimeout(run, delay * 1000);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [delay, render]);

  const phrase = phrases[phraseIdxRef.current];
  const text = textRef.current;
  const highlightStart = phrase.prefix.length;
  const typedPrefix = text.slice(0, Math.min(text.length, highlightStart));
  const typedHighlight = text.length > highlightStart ? text.slice(highlightStart) : "";

  return (
    <span>
      {typedPrefix}
      <span className={`italic ${phrase.color}`} style={{ fontFamily: "var(--font-serif)" }}>{typedHighlight}</span>
      <span className="animate-pulse">|</span>
    </span>
  );
}

export function Hero() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <FadeIn className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              <TypewriterText delay={0.3} />
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
