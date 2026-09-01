import { QrCode } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Download", href: "#download" },
    { label: "Changelog", href: "#" },
  ],
  Support: [
    { label: "Contact", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Bug Report", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <QrCode className="w-4 h-4 text-black" />
              </div>
              <span className="text-lg font-semibold text-white">QR Studio</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your all-in-one QR code toolkit for Android. Create, customize, and scan with ease.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-medium text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} QR Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
