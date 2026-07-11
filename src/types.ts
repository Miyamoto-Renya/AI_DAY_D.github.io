export interface AIProgram {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  steps: {
    number: number;
    title: string;
    description: string;
  }[];
  iconName: string; // Used to dynamically map Lucide icons
  accentColor: string; // Tailwind solid color class or flat hex
  textColor: string;
  borderColor: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BoothStats {
  label: string;
  value: string;
  description: string;
  iconName: string;
}
