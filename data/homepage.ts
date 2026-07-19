import {
  Feature,
  HeroSlide,
  PromoBanner,
} from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-1.jpg",
    headline: "Modern Living",
    description: "Refined essentials for spaces that feel calm, considered, and current.",
    ctaText: "Shop Home",
    ctaLink: "/categories/home-kitchen",
  },
  {
    id: "2",
    image: "/hero/hero-2.jpg",
    headline: "Technology Essentials",
    description: "Quietly powerful gadgets designed for everyday performance.",
    ctaText: "Shop Electronics",
    ctaLink: "/categories/electronics",
  },
  {
    id: "3",
    image: "/hero/hero-3.jpg",
    headline: "Home Refresh",
    description: "Thoughtful updates that elevate kitchens, baths, and living rooms.",
    ctaText: "Explore Collection",
    ctaLink: "/categories",
  },
  {
    id: "4",
    image: "/hero/hero-4.jpg",
    headline: "Everyday Luxury",
    description: "Curated pieces that bring a sense of ease to daily rituals.",
    ctaText: "Shop Now",
    ctaLink: "/shop",
  },
];

export const featuredCollections = [
  {
    id: "1",
    label: "Living",
    title: "Modern Interiors",
    href: "/categories/home-kitchen",
    image: "/banners/collection-1.jpg",
  },
  {
    id: "2",
    label: "Tech",
    title: "Connected Living",
    href: "/categories/electronics",
    image: "/banners/collection-2.jpg",
  },
  {
    id: "3",
    label: "Wellness",
    title: "Ritual & Restore",
    href: "/categories/health-wellness",
    image: "/banners/collection-3.jpg",
  },
  {
    id: "4",
    label: "Style",
    title: "Quiet Luxury",
    href: "/categories/fashion-accessories",
    image: "/banners/collection-4.jpg",
  },
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "star",
    title: "Curated Selection",
    description: "Every product is chosen for quality, design, and lasting everyday use.",
  },
  {
    id: "2",
    icon: "shield",
    title: "Secure Checkout",
    description: "A polished, encrypted checkout experience designed for peace of mind.",
  },
  {
    id: "3",
    icon: "truck",
    title: "Reliable Delivery",
    description: "Orders ship promptly with clear tracking from warehouse to doorstep.",
  },
  {
    id: "4",
    icon: "rotate",
    title: "Easy Returns",
    description: "A simple return process built around customer confidence and convenience.",
  },
];

export const dealsEndTime = new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString();

export const homepageDealsSlugs = [
  "ceramic-table-lamp",
  "linen-throw-blanket",
  "marble-serving-board",
  "wireless-earbuds",
  "yoga-mat",
  "gaming-headset",
] as const;

export const homepageTrendingSlugs = [
  "ceramic-table-lamp",
  "smart-humidifier",
  "linen-throw-blanket",
  "marble-serving-board",
  "brass-desk-organizer",
  "silk-pillowcase-set",
  "matte-water-bottle",
  "wireless-earbuds",
] as const;

export const homepageBestsellerSlugs = [
  "ceramic-table-lamp",
  "bluetooth-speaker",
  "bath-towel-set",
  "linen-throw-blanket",
  "marble-serving-board",
  "yoga-mat",
  "smart-humidifier",
  "wireless-earbuds",
] as const;

export const homepageFeaturedSlugs = [
  "ceramic-table-lamp",
  "smart-humidifier",
  "linen-throw-blanket",
  "marble-serving-board",
  "brass-desk-organizer",
  "silk-pillowcase-set",
  "matte-water-bottle",
  "sculptural-candle-set",
  "wireless-earbuds",
  "bath-towel-set",
] as const;

export const homepageNewArrivalSlugs = [
  "ceramic-table-lamp",
  "smart-humidifier",
  "linen-throw-blanket",
  "marble-serving-board",
  "brass-desk-organizer",
  "silk-pillowcase-set",
  "matte-water-bottle",
  "sculptural-candle-set",
  "woven-storage-baskets",
  "minimal-wall-clock",
  "oak-phone-stand",
  "amber-glass-diffuser",
] as const;

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: "Designed Around Modern Life.",
  description:
    "A carefully curated marketplace for elevated everyday living — not another discount retailer.",
  buttonText: "Explore Collection",
  buttonLink: "/categories",
  image: "/banners/featured.jpg",
};

export const featuredCollection = {
  title: "Featured Products",
  description:
    "A rotating edit of standout pieces across home, tech, wellness, and lifestyle.",
  bannerImage: "/banners/featured.jpg",
  categorySlug: "home-kitchen",
};

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Electronics", slug: "electronics" },
  { label: "Home & Kitchen", slug: "home-kitchen" },
  { label: "Beauty", slug: "beauty" },
  { label: "Fashion", slug: "fashion-accessories" },
];

export const newsletter = {
  title: "Stay Inspired.",
  description:
    "Receive curated collections, seasonal launches and exclusive offers.",
  placeholder: "Enter your email address",
  buttonText: "Subscribe",
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export const aboutSection = {
  title: "Designed Around Modern Life.",
  description:
    "ONE AHMAD ECOM LLC is a carefully curated marketplace — not a discount warehouse. We gather refined essentials across home, technology, beauty, and lifestyle so modern living feels intentional, elevated, and effortless.",
  checklist: [
    "Curated marketplace across 13 departments",
    "Quality-first selection for modern homes",
    "Reliable delivery and simple returns",
    "Support focused on thoughtful shopping",
  ],
  buttonText: "Explore Collection",
  buttonLink: "/categories",
  image: "/banners/about.jpg",
};

export const shopByCategorySlugs = [
  "electronics",
  "home-kitchen",
  "bathroom",
  "beauty",
  "gaming",
  "office-supplies",
  "sports-outdoors",
  "fashion-accessories",
  "baby-products",
  "pet-supplies",
  "health-wellness",
  "educational-toys",
] as const;
