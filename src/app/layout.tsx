import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Fira_Code, Source_Code_Pro, Space_Mono, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { personalInfo } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${personalInfo.name} | Software Engineer`,
  description: personalInfo.bio,
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "Portfolio",
    personalInfo.name,
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${personalInfo.name} | Software Engineer`,
    description: personalInfo.bio,
    siteName: personalInfo.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | Software Engineer`,
    description: personalInfo.bio,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${firaCode.variable} ${sourceCodePro.variable} ${spaceMono.variable} ${ibmPlexMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
