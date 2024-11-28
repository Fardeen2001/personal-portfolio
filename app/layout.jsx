import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fardeen Portfolio Website",
  description:
    "Hardworking and passionate job seeker with strong organizational skills eager to secure entry-level Frontend developer position.Ready to help team achieve company goals. Keenly focused on following good principles of developing an optimized and efficient UI application. Highly skilled in React Js, Next Js, JavaScript, CSS, and HTML",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <script src="https://smtpjs.com/v3/smtp.js" defer></script>
        <script src="https://cdn.brightserp.com/api/opportunities.js" defer></script>
      </body>
    </html>
  );
}
