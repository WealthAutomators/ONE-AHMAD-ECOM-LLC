import { NavLink } from "@/types";

export const leftNavLinks: NavLink[] = [
  { label: "Collections", href: "/categories" },
  { label: "Shop", href: "/shop" },
  { label: "New Arrivals", href: "/new-arrivals" },
];

export const rightNavLinks: NavLink[] = [
  { label: "Journal", href: "/about" },
  { label: "Support", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const navigationLinks: NavLink[] = [
  ...leftNavLinks,
  ...rightNavLinks,
];

export const utilityBarLinks: { label: string; href: string }[] = [];

export const footerLinks = {
  collections: [
    { label: "Shop All", href: "/shop" },
    { label: "Collections", href: "/categories" },
    { label: "Electronics", href: "/categories/electronics" },
    { label: "Home & Kitchen", href: "/categories/home-kitchen" },
    { label: "Fashion", href: "/categories/fashion-accessories" },
    { label: "Best Sellers", href: "/best-sellers" },
    { label: "New Arrivals", href: "/new-arrivals" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Journal", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
  support: [
    { label: "FAQs", href: "/faq" },
    { label: "Track Order", href: "/track-order" },
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "Refund Policy", href: "/refund" },
  ],
  // Legacy keys for any remaining references
  shop: [
    { label: "Shop All", href: "/shop" },
    { label: "Collections", href: "/categories" },
    { label: "Electronics", href: "/categories/electronics" },
    { label: "Home & Kitchen", href: "/categories/home-kitchen" },
    { label: "Fashion", href: "/categories/fashion-accessories" },
    { label: "Best Sellers", href: "/best-sellers" },
    { label: "New Arrivals", href: "/new-arrivals" },
  ],
  customerService: [
    { label: "Contact Us", href: "/contact" },
    { label: "Track Order", href: "/track-order" },
    { label: "FAQs", href: "/faq" },
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
  ],
  policies: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
    { label: "About Us", href: "/about" },
  ],
};

export const paymentMethods = [
  { name: "Visa", icon: "/payments/visa.svg" },
  { name: "Mastercard", icon: "/payments/mastercard.svg" },
  { name: "Amex", icon: "/payments/amex.svg" },
  { name: "PayPal", icon: "/payments/paypal.svg" },
  { name: "Apple Pay", icon: "/payments/apple-pay.svg" },
];
