"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { searchProducts } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Input } from "@/components/ui/input";

interface FullscreenSearchProps {
  open: boolean;
  onClose: () => void;
}

export function FullscreenSearch({ open, onClose }: FullscreenSearchProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const results = query.length > 0 ? searchProducts(query).slice(0, 8) : [];

  useEffect(() => {
    if (open) {
      setQuery("");
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/shop?search=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-white">
      <div className="flex items-center justify-between border-b border-border px-4 py-4 sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Search
        </p>
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-[4px] text-foreground transition-colors hover:bg-muted"
          aria-label="Close search"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-8">
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <Search className="pointer-events-none absolute left-0 top-1/2 h-6 w-6 -translate-y-1/2 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, collections, categories…"
              className="h-14 rounded-none border-0 border-b border-border bg-transparent pl-10 pr-4 text-xl shadow-none focus-visible:ring-0 md:text-2xl"
            />
          </div>
        </form>

        <div className="mt-10">
          {query.trim().length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Start typing to discover curated products.
            </p>
          ) : results.length > 0 ? (
            <ul className="divide-y divide-border">
              {results.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/product/${product.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-4 py-4 transition-colors hover:opacity-70"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[4px] bg-muted">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-base font-medium">{product.name}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{product.category}</p>
                    </div>
                    <p className="shrink-0 text-sm font-medium">
                      {formatPrice(product.salePrice ?? product.price)}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">
              No products found for &quot;{query}&quot;.
            </p>
          )}

          {query.trim() && results.length > 0 && (
            <button
              type="button"
              className="mt-8 text-sm font-medium text-secondary transition-colors hover:text-accent"
              onClick={() => {
                router.push(`/shop?search=${encodeURIComponent(query.trim())}`);
                onClose();
              }}
            >
              View all results →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
