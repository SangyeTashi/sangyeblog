import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata = {
    title: 'sangye.dev',
    description: 'My Web Dev Journey',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>{children}</div>;
}
