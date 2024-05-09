import { Inter } from "next/font/google";
import "./globals.css";
import Appbar from "@/compoents/Appbar";
import Footer from "@/compoents/Footer";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cafe Khardungla",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Specify the path to your favicon image */}
        <link rel='icon' href="/favicon.ico" />

        {/* Metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Import font styles */}
        <style>{inter}</style>
      </Head>

      <body className={inter.className}>
        <div>
          <Appbar />
          {children}
<<<<<<< HEAD
          {/* <Footer /> */}
=======
<<<<<<< HEAD
          {/* <Footer /> */}
=======
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
>>>>>>> 6cdc792832a6d666b2243afa338315b33651f7bd
        </div>
      </body>
    </html>
  );
}
