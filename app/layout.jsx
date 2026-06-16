import "./globals.css";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import { RANKTRAQ_WEBSITE_URL } from "@/data/rankTraq";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fardeen Portfolio Website",
  description:
    "Hardworking and passionate job seeker with strong organizational skills eager to secure entry-level Frontend developer position.Ready to help team achieve company goals. Keenly focused on following good principles of developing an optimized and efficient UI application. Highly skilled in React Js, Next Js, JavaScript, CSS, and HTML",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <meta name="google-site-verification" content="cIn3bzs-1gsJq7MJzmjxin5GSEazzVjxivefiiOycjg" />
         <link rel="me" href={RANKTRAQ_WEBSITE_URL} />
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
        <script src="https://smtpjs.com/v3/smtp.js" defer></script>
      </body>
    </html>
  );
}
