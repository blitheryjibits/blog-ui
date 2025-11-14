

export default function Footer() {
    return (
        <footer className="py-6 px-4 bg-muted/50 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Robert Thornton. All rights reserved.
        </footer>
    );
}