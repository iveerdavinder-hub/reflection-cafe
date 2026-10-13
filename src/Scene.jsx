import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import CircularCarousel from "./components/CircularCarousel/CircularCarousel";

export function MenuDishesCarousel() {
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
  );
}

const menuContainer = document.getElementById("menu-carousel-root");
if (menuContainer) {
  createRoot(menuContainer).render(<MenuDishesCarousel />);
}
