import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata = {
  title: "Digital Solution 360 - Expert SEO, Digital Marketing & Web Development",
  description: "Elevate your brand with Digital Solution 360's tailored digital marketing, SEO services, website & e-commerce development. Proven strategies, expert team, results you can see. Free consultation available.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
