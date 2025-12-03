import "./globals.css";

export const metadata = {
  title: "Private Note Vault",
  description: "Secure vault for storing private notes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
