import { Card, CardContent } from "@/components/ui/card";
import saskaSolutionsFeed from "@/assets/saska-solutions-feed.jpg";
import therapistTalksFeed from "@/assets/therapist-talks-feed.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "SASKA SOLUTIONS",
    services: "Social Media Feed Design & Content Strategy",
    description: "Designed an aesthetically cohesive Instagram feed aligned with brand identity. Created strategic content showcasing services, valuable insights, and client-focused messaging to establish a strong digital presence.",
    image: saskaSolutionsFeed,
  },
  {
    id: 2,
    title: "Therapist Talks",
    services: "Logo Design, Brand Kit, Instagram Feed Design",
    description: "Developed a complete brand identity from the ground up, including a custom logo and comprehensive brand guidelines. Curated an engaging Instagram feed that authentically represents the therapist's practice while delivering informational and interactive mental health content.",
    image: therapistTalksFeed,
  },
  {
    id: 3,
    title: "Client Name 3",
    services: "Reel Covers, Highlight Covers, Post Design",
    description: "Designed eye-catching reel covers and Instagram highlight covers that unified their feed aesthetic and increased profile visits.",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Client Name 4",
    services: "Complete Brand Package, Social Media Management",
    description: "Provided end-to-end design services from brand creation to daily content management across multiple platforms.",
    image: "/placeholder.svg",
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-secondary/30" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Results-driven campaigns across multiple platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-sm font-medium text-primary">{item.services}</div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
