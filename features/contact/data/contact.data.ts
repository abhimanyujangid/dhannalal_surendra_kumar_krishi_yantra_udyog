export const CONTACT_CONTENT = {
  hero: {
    headlineLine1: "Get in",
    headlineLine2: "Touch",
    paragraphs: [
      "Whether you're looking for smart farming solutions or have a question about our equipment, we are here to help.",
      "Reach out to us and let's cultivate a greener future together."
    ]
  },
  info: {
    address: "123 Green Valley Road, Eco District",
    phone: "+91 98765 43210",
    email: "hello@focofirm.com"
  },
  form: {
    heading: "Send us a message",
    fields: {
      name: "Your Name",
      email: "Your Email",
      message: "How can we help you?"
    },
    submit: "Send Message"
  }
} as const;

export type ContactContent = typeof CONTACT_CONTENT;
