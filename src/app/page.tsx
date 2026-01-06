import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Baby, PawPrint, Car } from 'lucide-react';
import { LandingHeader } from '@/components/landing-header';
import { LandingFooter } from '@/components/landing-footer';

export default function LandingPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
  const tiflImage = PlaceHolderImages.find((img) => img.id === 'tifl');
  const anaamImage = PlaceHolderImages.find((img) => img.id === 'anaam');
  const motorImage = PlaceHolderImages.find((img) => img.id === 'motor');

  const features = [
    {
      title: 'Nigran-Tifl',
      description: 'Advanced child safety tracking with geofencing, SOS alerts, and real-time location monitoring to ensure your peace of mind.',
      icon: <Baby className="h-8 w-8" />,
      image: tiflImage,
    },
    {
      title: 'Nigran-Anaam',
      description: 'Comprehensive livestock and animal tracking. Monitor health, location, and movement history to optimize your herd management.',
      icon: <PawPrint className="h-8 w-8" />,
      image: anaamImage,
    },
    {
      title: 'Nigran-Motor',
      description: 'Robust vehicle tracking for personal or fleet management. Features speed monitoring, route history, and geofence alerts.',
      icon: <Car className="h-8 w-8" />,
      image: motorImage,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <LandingHeader />
      <main className="flex-1">
        <section className="relative w-full">
           {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={1200}
                height={400}
                className="w-full h-auto object-contain"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            )}
        </section>

        <section id="features" className="py-20 md:py-32 bg-secondary/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">One Platform, Three Powerful Modules</h2>
              <p className="text-lg text-muted-foreground mt-4">
                Nigran is designed with specialized modules to meet your specific tracking needs.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <Card key={feature.title} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-2xl bg-card">
                  {feature.image && (
                    <Image
                      src={feature.image.imageUrl}
                      alt={feature.image.description}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
                      data-ai-hint={feature.image.imageHint}
                    />
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        {feature.icon}
                      </div>
                      <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-20 md:py-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Start Monitoring?</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Join Nigran today and gain the confidence that comes with our state-of-the-art tracking solutions.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link href="/signup">Create Your Account</Link>
          </Button>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}
