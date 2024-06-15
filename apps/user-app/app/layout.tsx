
import "./globals.css";
import { Providers } from "../providers";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body>
          {children}
          <Toaster richColors />
        </body>
      </Providers>
    </html>
  );
}
