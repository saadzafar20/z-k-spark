export interface Project {
  id: string;
  name: string;
  capacity: string;
  location: string;
  category: "industrial" | "commercial" | "textile";
  image?: string;
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
    description: "Large-scale textile mill solar installation with comprehensive EPC services."
  },
  {
    id: "acrowaiving-mill",
    name: "Acrowaiving Mill",
    capacity: "2 MWh",
    location: "Manga Rd, Lahore",
    category: "textile",
    description: "Complete solar power system for textile manufacturing facility."
  },
  {
    id: "fauji-meat",
    name: "Fauji Meat",
    capacity: "2 MWh",
    location: "Pakistan",
    category: "industrial",
    description: "Industrial-grade solar installation for food processing facility."
  },
  {
    id: "khi-port-qasim",
    name: "KHI Port Qasim",
    capacity: "—",
    location: "Port Qasim, Karachi",
    category: "commercial",
    description: "Strategic solar deployment at Pakistan's major port facility."
  },
  {
    id: "combine-fabrics",
    name: "Combine Fabrics",
    capacity: "2 MWh",
    location: "Lahore",
    category: "textile",
    description: "Sustainable energy solution for fabric manufacturing operations."
  }
];

export const projectCategories = [
  { value: "all", label: "All Projects" },
  { value: "industrial", label: "Industrial" },
  { value: "commercial", label: "Commercial" },
  { value: "textile", label: "Textile" }
];
