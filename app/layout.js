import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

// Note: Major Mono Display would be imported like this:
// import { Major_Mono_Display } from "next/font/google";
// const majorMono = Major_Mono_Display({
//   variable: "--font-major-mono",
//   subsets: ["latin"],
//   weight: ["400"],
//   display: "swap",
// });

export const metadata = {
  title: "Ancestro Solar - Clean Energy Solutions",
  description: "Powering the future with clean, sustainable solar energy solutions for your home and business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} antialiased font-lato`}
      >
        {children}
      </body>
    </html>
  );
}
