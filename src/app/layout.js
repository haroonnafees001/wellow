import "./globals.css";

export const metadata = {
  title: "Wellow",
  description: "Powered by Distrub Lab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="root"
        className={`antialiased`}
      >
        {children}
        
      </body>
    </html>
  );
}
