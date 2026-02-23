export const siteConfig = {
  name: "KIRSAANI",
  domain: "https://kirsaani.in",
  location: "Kharar, Punjab",
  description:
    "KIRSAANI brings pure Kachi Ghani cold-pressed mustard oil directly from farmers in Punjab to families who value honest food.",
  defaultWhatsapp: "919999999999",
  defaultCall: "919999999999"
};

export const highlights = [
  "100% pure",
  "No chemicals",
  "Natural aroma",
  "Cold pressed",
  "Lab tested"
];

export const whatsappLink = (message: string) => {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? siteConfig.defaultWhatsapp;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

export const callLink = () => {
  const number = process.env.NEXT_PUBLIC_CALL_NUMBER ?? siteConfig.defaultCall;
  return `tel:${number}`;
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/purity", label: "Purity Report" },
  { href: "/product", label: "Product" },
  { href: "/recipes", label: "Recipes" },
  { href: "/contact", label: "Contact" }
];
