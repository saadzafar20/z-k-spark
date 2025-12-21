import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Zap } from "lucide-react";
import { projects, Project } from "@/data/projects";
import { ProjectGalleryDialog } from "@/components/ProjectGalleryDialog";

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Our Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore successful solar installations across Pakistan's leading 
            industrial and commercial facilities, delivered in collaboration with Landmark Energy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300 animate-fade-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                      <Zap className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                )}
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
                <p className="text-muted-foreground text-sm" dangerouslySetInnerHTML={{ 
                  __html: project.description?.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') || '' 
                }} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link to="/projects">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <ProjectGalleryDialog
        project={selectedProject}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </section>
  );
}
