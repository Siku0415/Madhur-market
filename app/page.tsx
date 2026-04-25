'use client';

import Link from "next/link";
import Image from "next/image";
import { trackEvent } from "@/lib/tracking";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20 md:pb-0">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-3 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <img 
              src="https://madhurbazar.online/assets/img/logo-2.png" 
              alt="Madhur Bazar Logo" 
              className="h-12 w-auto" 
            />
          </Link>
          <button className="md:hidden text-gray-600 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <nav className="hidden md:flex gap-8 font-bold text-gray-600 items-center">
            <Link href="/" className="hover:text-[#fab028] transition-colors">Home</Link>
            <Link href="#charts" className="hover:text-[#fab028] transition-colors">Charts</Link>
            <div className="text-end ml-4">
              <a 
                href="https://madhurbazar.online/app/madhurbazar.apk" 
                onClick={() => trackEvent('CompleteRegistration', { content_name: 'APK Download', placement: 'Header' })}
                className="text-white bg-[#fab028] py-2.5 px-6 text-sm font-black rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_20px_rgba(250,176,40,0.3)] shadow-lg inline-block"
              >
                DOWNLOAD APP
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Banner */}
      <section className="w-full bg-white">
        <img 
          src="https://madhurbazar.online/assets/home/images/bannerimage.jpg" 
          alt="Banner" 
          className="w-full h-auto object-cover max-h-[500px]" 
        />
      </section>

      {/* Hero Download Button */}
      <section className="py-10 px-4 text-center bg-white">
        <div className="container mx-auto">
          <a 
            href="https://madhurbazar.online/app/madhurbazar.apk" 
            onClick={() => trackEvent('CompleteRegistration', { content_name: 'APK Download', placement: 'Below Hero' })}
            className="inline-flex items-center justify-center gap-3 w-full md:w-auto text-white bg-[#fab028] py-4 px-12 rounded-full text-xl font-black shadow-[0_10px_30px_rgba(250,176,40,0.4)] hover:scale-105 transition-all duration-300 active:scale-95"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm0-10h2v8h-2V6z"></path>
            </svg>
            GET ANDROID APK NOW
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="p-8 rounded-3xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-white hover:border-[#fab028]/20 transition-all text-center">
              <div className="text-[#fab028] mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-gray-900 font-black text-lg tracking-tight">Min. Deposit 200</h3>
              <p className="text-gray-400 text-xs mt-2 font-bold uppercase tracking-widest">Instant Loading</p>
            </div>
            <div className="p-8 rounded-3xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-white hover:border-[#fab028]/20 transition-all text-center">
              <div className="text-[#fab028] mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
              </div>
              <h3 className="text-gray-900 font-black text-lg tracking-tight">Min. Withdrawal 800</h3>
              <p className="text-gray-400 text-xs mt-2 font-bold uppercase tracking-widest">Fast Payouts</p>
            </div>
            <div className="p-8 rounded-3xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-white hover:border-[#fab028]/20 transition-all text-center">
              <div className="text-[#fab028] mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-gray-900 font-black text-lg tracking-tight">Instant Process</h3>
              <p className="text-gray-400 text-xs mt-2 font-bold uppercase tracking-widest">24/7 Transactions</p>
            </div>
            <div className="p-8 rounded-3xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-white hover:border-[#fab028]/20 transition-all text-center">
              <div className="text-[#fab028] mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.965 11.965 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-gray-900 font-black text-lg tracking-tight">Safe & Secure</h3>
              <p className="text-gray-400 text-xs mt-2 font-bold uppercase tracking-widest">Trusted Matka App</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Button Section */}
      <section className="py-12 px-4 text-center bg-white overflow-hidden">
        <div className="container mx-auto">
          <a 
            href="https://madhurbazar.online/app/madhurbazar.apk" 
            onClick={() => trackEvent('CompleteRegistration', { content_name: 'APK Download', placement: 'Hero' })}
            className="block text-center w-full max-w-2xl mx-auto rounded-3xl p-8 uppercase bg-[#fab028] text-white text-lg font-black transition-all duration-300 relative shadow-2xl hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #fab028 0%, #f9d423 100%)',
            }}
          >
            Check All Live Results & Timing
          </a>
        </div>
      </section>

      {/* Game Rates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-gray-900 leading-tight mb-12 uppercase tracking-tighter italic">Official Game Rates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <RateCard title="Single Digit" rate="1 RS KA 10.00 Rs" />
            <RateCard title="Jodi Digit" rate="1 RS KA 100.00 Rs" />
            <RateCard title="Single Pana" rate="1 RS KA 150.00 Rs" />
            <RateCard title="Double Pana" rate="1 RS KA 300.00 Rs" />
            <RateCard title="Triple Pana" rate="1 RS KA 1000.00 Rs" />
            <RateCard title="Half Sangam A" rate="1 RS KA 1000.00 Rs" />
            <RateCard title="Half Sangam B" rate="1 RS KA 1000.00 Rs" />
            <RateCard title="Full Sangam" rate="1 RS KA 10000.00 Rs" />
          </div>
        </div>
      </section>

      {/* Available Games */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-gray-900 mb-12 leading-tight text-center uppercase tracking-tighter">Available Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, idx) => (
              <GameCard key={idx} name={game.name} time={game.time} result={game.result} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black text-gray-900 leading-tight mb-4 uppercase tracking-tighter">Frequently Asked</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem 
              question="What is Madhur Bazar Matka ?" 
              answer="Madhur Bazar Matka is the most trusted online gaming platform where you can participate in all major matka games and win big jackpots with transparent results." 
            />
            <FaqItem 
              question="Which games are available?" 
              answer="We host all popular Satta Matka games including Kalyan, Sridevi, Milan Day/Night, Time Bazar, and Rajdhani systems." 
            />
            <FaqItem 
              question="Is my money safe?" 
              answer="Absolutely. We handle thousands of transactions daily. Our app is 100% secure with encrypted payment systems and instant payouts." 
            />
            <FaqItem 
              question="What are the withdrawal limits?" 
              answer="Minimum withdrawal is ₹1000 with no maximum daily limit. All withdrawals are processed within minutes of your request." 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-md">
              <img 
                src="https://madhurbazar.online/assets/img/logo-2.png" 
                alt="Logo" 
                className="h-12 mb-6" 
              />
              <p className="text-gray-500 font-medium leading-relaxed">
                Madhur Bazar is india&apos;s leading online matka platform providing fastest results and most secure gaming experience.
              </p>
            </div>
            <div className="flex gap-12">
              <div className="text-center">
                <p className="text-[#fab028] font-black text-4xl mb-1">10L+</p>
                <p className="text-gray-400 text-xs font-black uppercase tracking-widest">Active Users</p>
              </div>
              <div className="text-center">
                <p className="text-[#fab028] font-black text-4xl mb-1">4.8★</p>
                <p className="text-gray-400 text-xs font-black uppercase tracking-widest">Play Rating</p>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm font-bold">
              © {new Date().getFullYear()} Madhur Bazar Matka. Official Website.
            </p>
            <div className="flex gap-6 text-xs font-black uppercase text-gray-500">
              <Link href="#" className="hover:text-[#fab028]">Terms</Link>
              <Link href="#" className="hover:text-[#fab028]">Privacy</Link>
              <Link href="#" className="hover:text-[#fab028]">Disclaimer</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Download Button */}
      <div className="fixed bottom-0 left-0 w-full p-4 z-[100] md:hidden">
        <a 
          href="https://madhurbazar.online/app/madhurbazar.apk" 
          onClick={() => trackEvent('CompleteRegistration', { content_name: 'APK Download', placement: 'Sticky Bottom' })}
          className="flex items-center justify-center gap-3 w-full text-white bg-[#fab028] py-4 rounded-2xl text-lg font-black shadow-[0_-5px_25px_rgba(250,176,40,0.4)] border border-white/20 active:scale-95 transition-transform"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm0-10h2v8h-2V6z"></path>
          </svg>
          DOWNLOAD NOW
        </a>
      </div>
    </div>
  );
}

function RateCard({ title, rate }: { title: string; rate: string }) {
  return (
    <div className="bg-white border border-gray-100 p-10 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] text-center group hover:border-[#fab028]/30 transition-all duration-500 hover:shadow-2xl">
      <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#fab028]/10 transition-colors">
        <img 
          src="https://madhurbazar.online/assets/home/images/icon.png" 
          alt="icon" 
          className="max-w-[40px] opacity-40 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" 
        />
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{title}</h4>
      <p className="text-2xl font-black text-[#fab028]">{rate}</p>
    </div>
  );
}

function GameCard({ name, time, result }: { name: string; time: string; result: string }) {
  const [openTime, closeTime] = time.split(" - ");
  const resParts = result.split("-");
  const openRes = resParts[0] || "***";
  const jodi = resParts[1] || "**";
  const closeRes = resParts[2] || "***";
  
  const dateObj = new Date();
  const formattedDate = `${String(dateObj.getDate()).padStart(2, '0')}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${dateObj.getFullYear()}`;

  return (
    <div className="bg-white border border-gray-100 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] p-8 transition-all duration-300 hover:shadow-2xl hover:border-[#fab028]/30 group">
      {/* Top Row: Timings */}
      <div className="flex justify-between items-center border-b border-gray-50 pb-6 mb-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{openTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{closeTime}</span>
          </div>
        </div>
        
        <div className="bg-gray-50 p-3 rounded-full group-hover:bg-[#fab028]/10 transition-colors">
          <img src="https://madhurbazar.online/assets/home/images/graph-icon81.png" alt="Chart" className="w-8 opacity-20 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0" />
        </div>
        
        <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest">
          {formattedDate}
        </div>
      </div>

      <div className="relative">
        <h3 className="text-center flex items-center justify-between gap-4 text-gray-900 text-2xl font-black mb-8 uppercase tracking-tighter italic">
          <span className="flex-1 text-left">{name}</span>
          <a 
            href="https://madhurbazar.online/app/madhurbazar.apk" 
            onClick={() => trackEvent('CompleteRegistration', { content_name: 'APK Download', placement: 'GameCard Play' })}
            className="w-12 h-12 bg-[#fab028] rounded-2xl flex items-center justify-center shadow-lg shadow-[#fab028]/30 hover:scale-110 transition-transform"
          >
            <img src="https://madhurbazar.online/assets/home/images/play.png" alt="Play" className="w-6" />
          </a>
        </h3>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100/50">
            <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Open</p>
            <p className="text-xl font-black text-gray-900">{openRes}</p>
          </div>
          <div className="bg-[#fab028]/5 rounded-2xl p-4 text-center border border-[#fab028]/20 ring-4 ring-[#fab028]/5">
            <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Jodi</p>
            <p className="text-3xl font-black text-[#fab028]">{jodi}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100/50">
            <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Close</p>
            <p className="text-xl font-black text-gray-900">{closeRes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] overflow-hidden">
      <button className="w-full text-left bg-white hover:bg-gray-50 transition-colors text-gray-900 font-bold text-lg p-8 flex justify-between items-center group">
        {question}
        <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-[#fab028] group-hover:bg-[#fab028] group-hover:text-white group-hover:border-[#fab028] transition-all">
          ▼
        </div>
      </button>
      <div className="px-8 pb-8 text-gray-500 font-medium leading-relaxed">
        {answer}
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
