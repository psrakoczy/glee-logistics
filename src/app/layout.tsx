export const metadata = {
  title: "GLEE Logistics GmbH",
  description: "Logistics, transportation, HR outsourcing and automotive services in Germany.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}