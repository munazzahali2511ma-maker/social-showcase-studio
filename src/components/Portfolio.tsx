import { Card, CardContent } from "@/components/ui/card";

const portfolioItems = [
  {
    id: 1,
    title: "Creative Agency",
    category: "Instagram & Facebook",
    description: "Complete social media strategy resulting in 300% follower growth in 3 months",
    metrics: "300% Growth",
  },
  {
    id: 2,
    title: "Tech Startup Campaign",
    category: "LinkedIn & Twitter",
    description: "B2B lead generation campaign generating 150+ qualified leads",
    metrics: "150+ Leads",
  },
  {
    id: 3,
    title: "Restaurant Group",
    category: "Multi-Platform",
    description: "Local marketing campaign increasing foot traffic by 45%",
    metrics: "45% Increase",
  },
  {
    id: 4,
    title: "Fitness Influencer",
    category: "Instagram & TikTok",
    description: "Content strategy reaching 5M+ impressions monthly",
    metrics: "5M+ Reach",
  },
  {
    id: 5,
    title: "SaaS Product Launch",
    category: "LinkedIn",
    description: "Thought leadership campaign with 10k+ engagement rate",
    metrics: "10k+ Engaged",
  },
  {
    id: 6,
    title: "Fashion Brand",
    category: "Instagram Stories",
    description: "Influencer collaboration driving 200% sales increase",
    metrics: "200% Sales",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-primary">{item.category}</div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">{item.metrics}</span>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 7h10v10"/>
                        <path d="M7 17 17 7"/>
                      </svg>
                    </div>
                  </div>
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
