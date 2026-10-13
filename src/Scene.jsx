import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import MorphGallery from "./components/ui/morph-gallery";

const CAFE_MORPH_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=160&q=80",
    alt: "Artisan Pour-Over Coffee — Single-Origin Roast"
  },
  {
    src: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=160&q=80",
    alt: "Jhol Momos — Comfort Dumplings in Spiced Sesame Broth"
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=160&q=80",
    alt: "Woodfired Truffle Mushroom Pizza — Slow-Fermented Crust"
  },
  {
    src: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=160&q=80",
    alt: "Smashed Avocado Sourdough Toast with Crumbled Feta"
  },
  {
    src: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=160&q=80",
    alt: "Crispy Honey Chilli Potato with Sweet Sesame Glaze"
  },
  {
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=160&q=80",
    alt: "Kunafa & Sweet Treats with Golden Kataifi & Rose Drizzle"
  },
  {
    src: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=160&q=80",
    alt: "Cold Brew Float & Iced Spanish Latte"
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=160&q=80",
    alt: "Warm Reflections Cafe Ambience and Sunlit Seating"
  }
];

export function MenuDishesShowcase() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 100);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth < 640;

  return (
    <div className="menu-showcase-container">
      <div
        style={{
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 22px 50px rgba(23,36,30,.12)",
          border: "1px solid rgba(23,36,30,.12)",
          position: "relative",
          background: "#0a0a0a"
        }}
      >
        <MorphGallery
          items={CAFE_MORPH_ITEMS}
          height={isMobile ? "380px" : "520px"}
          duration={1400}
          noiseScale={3.5}
          edge={0.16}
          drift={0.45}
          autoplay={4500}
          loop={true}
          arrows={true}
          thumbnails={!isMobile}
        />
      </div>
    </div>
  );
}

const menuContainer = document.getElementById("menu-carousel-root");
if (menuContainer) {
  createRoot(menuContainer).render(<MenuDishesShowcase />);
}
