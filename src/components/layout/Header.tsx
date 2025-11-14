import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className="w-screen py-4 px-10 bg-background text-foreground flex justify-between items-center sm:flex-wrap">
            <h1 className="text-3xl font-bold">Robert Thornton</h1>
            <Navbar />
        </header>
    );
}