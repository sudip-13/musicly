import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ApolloWrapper } from "@/config/graphql/config";
import { AuthTokenProvider } from "@/providers/authTokenProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Musically",
  description: "Feel your songs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthTokenProvider>
          <ApolloWrapper >
            <Navbar />
            {children}
          </ApolloWrapper>
        </AuthTokenProvider>
      </body>
    </html>
  );
}
