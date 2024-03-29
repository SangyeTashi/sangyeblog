import Footer from '@/components/blog/Footer';
import Header from '@/components/blog/Header';

export const metadata = {
    title: 'Blog | sangye.dev',
    description: 'Generated by Next.js',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Header />
            <div className="min-h-screen py-6">{children}</div>
            <Footer />
        </div>
    );
}
