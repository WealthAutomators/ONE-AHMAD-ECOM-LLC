import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StarRating } from "@/components/ui/star-rating";

export function CustomerReviews() {
  return (
    <section className="bg-card py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Customer Reviews"
          subtitle="Verified voices from shoppers who value curation over clutter."
          centered
        />
        <div className="mt-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {testimonials.map((t) => (
            <div key={t.id} className="relative">
              <span
                aria-hidden
                className="font-heading text-6xl leading-none text-secondary/25"
              >
                &ldquo;
              </span>
              <StarRating rating={t.rating} showCount={false} size="sm" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {t.text}
              </p>
              <div className="mt-6">
                <p className="text-sm font-medium">{t.name}</p>
                <p className="mt-0.5 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  Verified Purchase · {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
