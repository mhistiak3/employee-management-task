import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <div className="container">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
