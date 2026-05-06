export const ABOUT_CONTENT = {
  hero: {
    headlineLine1: "Cultivating a",
    headlineLine2: "Greener Future",
    paragraphs: [
      "Our journey began with a simple belief: sustainable agriculture is not just an alternative, it's the only path forward. We are dedicated to pioneering smart farming solutions that respect the earth while maximizing yield.",
      "By bridging traditional wisdom with modern technology, we empower communities and farmers to build resilient, eco-friendly food systems. Join us in planting the seeds of tomorrow."
    ]
  },
  ownerMessage: {
    heading: "A Message From Our Founder",
    name: "Rahul",
    role: "Founder & Visionary",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    message: [
      "When I started Focofirm, my goal was simple: to create a sustainable future where technology and agriculture work hand in hand. Every piece of equipment we build, every solution we offer, is crafted with the farmer's prosperity in mind.",
      "Our dedication goes beyond business; it's a commitment to the land and the people who cultivate it. Together, we are planting the seeds of tomorrow."
    ]
  }
} as const;

export type AboutContent = typeof ABOUT_CONTENT;
