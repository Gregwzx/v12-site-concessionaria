import "./globals.css";
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";

export const metadata = {
  title: "Concessionária",
  description: "Site oficial da concessionária"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-neutral-100 text-neutral-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
