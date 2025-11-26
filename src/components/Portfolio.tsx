import { Card, CardContent } from "@/components/ui/card";
import saskaSolutionsFeed from "@/assets/saska-solutions-feed.jpg";
import therapistTalksFeed from "@/assets/therapist-talks-feed.jpg";
import scentioPkFeed from "@/assets/scentio-pk-feed.png";
import healingWithFizzaFeed from "@/assets/healing-with-fizza-feed.jpg";

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
    title: "Therapy Talks",
    services: "Logo Design, Brand Kit, Instagram Feed Design",
    description: "Developed a complete brand identity from the ground up, including a custom logo and comprehensive brand guidelines. Curated an engaging Instagram feed that authentically represents the therapist's practice while delivering informational and interactive mental health content.",
    image: therapistTalksFeed,
  },
  {
    id: 3,
    title: "Scentio PK",
    services: "Instagram Feed Redesign & Content Creation",
    description: "Transformed a basic Instagram presence into a visually stunning aesthetic showcase. Created compelling product-focused content highlighting candle features and qualities, combined with trending interactive posts to boost customer engagement.",
    image: scentioPkFeed,
  },
  {
    id: 4,
    title: "Healing with Fizza",
    services: "Complete Profile Transformation, Content Strategy & Production, Brand Identity",
    description: "Revitalized a disorganized Instagram presence with strategic direction and cohesive branding. Crafted and produced meaningful content including reels, carousels, and static posts that significantly increased reach and engagement. Conducted comprehensive profile audit, refined bio, and established an approachable color theme. Also designed professional business cards to complete the brand identity.",
    image: healingWithFizzaFeed,
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
