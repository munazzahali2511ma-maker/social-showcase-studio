import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Therapy Talks",
    role: "Mental Health Page",
    content: "Working with Munazzah was a smooth and creative experience. She helped me choose the perfect theme, color palette, and overall look for my page. Her honest opinions, thoughtful ideas, and attention to detail transformed my vision into a beautifully built page.",
    rating: 5,
  },
  {
    id: 2,
    name: "Healing with Fizza",
    role: "Counselling Page",
    content: "Just wanted to appreciate the person behind my counselling page who keeps everything running so smoothly. From creating warm, helpful content to keeping the page active and consistent — you've been truly wonderful. Thank you for understanding my work, my style, and supporting me so well. Couldn't have managed the page this smoothly without you 🤍",
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

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
