import { Button } from "@/components/ui/button";
export default function Hero() {
  return (
    // bg-gradient-to-b from-muted/50 to-background
        <section className="py-20 px-6 text-center bg-[url(/images/blog-hero-image.jpg)] bg-cover bg-center bg-fixed">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Code Curiosity and Coffee
            <br />
            My Developer Diary
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                This blog is my code sandbox
            </p>
            {/* raw insights,  */}
            <p>
                expect
            </p>
            <div className="mt-6 flex justify-center gap-4">
            <Button>Get Started</Button>
            <Button variant="outline">View Posts</Button>
            </div>
        </section>
    );
}   