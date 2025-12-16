export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What is net metering and how does it work?",
    answer: "Net metering allows you to sell excess solar electricity back to the grid. When your solar system produces more power than you consume, the surplus is exported to the utility grid, and you receive credits on your electricity bill. This can significantly reduce your overall energy costs."
  },
  {
    id: "2",
    question: "What is the typical payback period for industrial solar?",
    answer: "For industrial installations in Pakistan, the typical payback period ranges from 3-5 years depending on your current electricity rates, system size, and sunlight exposure. After payback, you enjoy essentially free electricity for 20+ years."
  },
  {
    id: "3",
    question: "What maintenance does a solar system require?",
    answer: "Solar systems require minimal maintenance. Regular cleaning of panels (every 2-4 weeks in dusty areas), annual inspections of electrical connections, and monitoring system performance are the main requirements. We offer comprehensive O&M packages for hassle-free operation."
  },
  {
    id: "4",
    question: "What warranties do you provide?",
    answer: "We provide comprehensive warranties: 25-year performance warranty on solar panels, 10-year warranty on inverters, and 5-year workmanship warranty on installation. We use only tier-1 components from internationally certified manufacturers."
  },
  {
    id: "5",
    question: "How long does installation take?",
    answer: "Installation timeline depends on project size. Small commercial systems (50-100 kW) typically take 2-3 weeks. Large industrial projects (1 MW+) may take 2-3 months including civil works, installation, and grid connection approvals."
  },
  {
    id: "6",
    question: "Do you handle DISCO approvals and documentation?",
    answer: "Yes, we provide end-to-end support including all documentation, DISCO liaison, net metering applications, and approval processes. Our experienced team handles the complete regulatory compliance so you don't have to worry about paperwork."
  }
];
