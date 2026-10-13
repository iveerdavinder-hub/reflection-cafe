"use client"

import MorphGallery, { type MorphItem } from "@/components/ui/morph-gallery"

export const DEMO_ITEMS: MorphItem[] = [
  {
    src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=160&q=80",
    alt: "Artisanal Pour-Over Coffee brewing with golden crema",
  },
  {
    src: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=160&q=80",
    alt: "Steamed Jhol Momos in rich sesame broth",
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=160&q=80",
    alt: "Woodfired Truffle Mushroom Pizza with melted mozzarella",
  },
  {
    src: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=160&q=80",
    alt: "Smashed Avocado Toast on artisan sourdough with feta",
  },
  {
    src: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=160&q=80",
    alt: "Crispy Honey Chilli Potato tossed in sweet sesame glaze",
  },
  {
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=160&q=80",
    alt: "Kunafa & Sweet Treats layered with pistachios and rose syrup",
  },
]

export default function Demo() {
  // w-full is load-bearing: flex items left at width:auto shrink to fit contents
  return (
    <div className="relative w-full">
      <MorphGallery items={DEMO_ITEMS} height="520px" autoplay={4500} />
    </div>
  )
}
