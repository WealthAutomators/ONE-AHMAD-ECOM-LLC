"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { company } from "@/data/company";
import { leftNavLinks, rightNavLinks, navigationLinks } from "@/data/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FullscreenSearch } from "@/components/navbar/fullscreen-search";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen || searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, searchOpen]);

  const solid = !isHome || scrolled || mobileOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          solid
            ? "border-b border-border bg-white/95 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <Container>
          <div className="relative flex h-[72px] items-center lg:h-20">
            <nav className="hidden flex-1 items-center gap-8 lg:flex">
              {leftNavLinks.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className={cn(
                    "text-[13px] font-medium uppercase tracking-[0.14em] transition-colors",
                    solid
                      ? "text-foreground hover:text-secondary"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-1 items-center lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "h-10 w-10",
                  solid ? "text-foreground" : "text-white hover:bg-white/10 hover:text-white"
                )}
                onClick={() => setMobileOpen((o) => !o)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>

            <Link
              href="/"
              className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            >
              <Image
                src="/logo/logo.svg"
                alt={company.name}
                width={300}
                height={52}
                priority
                className={cn(
                  "h-8 w-auto transition-[filter] duration-300 sm:h-9",
                  !solid && "brightness-0 invert"
                )}
              />
            </Link>

            <div className="flex flex-1 items-center justify-end gap-6">
              <nav className="hidden items-center gap-8 lg:flex">
                {rightNavLinks.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    className={cn(
                      "text-[13px] font-medium uppercase tracking-[0.14em] transition-colors",
                      solid
                        ? "text-foreground hover:text-secondary"
                        : "text-white/90 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-0.5">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "h-9 w-9",
                    solid ? "text-foreground" : "text-white hover:bg-white/10 hover:text-white"
                  )}
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search"
                >
                  <Search className="h-[18px] w-[18px]" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className={cn(
                    "relative h-9 w-9",
                    solid ? "text-foreground" : "text-white hover:bg-white/10 hover:text-white"
                  )}
                >
                  <Link href="/wishlist" aria-label="Wishlist">
                    <Heart className="h-[18px] w-[18px]" />
                    {wishlist.length > 0 && (
                      <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-primary">
                        {wishlist.length}
                      </span>
                    )}
                  </Link>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className={cn(
                    "hidden h-9 w-9 sm:inline-flex",
                    solid ? "text-foreground" : "text-white hover:bg-white/10 hover:text-white"
                  )}
                >
                  <Link href="/profile" aria-label="Account">
                    <User className="h-[18px] w-[18px]" />
                  </Link>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className={cn(
                    "relative h-9 w-9",
                    solid ? "text-foreground" : "text-white hover:bg-white/10 hover:text-white"
                  )}
                >
                  <Link href="/cart" aria-label="Cart">
                    <ShoppingBag className="h-[18px] w-[18px]" />
                    {itemCount > 0 && (
                      <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                        {itemCount}
                      </span>
                    )}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>

        {mobileOpen && (
          <div className="border-t border-border bg-white lg:hidden">
            <Container className="py-6">
              <ul className="space-y-1">
                {navigationLinks.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="block px-1 py-3 text-sm font-medium uppercase tracking-[0.12em] text-foreground transition-colors hover:text-secondary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>
          </div>
        )}
      </header>

      <FullscreenSearch open={searchOpen} onClose={() => setSearchOpen(false)} />

      {!isHome && <div className="h-[72px] lg:h-20" aria-hidden />}
    </>
  );
}
