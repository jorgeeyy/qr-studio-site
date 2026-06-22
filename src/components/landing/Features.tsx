import {
  Palette,
  Layers,
  Scan,
  BarChart3,
  Share2,
  Sparkles,
} from "lucide-react";

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
    title: "History & Analytics",
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
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Powerful tools for modern QR experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl border border-border bg-slate-50 hover:bg-primary/5 hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
