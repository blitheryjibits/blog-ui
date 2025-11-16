import { Button } from "@/components/ui/button";
export default function Hero() {
  return (
        <section className="py-20 px-6 text-center bg-[url(/images/blog-hero-image.jpg)] bg-cover bg-center bg-fixed bg-black/50 bg-blend-multiply">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-(--color-accent)">
            Code Curiosity and Coffee
            <br />
            My Developer Diary
            </h1>
            <p className="mt-4 text-lg text-(--color-secondary-bg) max-w-xl mx-auto">
                This blog is my code sandbox
            </p>
            {/* raw insights,  */}
            <p className="text-(--color-accent)">
                expect
            </p>
            {/* <div className="mt-6 flex justify-center gap-4">
            <Button>Sign up</Button>
            <Button variant="outline">View Posts</Button>
            </div> */}
        </section>
    );
}   