import { HeroBanner } from "@/components/homepage/hero-banner";
import { EditorialCollections } from "@/components/homepage/editorial-collections";
import { FeaturedCollection } from "@/components/homepage/featured-collection";
import { LifestyleStory } from "@/components/homepage/lifestyle-story";
import { BestSellers } from "@/components/homepage/best-sellers";
import { ShopByCategory } from "@/components/homepage/shop-by-category";
import { CustomerReviews } from "@/components/homepage/customer-reviews";
import { Newsletter } from "@/components/homepage/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <EditorialCollections />
      <FeaturedCollection />
      <LifestyleStory />
      <BestSellers />
      <ShopByCategory />
      <CustomerReviews />
      <Newsletter />
    </>
  );
}
