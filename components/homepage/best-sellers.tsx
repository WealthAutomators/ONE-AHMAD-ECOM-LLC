"use client";

import { homepageBestsellerSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Carousel } from "@/components/ui/carousel";
import { ProductCard } from "@/components/product/product-card";

export function BestSellers() {
  const products = getProductsBySlugs(homepageBestsellerSlugs);

  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Best Sellers"
          subtitle="Widely loved pieces with quiet presence and lasting quality."
          viewMoreLink="/best-sellers"
          centered
        />
        <Carousel slidesToShow={4} className="mt-4 px-10" showArrows showDots={false}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
