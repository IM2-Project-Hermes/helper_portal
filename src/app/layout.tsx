import Navbar from "@/components/Navbar";
import "./globals.css";



export const metadata = {
  title: "Helper Portal",
  description: "Helper Portal for Hella Aglaia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
