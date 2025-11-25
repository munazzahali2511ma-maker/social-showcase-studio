import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const showcaseCategories = {
  carousels: [
    { id: 1, image: "/placeholder.svg", title: "Carousel Post 1" },
    { id: 2, image: "/placeholder.svg", title: "Carousel Post 2" },
    { id: 3, image: "/placeholder.svg", title: "Carousel Post 3" },
    { id: 4, image: "/placeholder.svg", title: "Carousel Post 4" },
  ],
  reelCovers: [
    { id: 1, image: "/placeholder.svg", title: "Reel Cover 1" },
    { id: 2, image: "/placeholder.svg", title: "Reel Cover 2" },
    { id: 3, image: "/placeholder.svg", title: "Reel Cover 3" },
    { id: 4, image: "/placeholder.svg", title: "Reel Cover 4" },
  ],
  stories: [
    { id: 1, image: "/placeholder.svg", title: "Story Design 1" },
    { id: 2, image: "/placeholder.svg", title: "Story Design 2" },
    { id: 3, image: "/placeholder.svg", title: "Story Design 3" },
    { id: 4, image: "/placeholder.svg", title: "Story Design 4" },
  ],
  highlightCovers: [
    { id: 1, image: "/placeholder.svg", title: "Highlight Cover 1" },
    { id: 2, image: "/placeholder.svg", title: "Highlight Cover 2" },
    { id: 3, image: "/placeholder.svg", title: "Highlight Cover 3" },
    { id: 4, image: "/placeholder.svg", title: "Highlight Cover 4" },
  ],
  reels: [
    { id: 1, image: "/placeholder.svg", title: "Reel 1" },
    { id: 2, image: "/placeholder.svg", title: "Reel 2" },
    { id: 3, image: "/placeholder.svg", title: "Reel 3" },
    { id: 4, image: "/placeholder.svg", title: "Reel 4" },
  ],
};

const Showcase = () => {
  return (
    <section className="py-20 bg-background" id="showcase">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Work Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore different types of content I create for social media
          </p>
        </div>

        <Tabs defaultValue="carousels" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-5 mb-12 h-auto flex-wrap">
            <TabsTrigger value="carousels" className="text-sm md:text-base">Carousel Posts</TabsTrigger>
            <TabsTrigger value="reelCovers" className="text-sm md:text-base">Reel Covers</TabsTrigger>
            <TabsTrigger value="stories" className="text-sm md:text-base">Stories</TabsTrigger>
            <TabsTrigger value="highlightCovers" className="text-sm md:text-base">Highlight Covers</TabsTrigger>
            <TabsTrigger value="reels" className="text-sm md:text-base">Reels</TabsTrigger>
          </TabsList>

          <TabsContent value="carousels" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {showcaseCategories.carousels.map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="aspect-square bg-muted overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm font-medium text-center">{item.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reelCovers" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {showcaseCategories.reelCovers.map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="aspect-[9/16] bg-muted overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm font-medium text-center">{item.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stories" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {showcaseCategories.stories.map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="aspect-[9/16] bg-muted overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm font-medium text-center">{item.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="highlightCovers" className="animate-fade-in">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {showcaseCategories.highlightCovers.map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="aspect-square bg-muted overflow-hidden rounded-full m-4">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 pt-0">
                    <p className="text-xs font-medium text-center">{item.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reels" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {showcaseCategories.reels.map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="aspect-[9/16] bg-muted overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm font-medium text-center">{item.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Showcase;