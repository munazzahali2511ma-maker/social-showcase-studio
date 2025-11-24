import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's Create Something
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to elevate your social media presence? Let's discuss how we can help your brand grow.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            >
              Schedule a Call
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              View Packages
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-12">
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Email</div>
              <div className="text-foreground">munazzah.work@gmail.com</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Phone</div>
              <div className="text-foreground">+1 (555) 123-4567</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Location</div>
              <div className="text-foreground">New York, USA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
