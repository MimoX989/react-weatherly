import { Providers } from "./utils/provider";


export const metadata = {
  title: "Weatherly",
  description: "Check Weather & Climate for any location",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen h-full">
        <Providers>
         {children}
        </Providers>
      </body>
    </html>
  );
}
