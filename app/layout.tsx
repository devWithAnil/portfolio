import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import { ThemeProvider } from 'next-themes';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

import "./globals.css";

const interFont = Inter({
  subsets: ['latin'],
	display: 'fallback',
	variable: '--font-sans',
	weight: 'variable',
})

const sansFont = Work_Sans({
	subsets: ['latin'],
	display: 'fallback',
	variable: '--font-sans',
	weight: 'variable',
});

export const metadata: Metadata = {
  title: {
    default: "Anil Yadav — SDE III | Full-Stack Developer | UI/UX Designer",
    template: "%s | Anil Yadav",
  },
  description:
    "Portfolio of Anil Yadav — SDE III, Lead Engineer, and Full-Stack Developer based in Gurugram, India. Specialising in React, Next.js, Node.js, UI/UX design, and scalable web applications.",
  keywords: [
    "Anil Yadav",
    "SDE III",
    "Full-Stack Developer",
    "Lead Engineer",
    "React Developer",
    "Next.js Developer",
    "UI UX Designer",
    "Web Developer India",
    "Gurugram Developer",
    "NIT Patna",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Anil Yadav", url: "https://github.com/devWithAnil" }],
  creator: "Anil Yadav",
  metadataBase: new URL("https://anilyadav.dev"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://anilyadav.dev",
    siteName: "Anil Yadav Portfolio",
    title: "Anil Yadav — SDE III | Full-Stack Developer | UI/UX Designer",
    description:
      "Portfolio of Anil Yadav — SDE III, Lead Engineer, and Full-Stack Developer based in Gurugram, India.",
    images: [
      {
        url: "/images/image_1.jpg",
        width: 1200,
        height: 630,
        alt: "Anil Yadav — Full-Stack Developer & UI/UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anil Yadav — SDE III | Full-Stack Developer",
    description:
      "Portfolio of Anil Yadav — Full-Stack Developer and UI/UX Designer based in Gurugram, India.",
    creator: "@iamanilky",
    images: ["/images/image_1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={sansFont.variable} suppressHydrationWarning>
			<body className='relative antialiased font-sans text-text bg-background min-h-screen'>
				<ThemeProvider>
					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
  );
}
