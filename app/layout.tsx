import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Clim Confort Montpellier | Artisan Génie Climatique Hérault',
  description: 'Installation, entretien et dépannage de climatisation et pompe à chaleur à Montpellier (34). Artisan local réactif, devis gratuit sous 48h.',
  keywords: 'génie climatique Montpellier, climatisation Montpellier, pompe à chaleur Montpellier, chauffagiste Montpellier, dépannage climatisation Hérault',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="antialiased font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
