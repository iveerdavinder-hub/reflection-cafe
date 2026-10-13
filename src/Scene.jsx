import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import CircularCarousel from "./components/CircularCarousel/CircularCarousel";
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
  const [view, setView] = useState("morph"); // "morph" | "3d"
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
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const cardWidth = isMobile ? 175 : isTablet ? 210 : 240;
  const gap = isMobile ? 32 : isTablet ? 42 : 54;

  const dishes = [
    {
      src: "./images/dishes/jhol-momos.jpg",
      alt: "Jhol Momos",
      title: "Jhol Momos",
      subtitle: "Comfort Dumplings · Warm Spiced Sesame Broth"
    },
    {
      src: "./images/dishes/honey-chilli-potato.jpg",
      alt: "Honey Chilli Potato",
      title: "Honey Chilli Potato",
      subtitle: "Wok-Tossed Crispy Potatoes · Sweet Sesame Glaze"
    },
    {
      src: "./images/dishes/kunafa.jpg",
      alt: "Kunafa & Sweet Treats",
      title: "Kunafa & Sweets",
      subtitle: "Artisan Dessert · Golden Kataifi & Rose Drizzle"
    },
    {
      src: "./images/dishes/pour-over-coffee.jpg",
      alt: "Artisan Pour-Over Coffee",
      title: "Pour-Over Coffee",
      subtitle: "Specialty Brew · Single-Origin Roast"
    },
    {
      src: "./images/dishes/truffle-pizza.jpg",
      alt: "Woodfired Truffle Pizza",
      title: "Truffle Mushroom Pizza",
      subtitle: "Artisan Sourdough · Wild Truffle & Mozzarella"
    },
    {
      src: "./images/dishes/iced-spanish-latte.jpg",
      alt: "Iced Spanish Latte",
      title: "Iced Spanish Latte",
      subtitle: "Cold Bar Favorite · Velvety Espresso & Condensed Milk"
    },
    {
      src: "./images/dishes/avocado-toast.jpg",
      alt: "Smashed Avocado Sourdough",
      title: "Smashed Avocado Toast",
      subtitle: "Rustic Sourdough · Feta, Microgreens & Chili Flakes"
    },
    {
      src: "./images/dishes/biscoff-cheesecake.jpg",
      alt: "Lotus Biscoff Cheesecake",
      title: "Biscoff Cheesecake",
      subtitle: "Velvet Cream Cheese · Spiced Cookie Crust & Drizzle"
    },
    {
      src: "./images/dishes/waffle-tower.jpg",
      alt: "Nutella Belgian Waffle",
      title: "Belgian Waffle Tower",
      subtitle: "Golden Crisp Waffle · Warm Nutella & Strawberries"
    },
    {
      src: "./images/dishes/cold-brew-float.jpg",
      alt: "Vanilla Cold Brew Float",
      title: "Cold Brew Float",
      subtitle: "18-Hour Slow Brew · Madagascar Vanilla Bean Scoop"
    },
    {
      src: "./images/dishes/french-toast.jpg",
      alt: "Brioche French Toast",
      title: "Brioche French Toast",
      subtitle: "All-Day Brunch · Fresh Berries & Pure Maple"
    },
    {
      src: "./images/dishes/pesto-penne.jpg",
      alt: "Creamy Basil Pesto Penne",
      title: "Walnut Pesto Penne",
      subtitle: "Fresh Hand-rolled Pasta · Garden Basil & Cherry Tomatoes"
    }
  ];

  return (
    <div className="menu-showcase-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "18px",
          position: "relative",
          zIndex: 5
        }}
      >
        <button
          type="button"
          onClick={() => setView("morph")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            padding: "9px 20px",
            borderRadius: "999px",
            fontSize: "12.5px",
            fontWeight: 700,
            cursor: "pointer",
            transition: "all .25s ease",
            background: view === "morph" ? "var(--orange)" : "rgba(23,36,30,.06)",
            color: view === "morph" ? "#17241e" : "var(--muted)",
            border: view === "morph" ? "1px solid var(--orange)" : "1px solid var(--line)",
            boxShadow: view === "morph" ? "0 4px 14px rgba(216,140,90,.35)" : "none"
          }}
          aria-pressed={view === "morph"}
        >
          <span>✨</span> Shader Morph Gallery
        </button>
        <button
          type="button"
          onClick={() => setView("3d")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            padding: "9px 20px",
            borderRadius: "999px",
            fontSize: "12.5px",
            fontWeight: 700,
            cursor: "pointer",
            transition: "all .25s ease",
            background: view === "3d" ? "var(--orange)" : "rgba(23,36,30,.06)",
            color: view === "3d" ? "#17241e" : "var(--muted)",
            border: view === "3d" ? "1px solid var(--orange)" : "1px solid var(--line)",
            boxShadow: view === "3d" ? "0 4px 14px rgba(216,140,90,.35)" : "none"
          }}
          aria-pressed={view === "3d"}
        >
          <span>🔄</span> 3D Circular Cylinder
        </button>
      </div>

      {view === "morph" ? (
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
      ) : (
        <div className="menu-carousel-wrapper">
          <CircularCarousel
            items={dishes}
            preset="cylinder"
            cardWidth={cardWidth}
            aspectRatio={0.82}
            gap={gap}
            speed={10}
            autoplay="drift"
            draggable={true}
            momentum={0.65}
            snap={true}
            pauseOnHover={true}
            captions={true}
            focusOnClick={true}
            fadeColor="#e9ede4"
            cornerRadius={14}
          />
        </div>
      )}
    </div>
  );
}

const menuContainer = document.getElementById("menu-carousel-root");
if (menuContainer) {
  createRoot(menuContainer).render(<MenuDishesShowcase />);
}
