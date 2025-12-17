export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Operations Director",
    position: "",
    company: "Textile Mill Client",
    content: "They delivered our 6.5 MW project on time and within budget. Our electricity costs have reduced by 70%. Highly professional team!",
    rating: 5
  },
  {
    id: "2",
    name: "Plant Manager",
    position: "",
    company: "Fabrics Industry Client",
    content: "The net metering support was seamless. From DISCO approvals to final commissioning, they handled everything. Excellent after-sales service.",
    rating: 5
  },
  {
    id: "3",
    name: "CEO",
    position: "",
    company: "Industrial Client",
    content: "Best decision we made for our factory. The ROI projections were accurate, and the system has been performing flawlessly for over 2 years.",
    rating: 5
  }
];
