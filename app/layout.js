import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Employee Management</title>
      </head>
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
