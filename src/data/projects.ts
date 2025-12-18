export interface Project {
  id: string;
  name: string;
  capacity: string;
  location: string;
  category: "industrial" | "commercial" | "textile";
  image?: string;
  images?: string[];
  description?: string;
}

export const projects: Project[] = [
  {
    id: "riaz-textile",
    name: "Riaz Textile",
    capacity: "6.5 MWh",
    location: "Sheikhupura Faisalabad Rd",
    category: "textile",
    image: "/projects/riaz-textile.jpg",
    images: [
      "/projects/riaz-textile.jpg",
      "/projects/riaz-textile-2.jpg",
      "/projects/riaz-textile-3.jpg",
      "/projects/riaz-textile-4.jpg"
    ],
    description: "Large-scale textile mill solar installation with comprehensive EPC services."
  },
  {
    id: "acrowaiving-mill",
    name: "Acrowaiving Mill",
    capacity: "2 MWh",
    location: "Manga Rd, Lahore",
    category: "textile",
    description: "Complete solar power system for textile manufacturing facility. **In collaboration with Groovers Energy and Landmark Energy Group.**"
  },
  {
    id: "fauji-meat",
    name: "Fauji Meat",
    capacity: "2 MWh",
    location: "Pakistan",
    category: "industrial",
    description: "Industrial-grade solar installation for food processing facility. **In collaboration with Groovers Energy and Landmark Energy Group.**"
  },
  {
    id: "khi-port-qasim",
    name: "KHI Port Qasim",
    capacity: "—",
    location: "Port Qasim, Karachi",
    category: "commercial",
    image: "/projects/khi-port-qasim.jpg",
    description: "Strategic solar deployment at Pakistan's major port facility."
  },
  {
    id: "combine-fabrics",
    name: "Combine Fabrics",
    capacity: "2 MWh",
    location: "Lahore",
    category: "textile",
    image: "/projects/combine-fabrics.jpg",
    description: "Sustainable energy solution for fabric manufacturing operations."
  }
];

export const projectCategories = [
  { value: "all", label: "All Projects" },
  { value: "industrial", label: "Industrial" },
  { value: "commercial", label: "Commercial" },
  { value: "textile", label: "Textile" }
];
