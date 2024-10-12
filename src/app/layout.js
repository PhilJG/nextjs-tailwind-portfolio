import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PhilJGray.ca",
  description: "A portfolio built with Next.js and Tailwind.css",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HNSBV33GZL"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-HNSBV33GZL');
            `}
        </Script>
      </head>
      <body className="flex flex-col min-h-screen dark:bg-gray-800 md:px-12 bg-blue-50 px-5">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
