import Image from "next/image";
import Link from "next/link";
import { aboutSection } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function LifestyleStory() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid items-stretch gap-0 lg:grid-cols-2">
          <div className="relative min-h-[480px] overflow-hidden bg-muted lg:min-h-[640px]">
            <Image
              src={aboutSection.image}
              alt={aboutSection.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center bg-card px-8 py-16 md:px-14 lg:px-20 lg:py-24">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-secondary">
              Our Philosophy
            </p>
            <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight md:text-4xl lg:text-[2.85rem] lg:leading-[1.15]">
              {aboutSection.title}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              {aboutSection.description}
            </p>
            <Button asChild size="lg" className="mt-10 w-fit">
              <Link href={aboutSection.buttonLink}>{aboutSection.buttonText}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
