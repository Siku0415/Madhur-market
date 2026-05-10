import type {Metadata} from 'next';
import './globals.css'; // Global styles
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Madhur Bazar matka Game | Play Online Game',
  description: 'Madhur Bazar matka Game is a very basic online game where you are required to guess numbers that range between 0 to 9.  Anyone can become a master of the Madhur Bazar matka.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '751283967242809');
              fbq('track', 'PageView');
              console.log('Pixel Loaded: 751283967242809');
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=751283967242809&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
