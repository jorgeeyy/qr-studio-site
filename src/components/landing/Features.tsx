import {
  Palette,
  Layers,
  Scan,
  BarChart3,
  Share2,
  Sparkles,
} from "lucide-react";
import { FadeIn } from "./FadeIn";

const features = [
  {
    icon: Sparkles,
    title: "Custom QR Studio",
    description: "Design unique QR codes with custom colors, shapes, and logos.",
  },
  {
    icon: Palette,
    title: "Dynamic Colors",
    description: "Personalize foreground and background colors to match your brand.",
  },
  {
    icon: Layers,
    title: "Multiple QR Types",
    description: "Generate QR codes for websites, WiFi, socials, and more.",
  },
  {
    icon: Scan,
    title: "Instant Scanning",
    description: "Scan any QR code instantly with your device camera.",
  },
  {
    icon: BarChart3,
    title: "History",
    description: "Track all your generated and scanned QR codes in one place.",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Export and share your QR codes in high resolution anywhere.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-3 tracking-wide uppercase">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Everything you need
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.05}>
              <div className="group rounded-xl border border-border bg-card p-6 hover:border-foreground/10 transition-colors duration-200">
                <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <feature.icon className="w-4 h-4 text-foreground" />
                </div>
                <h3 className="text-base font-medium text-foreground mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
