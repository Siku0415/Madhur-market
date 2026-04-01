'use client';

import Link from "next/link";
import Image from "next/image";
import { trackEvent } from "@/lib/tracking";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-gray-100">
      {/* Header */}
      <header className="bg-[#111111] border-b border-[#333333] py-[10px] sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <img 
              src="https://madhurbazar.online/assets/img/logo-2.png" 
              alt="Madhur Bazar Logo" 
              className="h-[50px] w-auto brightness-0 invert" 
            />
          </Link>
          <button className="md:hidden text-gray-300 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <nav className="hidden md:flex gap-6 font-semibold text-gray-300 items-center">
            <Link href="/" className="hover:text-[#fab028] transition-colors">Home</Link>
            <Link href="#charts" className="hover:text-[#fab028] transition-colors">Charts</Link>
            <div className="text-end ml-4">
              <a 
                href="https://madhurbazar.online/app/madhurbazar.apk" 
                onClick={() => trackEvent('CompleteRegistration', { content_name: 'APK Download', placement: 'Header' })}
                className="text-white bg-[#fab028] border-[0.094rem] border-[#fab028] py-[10px] px-[25px] text-[15px] font-bold rounded-[5px] transition-all duration-600 hover:-translate-y-[3px] hover:bg-white hover:text-[#222222] hover:shadow-[0px_15px_35px_rgba(255,215,0,0.3)] inline-block"
              >
                Download App
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Banner */}
      <section className="w-full">
        <img 
          src="https://madhurbazar.online/assets/home/images/bannerimage.jpg" 
          alt="Banner" 
          className="w-full h-auto object-cover" 
        />
      </section>

      {/* Features Section */}
      <section className="py-8 bg-[#111111] border-b border-[#222]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-[#333] shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:border-[#fab028] transition-colors duration-300">
              <div className="text-[#fab028] mb-3 flex justify-center">
                <svg className="w-10 h-10 drop-shadow-[0_0_15px_rgba(250,176,40,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-white font-bold text-lg tracking-wide">Min. Deposit 200</h3>
              <p className="text-gray-400 text-sm mt-2">Start playing with just ₹200</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-[#333] shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:border-[#fab028] transition-colors duration-300">
              <div className="text-[#fab028] mb-3 flex justify-center">
                <svg className="w-10 h-10 drop-shadow-[0_0_15px_rgba(250,176,40,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
              </div>
              <h3 className="text-white font-bold text-lg tracking-wide">Min. Withdrawal 800</h3>
              <p className="text-gray-400 text-sm mt-2">Easy withdrawals from ₹800</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-[#333] shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:border-[#fab028] transition-colors duration-300">
              <div className="text-[#fab028] mb-3 flex justify-center">
                <svg className="w-10 h-10 drop-shadow-[0_0_15px_rgba(250,176,40,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-white font-bold text-lg tracking-wide">Instant Transactions</h3>
              <p className="text-gray-400 text-sm mt-2">Instant deposit & withdrawal</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-[#333] shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:border-[#fab028] transition-colors duration-300">
              <div className="text-[#fab028] mb-3 flex justify-center">
                <svg className="w-10 h-10 drop-shadow-[0_0_15px_rgba(250,176,40,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.965 11.965 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-white font-bold text-lg tracking-wide">Safe & Secure</h3>
              <p className="text-gray-400 text-sm mt-2">100% trusted matka application</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Button Section */}
      <section className="py-[40px] px-4 text-center bg-[#0a0a0a]">
        <div className="container mx-auto">
          <a 
            href="https://madhurbazar.online/app/madhurbazar.apk" 
            onClick={() => trackEvent('CompleteRegistration', { content_name: 'APK Download', placement: 'Hero' })}
            className="block text-center w-[calc(100%-32px)] text-[#666666] mx-[16px] rounded-[25px] p-[15px_27px] uppercase bg-[#fab028] text-[15px] font-medium transition-all duration-300 relative"
            style={{
              background: 'linear-gradient(121.19deg, rgba(133, 239, 49, 0) 25.73%, rgb(249, 232, 167) 45.27%, rgba(133, 239, 49, 0) 62.27%), #fdedab',
              animation: 'shine 30s linear infinite'
            }}
          >
            <svg viewBox="64 64 896 896" focusable="false" data-icon="android" width="28px" height="28px"
                 fill="currentColor" style={{ marginBottom: '6px', display: 'inline-block' }} aria-hidden="true">
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
              <path d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm171.8 527.1c-1.5 3.1-3.8 5.6-6.8 7.2-3 1.5-6.4 2.1-9.8 1.6L512 650.1l-155.2 25.8c-3.4.6-6.8 0-9.8-1.6-3-1.5-5.3-4.1-6.8-7.2-1.5-3.1-2.1-6.6-1.6-10l25.8-155.2-112.7-110c-2.4-2.4-4.1-5.5-4.8-8.9-.7-3.4-.3-6.9 1.1-10.1 1.4-3.2 3.8-5.8 6.8-7.5 3-1.7 6.4-2.4 9.9-2l155.8 22.6 69.6-141.1c1.5-3.1 4-5.5 7.1-6.8 3.1-1.4 6.6-1.4 9.7 0 3.1 1.4 5.6 3.8 7.1 6.8l69.6 141.1 155.8-22.6c3.5-.5 7 .2 9.9 2 3 1.7 5.4 4.3 6.8 7.5 1.4 3.2 1.8 6.7 1.1 10.1-.7 3.4-2.4 6.5-4.8 8.9l-112.7 110 25.8 155.2c.5 3.4-.1 6.9-1.6 10z"></path>
            </svg> <strong>Download Now</strong>
          </a>
        </div>
      </section>

      {/* Game Rates */}
      <section className="pb-[80px] bg-[#0a0a0a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[36px] font-bold text-white leading-[1.3] mb-[30px] tracking-wide">Game Rates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <RateCard title="Single Digit (General)" rate="1 RS KA 10.00 Rs" />
            <RateCard title="Jodi Digit (General)" rate="1 RS KA 100.00 Rs" />
            <RateCard title="Single Pana (General)" rate="1 RS KA 150.00 Rs" />
            <RateCard title="Double Pana (General)" rate="1 RS KA 300.00 Rs" />
            <RateCard title="Triple Pana (General)" rate="1 RS KA 1000.00 Rs" />
            <RateCard title="Half Sangam A (General)" rate="1 RS KA 1000.00 Rs" />
            <RateCard title="Half Sangam B (General)" rate="1 RS KA 1000.00 Rs" />
            <RateCard title="Full Sangam (General)" rate="1 RS KA 10000.00 Rs" />
          </div>
        </div>
      </section>

      {/* Available Games */}
      <section className="py-12 bg-[#111111] border-t border-[#222]">
        <div className="container mx-auto px-4">
          <h2 className="text-[36px] font-bold text-white mb-[30px] leading-[1.3] text-center tracking-wide">Available Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, idx) => (
              <GameCard key={idx} name={game.name} time={game.time} result={game.result} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[80px] bg-[#0a0a0a] border-t border-[#222]">
        <div className="container mx-auto px-4">
          <div className="mb-[40px] text-center">
            <h2 className="text-[36px] font-bold text-white leading-[1.3] mb-[15px] tracking-wide">FAQ&apos;s</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            <FaqItem 
              question="What is Madhur Bazar Matka ?" 
              answer="Madhur Bazar Matka Is A Satta Matka Gamming App Where You Can Play Games And Win Jackpot." 
            />
            <FaqItem 
              question="What are games are available on Madhur Bazar Matka ?" 
              answer="Populer Satta Matka Games Like Kalyan, Sridevi, Milan, Time Bazar, Matka & Rajdhani." 
            />
            <FaqItem 
              question="Is Madhur Bazar Matka Have Licence ?" 
              answer="Yes, we operate with the highest standards of security and trust to ensure a safe gaming environment for all our users." 
            />
            <FaqItem 
              question="What Is Minimum Deposit and Withdrawals ?" 
              answer="The minimum deposit is ₹300 and the minimum withdrawal is ₹1000. Withdrawals are processed instantly 24/7." 
            />
            <FaqItem 
              question="Why to Choose Madhur Bazar Matka Among Other Providers ?" 
              answer="We provide the fastest results, 100% secure transactions, 24/7 customer support, and the best game rates in the market." 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-[40px]">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-[20px]">
            <img 
              src="https://madhurbazar.online/assets/img/logo-2.png" 
              alt="Madhur Bazar Logo" 
              className="h-[60px] w-auto mx-auto brightness-0 invert" 
            />
          </div>
          <p className="text-[#999999] text-[15px] leading-[1.8] max-w-3xl mx-auto mb-[20px]">
            Madhur Bazar matka is a very basic online game where you are required to guess numbers that range between 0 to 9. Anyone can become a master of the Madhur Bazar matka.
          </p>
          <div className="border-t border-[#333333] pt-[20px] mt-[20px]">
            <p className="text-[#999999] text-[14px] m-0">
              Copyright &copy; {new Date().getFullYear()} <a href="#" className="text-[#fab028] hover:text-white transition-colors">Madhur Bazar</a>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function RateCard({ title, rate }: { title: string; rate: string }) {
  return (
    <div className="bg-[#1a1a1a] border border-[#333] p-[30px] rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.5)] text-center my-[15px] hover:border-[#fab028] transition-colors duration-300">
      <img 
        src="https://madhurbazar.online/assets/home/images/icon.png" 
        alt="img" 
        className="max-w-[70px] mx-auto mb-[15px] brightness-0 invert opacity-80" 
      />
      <h4 className="text-[20px] font-bold text-white mb-3">{title}</h4>
      <p className="text-[18px] font-bold text-[#fab028] mb-0 drop-shadow-[0_0_8px_rgba(250,176,40,0.4)]">{rate}</p>
    </div>
  );
}

function GameCard({ name, time, result }: { name: string; time: string; result: string }) {
  const [openTime, closeTime] = time.split(" - ");
  const [openRes, jodi, closeRes] = result.split("-");
  
  // Get current date formatted like 01-04-2026
  const dateObj = new Date();
  const formattedDate = `${String(dateObj.getDate()).padStart(2, '0')}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${dateObj.getFullYear()}`;

  return (
    <div className="bg-[#1a1a1a] border border-[#333] rounded-[15px] shadow-[0_8px_30px_rgb(0,0,0,0.5)] p-[15px_15px] transition-all duration-300 ease-in-out z-10 relative mb-[30px] hover:border-[#fab028] hover:shadow-[0_0_20px_rgba(250,176,40,0.15)]">
      {/* Top Row: Icons and Times */}
      <div className="flex justify-between items-center border-b border-[#333] pb-3 mb-3">
        <a 
          href="https://madhurbazar.online/app/madhurbazar.apk" 
          onClick={() => trackEvent('CompleteRegistration', { content_name: 'APK Download', placement: 'GameCard Time' })}
          className="text-[14px] text-gray-300 hover:text-[#fab028] transition-colors flex flex-col gap-1"
        >
          <span className="flex items-center gap-2"><img src="https://madhurbazar.online/assets/home/images/open-clock-icon.jpg" alt="Open" className="w-4 h-4 brightness-0 invert opacity-70" />{openTime}</span>
          <span className="flex items-center gap-2"><img src="https://madhurbazar.online/assets/home/images/close-clock-icon.jpg" alt="Close" className="w-4 h-4 brightness-0 invert opacity-70" />{closeTime}</span>
        </a>
        
        <a 
          href="https://madhurbazar.online/app/madhurbazar.apk" 
          onClick={() => trackEvent('CompleteRegistration', { content_name: 'APK Download', placement: 'GameCard Chart' })}
          className="mx-auto"
        >
          <img src="https://madhurbazar.online/assets/home/images/graph-icon81.png" alt="Chart" className="w-[40px] brightness-0 invert opacity-80 hover:opacity-100 hover:drop-shadow-[0_0_8px_rgba(250,176,40,0.8)] transition-all" />
        </a>
        
        <a 
          href="https://madhurbazar.online/app/madhurbazar.apk" 
          onClick={() => trackEvent('CompleteRegistration', { content_name: 'APK Download', placement: 'GameCard Message' })}
          className="text-[14px] text-gray-300 hover:text-[#fab028] transition-colors flex items-center gap-2"
        >
          <img src="https://madhurbazar.online/assets/home/images/message-icon.jpg" alt="Message" className="w-4 h-4 brightness-0 invert opacity-70" />{formattedDate}
        </a>
      </div>

      <div className="pera-content">
        {/* Middle Row: Title and Play Button */}
        <h3 className="text-center flex justify-between items-center text-white text-[22px] font-bold pb-[15px] px-[5px] tracking-wide">
          <span className="mx-auto drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">{name}</span>
          <a 
            href="https://madhurbazar.online/app/madhurbazar.apk" 
            onClick={() => trackEvent('CompleteRegistration', { content_name: 'APK Download', placement: 'GameCard Play' })}
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src="https://madhurbazar.online/assets/home/images/play.png" alt="Play" className="w-[38px]" />
          </a>
        </h3>

        {/* Bottom Row: Results */}
        <div className="flex justify-between gap-2">
          <div className="flex-1">
            <p className="text-[12px] text-gray-400 mb-1 text-center uppercase tracking-wider font-semibold">Open</p>
            <div className="text-center font-bold py-[10px] text-[24px] text-[#fab028] rounded-[8px] bg-[#222] border border-[#333] shadow-inner drop-shadow-[0_0_5px_rgba(250,176,40,0.2)]">
              {openRes}
            </div>
          </div>
          <div className="flex-1">
            <p className="text-[12px] text-gray-400 mb-1 text-center uppercase tracking-wider font-semibold">Jodi</p>
            <div className="text-center font-bold py-[10px] text-[24px] text-[#fab028] rounded-[8px] bg-[#222] border border-[#333] shadow-inner drop-shadow-[0_0_5px_rgba(250,176,40,0.2)]">
              {jodi}
            </div>
          </div>
          <div className="flex-1">
            <p className="text-[12px] text-gray-400 mb-1 text-center uppercase tracking-wider font-semibold">Close</p>
            <div className="text-center font-bold py-[10px] text-[24px] text-[#fab028] rounded-[8px] bg-[#222] border border-[#333] shadow-inner drop-shadow-[0_0_5px_rgba(250,176,40,0.2)]">
              {closeRes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-[#1a1a1a] border border-[#333] rounded-[10px] shadow-[0_8px_30px_rgb(0,0,0,0.3)] overflow-hidden mb-4">
      <h2 className="m-0">
        <button className="w-full text-left bg-[#222] hover:bg-[#2a2a2a] transition-colors text-white font-semibold text-[18px] p-[18px_20px] focus:outline-none flex justify-between items-center border-b border-[#333]">
          {question}
        </button>
      </h2>
      <div className="p-[20px] text-gray-400 text-[16px] leading-[1.6]">
        <p className="m-0">{answer}</p>
      </div>
    </div>
  );
}

const games = [
  { name: "MILAN MORNING", time: "10:15 AM - 11:15 AM", result: "123-68-189" },
  { name: "KALYAN MORNING", time: "11:00 AM - 12:02 PM", result: "***-**-***" },
  { name: "MADHUR MORNING", time: "11:30 AM - 12:30 PM", result: "***-**-***" },
  { name: "SRIDEVI", time: "11:35 AM - 12:35 PM", result: "***-**-***" },
  { name: "TIME BAZAR", time: "01:00 PM - 02:00 PM", result: "***-**-***" },
  { name: "MADHUR DAY", time: "01:30 PM - 02:30 PM", result: "***-**-***" },
  { name: "MILAN DAY", time: "03:00 PM - 05:00 PM", result: "***-**-***" },
  { name: "RAJDHANI DAY", time: "03:00 PM - 05:00 PM", result: "***-**-***" },
  { name: "SUPREME DAY", time: "03:35 PM - 05:35 PM", result: "***-**-***" },
  { name: "KALYAN", time: "04:10 PM - 06:10 PM", result: "***-**-***" },
  { name: "SRIDEVI NIGHT", time: "07:00 PM - 08:00 PM", result: "***-**-***" },
  { name: "MADHUR NIGHT", time: "08:30 PM - 10:30 PM", result: "***-**-***" },
  { name: "SUPREME NIGHT", time: "08:45 PM - 10:45 PM", result: "***-**-***" },
  { name: "MILAN NIGHT", time: "09:00 PM - 11:00 PM", result: "***-**-***" },
  { name: "KALYAN NIGHT", time: "09:25 PM - 11:30 PM", result: "***-**-***" },
  { name: "RAJDHANI NIGHT", time: "09:30 PM - 11:45 PM", result: "***-**-***" },
  { name: "MAIN BAZAR", time: "09:40 PM - 12:05 AM", result: "***-**-***" },
  { name: "KARNATAKA DAY", time: "10:00 AM - 11:00 AM", result: "***-**-***" },
  { name: "KARNATAKA NIGHT", time: "08:00 PM - 09:00 PM", result: "***-**-***" },
  { name: "RATAN KHATRI", time: "10:00 PM - 12:00 AM", result: "***-**-***" }
];
