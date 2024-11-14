import "./globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Employee Management</title>
      </head>
      <body className={poppins.className}>
        <main>
          <div className="container">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
