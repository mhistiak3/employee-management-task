import "./globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Employee Management" />

        <title>Employee Management</title>
      </head>
      <body className={poppins.className}>
        <main>
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
