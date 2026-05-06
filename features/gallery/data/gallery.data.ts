export const GALLERY_CONTENT = {
  header: {
    title: "Our Gallery",
    description: "Explore our smart farming solutions and sustainable agriculture practices."
  },
  images: [
    {
      id: "img-1",
      url: "https://images.unsplash.com/photo-1592982537447-6f240c5f2105?auto=format&fit=crop&q=80&w=1200",
      title: "Smart Irrigation Systems",
      description: "Our state-of-the-art smart irrigation systems utilize real-time soil moisture data and weather forecasting to optimize water usage. This ensures crops receive the exact amount of water they need, reducing waste and increasing overall yield while preserving precious resources."
    },
    {
      id: "img-2",
      url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200",
      title: "Sustainable Harvesting",
      description: "Modern harvesting techniques combined with sustainable practices. We focus on methods that protect the topsoil and maintain the ecological balance of the farmland for future generations."
    },
    {
      id: "img-3",
      url: "https://images.unsplash.com/photo-1586771107445-d3afeb0dece5?auto=format&fit=crop&q=80&w=1200",
      title: "Precision Farming Drones",
      description: "Aerial monitoring using advanced drones helps farmers track crop health, identify pest infestations early, and map field variations with high precision."
    },
    {
      id: "img-4",
      url: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&q=80&w=1200",
      title: "Greenhouse Technology",
      description: "Climate-controlled environments that maximize growth potential and protect sensitive crops from harsh external conditions."
    },
    {
      id: "img-5",
      url: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=1200",
      title: "Organic Crop Production",
      description: "Cultivating high-quality organic produce using natural fertilizers and holistic pest management strategies."
    },
    {
      id: "img-6",
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
      title: "Renewable Energy Integration",
      description: "Solar-powered agricultural equipment that significantly lowers the carbon footprint of daily farming operations."
    }
  ],
  videos: [
    {
      id: "vid-1",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder, ideally a farming video
      title: "The Future of Smart Agriculture"
    },
    {
      id: "vid-2",
      url: "https://www.youtube.com/embed/jNQXAC9IVRw",
      title: "Sustainable Practices in Modern Farming"
    },
    {
      id: "vid-3",
      url: "https://www.youtube.com/embed/ScMzIvxBSi4",
      title: "How Precision Farming Increases Yield"
    }
  ]
} as const;

export type GalleryContent = typeof GALLERY_CONTENT;
export type GalleryImage = typeof GALLERY_CONTENT.images[number];
export type GalleryVideo = typeof GALLERY_CONTENT.videos[number];
