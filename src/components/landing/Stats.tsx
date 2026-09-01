import { FadeIn } from "./FadeIn";

const stats = [
  { value: "10K+", label: "QR Codes Created" },
  { value: "5K+", label: "Happy Users" },
  { value: "8K+", label: "Downloads" },
];

export function Stats() {
  return (
    <section className="py-16 bg-black border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
