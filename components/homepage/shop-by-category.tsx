"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { shopByCategorySlugs } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ShopByCategory() {
  const tiles = shopByCategorySlugs
    .map((slug) => categories.find((c) => c.slug === slug))
    .filter((c): c is (typeof categories)[number] => Boolean(c));

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Shop By Category"
          subtitle="Large editorial tiles across every department we curate."
          centered
        />
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {tiles.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-muted"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <h3 className="font-heading text-2xl font-medium text-white md:text-3xl">
                  {category.name}
                </h3>
                <span className="mt-3 inline-flex translate-y-2 items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-white/0 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-white group-hover:opacity-100">
                  Shop Now
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
