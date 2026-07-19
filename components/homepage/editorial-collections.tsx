"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { featuredCollections } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function EditorialCollections() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Editorial Collections"
          subtitle="Magazine-inspired edits spanning living, technology, wellness, and style."
          centered
        />
        <div className="mt-6 space-y-6 md:space-y-8">
          {featuredCollections.map((collection, index) => {
            const reverse = index % 2 === 1;
            return (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
              >
                <Link
                  href={collection.href}
                  className={cn(
                    "group grid overflow-hidden bg-muted md:grid-cols-2",
                    reverse && "md:[&>*:first-child]:order-2"
                  )}
                >
                  <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px]">
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-col justify-center px-8 py-12 md:px-14 md:py-16 lg:px-20">
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-secondary">
                      {collection.label}
                    </p>
                    <h3 className="mt-4 font-heading text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
                      {collection.title}
                    </h3>
                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-foreground transition-colors group-hover:text-secondary">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
