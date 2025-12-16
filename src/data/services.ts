import { Sun, Zap, FileCheck, Wrench, BarChart3, Battery } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "solar-design-installation",
    title: "Solar System Design & Installation",
    description: "Custom-engineered solar solutions tailored to your facility's energy requirements and roof specifications.",
    icon: "Sun",
    features: [
      "Site assessment & feasibility study",
      "Custom system design",
      "Premium panel installation",
      "Grid integration"
    ]
  },
  {
    id: "industrial-epc",
    title: "Industrial Solar EPC",
    description: "End-to-end engineering, procurement, and construction services for large-scale industrial projects.",
    icon: "Zap",
    features: [
      "Turnkey project delivery",
      "MW-scale installations",
      "Industrial-grade components",
      "Project management"
    ]
  },
  {
    id: "net-metering",
    title: "Net Metering Support",
    description: "Complete assistance with net metering applications and DISCO approvals for grid-tied systems.",
    icon: "FileCheck",
    features: [
      "DISCO liaison",
      "Documentation support",
      "Meter installation",
      "Billing optimization"
    ]
  },
  {
    id: "operations-maintenance",
    title: "Operations & Maintenance",
    description: "Comprehensive O&M services to ensure maximum system performance and longevity.",
    icon: "Wrench",
    features: [
      "Preventive maintenance",
      "Performance monitoring",
      "Cleaning services",
      "Emergency repairs"
    ]
  },
  {
    id: "energy-audit",
    title: "Energy Audit & Consultation",
    description: "Expert energy assessments to identify savings opportunities and optimal solar solutions.",
    icon: "BarChart3",
    features: [
      "Load analysis",
      "ROI calculations",
      "Savings projections",
      "Custom recommendations"
    ]
  },
  {
    id: "inverter-battery",
    title: "Inverter & Battery Solutions",
    description: "Premium inverter and battery storage systems for reliable power backup and grid independence.",
    icon: "Battery",
    features: [
      "Hybrid inverters",
      "Lithium batteries",
      "Lead-acid options",
      "UPS integration"
    ]
  }
];

export const iconMap: Record<string, any> = {
  Sun,
  Zap,
  FileCheck,
  Wrench,
  BarChart3,
  Battery
};
