import Header from "@/components/portfolio/Header";

export const metadata = {
  title: "sangye.dev",
  description: "My Web Dev Journey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" text-gray-100">
      <Header />
      {children}
    </div>
  );
}
