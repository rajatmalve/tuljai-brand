import { Facebook, Instagram, MapPin, Phone, Youtube } from 'lucide-react';

// 💡 PRO TIP: Dynamic WhatsApp Number (Buyer can change easily)
const WHATSAPP_NUMBER = '919999999999';

// 🚀 Asli WhatsApp Icon
const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-foreground/5 bg-foreground py-16 text-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          
          {/* Column 1: Brand Info */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-primary">
              Tuljai Gruh Udyog
            </h3>
            <p className="mt-4 text-sm leading-relaxed opacity-70">
              Authentic Maharashtrian masalas, papads & pickles. Handcrafted with love by local women artisans.
            </p>

            {/* 🛠️ FIX: Changed <li> to <div> as there was no parent <ul> */}
            <div className="pt-6">
              <div className="text-xs font-semibold tracking-wide text-background/70 uppercase">Follow Us</div>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-background/15 bg-background/5 text-background transition-colors hover:border-primary hover:text-primary"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-background/15 bg-background/5 text-background transition-colors hover:border-primary hover:text-primary"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-background/15 bg-background/5 text-background transition-colors hover:border-primary hover:text-primary"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold">Get In Touch</h4>
            <ul className="mt-4 space-y-3 text-sm opacity-70">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                +{WHATSAPP_NUMBER}
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Maharashtra, India
              </li>
              <li className="pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20place%20an%20order`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#20b858] hover:scale-105"
                >
                  {/* 🚀 Changed to Original WhatsApp Icon */}
                  <WhatsAppIcon size={16} />
                  Order via WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8 text-center text-xs opacity-50">
          © {new Date().getFullYear()} Tuljai Gruh Udyog. All rights reserved. Built with love in India.
        </div>
      </div>
    </footer>
  );
};

export default Footer;