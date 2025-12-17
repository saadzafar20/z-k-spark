export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What is net metering and how does it work in Punjab?",
    answer: "Net metering in Punjab allows you to sell excess solar electricity back to LESCO, FESCO, MEPCO, or GEPCO. When your solar system produces more power than you consume, the surplus is exported to the grid, and you receive credits on your electricity bill. Punjab's DISCOs have streamlined the approval process, typically taking 4-8 weeks for complete net metering setup."
  },
  {
    id: "2",
    question: "What is the typical payback period for industrial solar in Punjab?",
    answer: "For industrial installations in Punjab, the typical payback period ranges from 2.5-4 years depending on your current LESCO/FESCO rates, system size, and peak sun hours (Punjab averages 5-6 peak sun hours daily). With industrial electricity rates above PKR 50/unit, solar offers excellent ROI. After payback, you enjoy essentially free electricity for 20+ years."
  },
  {
    id: "3",
    question: "How does Punjab's climate affect solar performance?",
    answer: "Punjab's climate is ideal for solar with over 300 sunny days annually. The hot summers actually don't reduce efficiency significantly with modern panels. Dust from agricultural activities requires regular cleaning every 2-3 weeks. Our systems are designed to handle Punjab's temperature variations, from cold winters to hot summers exceeding 45°C."
  },
  {
    id: "4",
    question: "What warranties do you provide?",
    answer: "We provide comprehensive warranties: 25-year performance warranty on solar panels, 10-year warranty on inverters, and 5-year workmanship warranty on installation. We use only tier-1 components from internationally certified manufacturers that are proven to perform in Punjab's climate conditions."
  },
  {
    id: "5",
    question: "How long does installation take for textile mills in Punjab?",
    answer: "For textile mills and industrial facilities common in Lahore, Faisalabad, and Sheikhupura areas, small systems (50-100 kW) typically take 2-3 weeks. Large installations (1 MW+) like those in Faisalabad's textile hub may take 2-3 months including civil works, installation, and FESCO/LESCO net metering approvals."
  },
  {
    id: "6",
    question: "Do you handle LESCO, FESCO, and other DISCO approvals?",
    answer: "Yes, we provide complete end-to-end support for all Punjab DISCOs including LESCO (Lahore), FESCO (Faisalabad), MEPCO (Multan), and GEPCO (Gujranwala). Our experienced team handles all documentation, DISCO liaison, net metering applications, load sanction modifications, and approval processes. We've successfully completed approvals across all major Punjab industrial zones."
  }
];
