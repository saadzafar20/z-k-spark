import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, MapPin, Zap, Search } from "lucide-react";
import { projects, projectCategories } from "@/data/projects";
import { Helmet } from "react-helmet-async";

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || project.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Solar Projects - Z&K Solar | Portfolio of Industrial Installations</title>
        <meta 
          name="description" 
          content="Explore our portfolio of successful solar installations including Riaz Textile (6.5 MWh), Acrowaiving Mill, Fauji Meat, and more across Pakistan." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Projects
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
              Powering Pakistan's Industries
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed">
              Explore our portfolio of successful solar installations across textile mills, 
              factories, and commercial facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-secondary/50 sticky top-16 md:top-20 z-30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-11"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    activeCategory === category.value
                      ? "bg-accent text-accent-foreground"
                      : "bg-card text-foreground hover:bg-accent/10"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300"
                >
                  {/* Project Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Zap className="h-8 w-8 text-accent" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Zap className="h-4 w-4 text-highlight" />
                        {project.capacity}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Want Your Facility Featured Here?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            Join our growing list of satisfied industrial clients and start saving on energy costs today.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">
              Request Site Survey
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
