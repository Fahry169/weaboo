 import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Utilities/Navbar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata = {
  title: "Weaboo",
  description: "Website Anime List Terbaik",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased bg-black pt-16`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}