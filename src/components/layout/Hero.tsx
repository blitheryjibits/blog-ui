import { Button } from "@/components/ui/button";
export default function Hero() {
  return (
        <section className="py-20 px-6 text-center bg-gradient-to-b from-muted/50 to-background">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Welcome to Your Blog
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Share your thoughts, stories, and insights with the world.
            </p>
            <div className="mt-6 flex justify-center gap-4">
            <Button>Get Started</Button>
            <Button variant="outline">View Posts</Button>
            </div>
        </section>
    );
}   