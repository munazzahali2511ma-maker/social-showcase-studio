import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechFlow",
    content: "Working with them transformed our social media presence. We saw a 300% increase in engagement within the first quarter. Their strategic approach and creativity are unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director, StyleHub",
    content: "The ROI on our social media campaigns has exceeded all expectations. Professional, creative, and always delivers on time. Highly recommend!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder, GreenLife",
    content: "Their understanding of our brand and target audience is exceptional. They don't just post content—they tell our story in a way that resonates with our customers.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it—hear what clients have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="border-border/50 bg-card hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-5 h-5 fill-accent" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-4 border-t border-border/50">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
