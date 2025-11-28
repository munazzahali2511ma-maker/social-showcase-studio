import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import carouselHealingFizza from "@/assets/carousel-healing-fizza.png";
import carouselSaska from "@/assets/carousel-saska.png";
import carouselTherapyTalks from "@/assets/carousel-therapy-talks.png";
import carouselScentio from "@/assets/carousel-scentio.png";
import reelCoverScentio1 from "@/assets/reel-cover-scentio-1.png";
import reelCoverScentio2 from "@/assets/reel-cover-scentio-2.png";
import reelCoverHealingFizza from "@/assets/reel-cover-healing-fizza.png";
import reelCoverClientHumor from "@/assets/reel-cover-client-humor.png";
import reelStressCheck from "@/assets/reel-stress-check.mp4";
import reelPeony from "@/assets/reel-peony.mp4";
import reelScentio from "@/assets/reel-scentio.mp4";
import reelClientHumor from "@/assets/reel-client-humor.mp4";
import staticPostFizza from "@/assets/fizza-control-post.png";
import staticPostTherapyTalks from "@/assets/therapy-talks-journal-post.png";
import staticPostSaska from "@/assets/saska-new-look-post.png";
import staticPostScentio from "@/assets/scentio-pk-feed.png";
import storyScentioShop from "@/assets/story-scentio-shop.png";
import storyNewPost from "@/assets/story-new-post.png";
import storyCandleAesthetic from "@/assets/story-candle-aesthetic.png";
import storyScentioEvening from "@/assets/story-scentio-evening.png";
const showcaseCategories = {
  carousels: [
    { id: 1, image: carouselHealingFizza, title: "Healing with Fizza - Self-Reflection Prompts" },
    { id: 2, image: carouselSaska, title: "Saska Solutions - Problem to Solution Series" },
    { id: 3, image: carouselTherapyTalks, title: "Therapy Talks - Educational Content" },
    { id: 4, image: carouselScentio, title: "Scentio PK - Product Showcase" },
  ],
  reelCovers: [
    { id: 1, image: reelCoverScentio1, title: "Scentio PK - Candle Aesthetic Comparison" },
    { id: 2, image: reelCoverScentio2, title: "Scentio PK - POV Candle Discovery" },
    { id: 3, image: reelCoverHealingFizza, title: "Healing with Fizza - Mental Health Tips" },
    { id: 4, image: reelCoverClientHumor, title: "Behind the Scenes - Client Revisions" },
  ],
  stories: [
    { id: 1, image: storyScentioShop, title: "Scentio PK - Shop Now Story" },
    { id: 2, image: storyNewPost, title: "New Post Announcement Story" },
    { id: 3, image: storyCandleAesthetic, title: "Scentio PK - Candle Aesthetic" },
    { id: 4, image: storyScentioEvening, title: "Scentio PK - Evening Ambiance" },
  ],
  staticPosts: [
    { id: 1, image: staticPostFizza, title: "Healing with Fizza - What I Can Control" },
    { id: 2, image: staticPostTherapyTalks, title: "Therapy Talks - Journaling Benefits" },
    { id: 3, image: staticPostSaska, title: "Saska Solutions - New Look Reveal" },
    { id: 4, image: staticPostScentio, title: "Scentio PK - Product Showcase" },
  ],
  reels: [
    { id: 1, video: reelStressCheck, title: "Healing with Fizza - Stress Check" },
    { id: 2, video: reelPeony, title: "Scentio PK - Peony Candle Showcase" },
    { id: 3, video: reelScentio, title: "Scentio PK - Product Aesthetic" },
    { id: 4, video: reelClientHumor, title: "Behind the Scenes - Client Communication" },
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
            <TabsTrigger value="staticPosts" className="text-sm md:text-base">Static Posts</TabsTrigger>
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

          <TabsContent value="staticPosts" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {showcaseCategories.staticPosts.map((item) => (
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

          <TabsContent value="reels" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {showcaseCategories.reels.map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="aspect-[9/16] bg-muted overflow-hidden">
                    <video 
                      src={item.video} 
                      className="w-full h-full object-cover"
                      controls
                      playsInline
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