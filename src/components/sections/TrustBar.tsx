import { companyInfo } from "@/data/companyInfo";
import { Zap, Users, Award } from "lucide-react";

const stats = [
  {
    value: companyInfo.stats.mwInstalled,
    label: "MW Installed Capacity",
    icon: Zap,
    color: "text-accent"
  },
  {
    value: companyInfo.stats.clientsServed,
    label: "Satisfied Clients",
    icon: Users,
    color: "text-highlight"
  },
  {
    value: companyInfo.stats.yearsExperience,
    label: "Years of Excellence",
    icon: Award,
    color: "text-primary"
  }
];

export function TrustBar() {
  return (
    <section className="py-12 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 justify-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-card shadow-md flex items-center justify-center ${stat.color}`}>
                <stat.icon className="h-7 w-7" />
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
