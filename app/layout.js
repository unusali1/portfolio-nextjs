import { Geist, Geist_Mono,Salsa,Mulish} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const salsa = Salsa({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-salsa',
});

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-mulish',
});

export const metadata = {
  title: "Md Unus Ali",
  description: `Hi, I&apos;m Md Unus Ali, a passionate developer from Bangladesh. I specialize in crafting modern, scalable, and user-friendly digital solutions using the MERN stack and cutting-edge frontend technologies.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${salsa.variable} ${mulish.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
