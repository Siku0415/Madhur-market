import type {Metadata} from 'next';
import './globals.css'; // Global styles
import MetaPixel from '@/components/MetaPixel';

export const metadata: Metadata = {
  title: 'Madhur Bazar matka Game | Play Online Game',
  description: 'Madhur Bazar matka Game is a very basic online game where you are required to guess numbers that range between 0 to 9.  Anyone can become a master of the Madhur Bazar matka.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <MetaPixel />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
