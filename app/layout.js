import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

export const metadata = {
  title: "Mahin — Visual Stories, Carefully Crafted",
  description:
    "The creative portfolio of Mahin, a video editor, photographer, videographer and visual storyteller.",
  openGraph: {
    title: "Mahin — Visual Stories, Carefully Crafted",
    description: "Video editing, photography, videography and photo editing by Mahin.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
