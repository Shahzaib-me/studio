import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Baby, PawPrint, Car, ArrowRight } from 'lucide-react';
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
      link: '/dashboard/tifl'
    },
    {
      title: 'Nigran-Anaam',
      description: 'Comprehensive livestock and animal tracking. Monitor health, location, and movement history to optimize your herd management.',
      icon: <PawPrint className="h-8 w-8" />,
      image: anaamImage,
      link: '/dashboard/anaam'
    },
    {
      title: 'Nigran-Motor',
      description: 'Robust vehicle tracking for personal or fleet management. Features speed monitoring, route history, and geofence alerts.',
      icon: <Car className="h-8 w-8" />,
      image: motorImage,
      link: '/dashboard/motor'
    },
  ];

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <LandingHeader />
      <main className="flex-1">
        <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center">
           {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            )}
            <div className="absolute inset-0 bg-black/60" />
            <div className="container relative z-10 text-white">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter leading-tight">
                        Smart Tracking. Trusted Protection.
                    </h1>
                    <p className="text-lg md:text-xl mt-6 text-slate-200">
                        Nigran Technologies provides an integrated platform for child, animal, and vehicle safety, keeping you connected to what's important.
                    </p>
                    <div className="flex gap-4 mt-10 justify-center">
                        <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                            <Link href="/signup">Get Started <ArrowRight className="ml-2" /></Link>
                        </Button>
                        <Button size="lg" variant="outline" className="bg-transparent border-slate-300 text-white hover:bg-white/10 hover:text-white" asChild>
                            <Link href="/login">Login</Link>
                        </Button>
                    </div>
                </div>
            </div>
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
                <Card key={feature.title} className="group flex flex-col overflow-hidden transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-2 bg-card">
                  {feature.image && (
                    <div className="overflow-hidden">
                        <Image
                        src={feature.image.imageUrl}
                        alt={feature.image.description}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={feature.image.imageHint}
                        />
                    </div>
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
                  <div className="p-6 pt-0">
                    <Button variant="ghost" asChild className="p-0 h-auto text-primary hover:text-primary/80">
                        <Link href={feature.link}>
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="demo" className="py-20 md:py-32">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">See Nigran in Action</h2>
              <p className="text-lg text-muted-foreground mt-4">
                Watch our short demo video to see how Nigran can provide you with real-time tracking and peace of mind.
              </p>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto border">
               <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section className="container py-20 md:py-32 text-center">
            <div className="bg-primary/90 text-primary-foreground rounded-2xl p-12 md:p-16 shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Start Monitoring?</h2>
                <p className="text-lg text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
                    Join Nigran today and gain the confidence that comes with our state-of-the-art tracking solutions.
                </p>
                <Button size="lg" className="mt-8 bg-white text-primary hover:bg-slate-200" asChild>
                    <Link href="/signup">Create Your Account <ArrowRight className="ml-2" /></Link>
                </Button>
            </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}
