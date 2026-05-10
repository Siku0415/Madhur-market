'use client';
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Download, Wallet, ChevronDown, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { trackCapiEvent } from "@/app/actions/tracking";

export default function Home() {
  const handleDownload = async (placement: string) => {
    // Client-side Pixel Tracking
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'CompleteRegistration', {
        content_name: 'APK Download',
        placement: placement,
        value: 100.0,
        currency: 'INR'
      });
    }

    // Server-side Conversions API Tracking
    await trackCapiEvent('CompleteRegistration', {
      content_name: 'APK Download',
      placement: placement,
      value: 100.0,
      currency: 'INR'
    });
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20 md:pb-0 overflow-x-hidden">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-3 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group" id="header-logo-link">
            <div className="relative">
              <Image 
                src="https://madhurmatka.today/assets/img/logo.png" 
                alt="Madhur Bazar Logo" 
                width={160}
                height={48}
                priority
                unoptimized
                className="h-12 w-auto transition-transform group-hover:scale-105" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('logo-2.png')) {
                    target.src = "https://madhurbazar.online/assets/img/logo-2.png";
                  } else {
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.logo-fallback');
                    if (fallback) fallback.classList.remove('hidden');
                  }
                }}
              />
              <div className="logo-fallback hidden flex items-center gap-2">
                <div className="w-10 h-10 bg-[#fab028] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-[#fab028]/10">M</div>
                <span className="text-2xl font-black text-gray-900 tracking-tighter italic uppercase">Madhur <span className="text-[#fab028]">Bazar</span></span>
              </div>
            </div>
          </Link>
          <button className="md:hidden text-gray-600 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <nav className="hidden md:flex gap-8 font-bold text-gray-600 items-center">
            <Link href="/" className="hover:text-[#fab028] transition-colors font-black">Home</Link>
            <Link href="#rates" className="hover:text-[#fab028] transition-colors font-black">Game Rates</Link>
            <Link href="#testimonials" className="hover:text-[#fab028] transition-colors font-black">Reviews</Link>
            <Link href="#faq" className="hover:text-[#fab028] transition-colors font-black">FAQ</Link>
            <div className="text-end ml-4">
              <a 
                id="header-download-button"
                href="https://madhurbazar.online/app/madhurbazar.apk" 
                onClick={() => handleDownload('Header')}
                className="text-white bg-[#fab028] py-2.5 px-6 text-sm font-black rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_20_rgba(250,176,40,0.3)] shadow-lg inline-block uppercase"
              >
                DOWNLOAD APP
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Announcement Bar */}
      <div className="bg-[#fab028] py-1.5 whitespace-nowrap overflow-hidden sticky top-[73px] z-40 border-b border-black/5">
        <div className="inline-block animate-marquee whitespace-nowrap text-black font-black text-[10px] md:text-xs uppercase tracking-wider italic">
          India&apos;s trusted Matka application 24 hours withdrawal service available &nbsp;&nbsp; • &nbsp;&nbsp; 
          India&apos;s trusted Matka application 24 hours withdrawal service available &nbsp;&nbsp; • &nbsp;&nbsp; 
          India&apos;s trusted Matka application 24 hours withdrawal service available &nbsp;&nbsp; • &nbsp;&nbsp; 
          India&apos;s trusted Matka application 24 hours withdrawal service available &nbsp;&nbsp; • &nbsp;&nbsp; 
          India&apos;s trusted Matka application 24 hours withdrawal service available &nbsp;&nbsp; • &nbsp;&nbsp; 
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: inline-block;
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </div>

      {/* Hero Banner Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full bg-white relative h-[280px] md:h-[550px] overflow-hidden"
      >
        <Image 
          src="https://madhurbazar.online/assets/home/images/bannerimage.jpg" 
          alt="Banner" 
          fill
          priority
          className="object-cover transition-transform duration-[12s] hover:scale-110" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none"></div>
      </motion.section>

      {/* Hero Action Section */}
      <section className="py-12 px-4 text-center bg-white relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <a 
            id="hero-download-button"
            href="https://madhurbazar.online/app/madhurbazar.apk" 
            onClick={() => handleDownload('Hero')}
            className="inline-flex items-center justify-center gap-4 w-full md:w-auto text-white bg-[#fab028] py-5 px-14 rounded-full text-2xl font-black shadow-[0_15px_40px_rgba(250,176,40,0.4)] hover:scale-105 transition-all duration-300 active:scale-95 group relative overflow-hidden"
          >
            <span className="text-4xl animate-bounce group-hover:scale-125 transition-transform">📥</span>
            <span className="relative z-10 uppercase tracking-tight">DOWNLOAD APP NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </a>
        </motion.div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
          >
            <FeatureCard 
              icon={<Wallet className="w-14 h-14" />} 
              title="Min. Deposit ₹200" 
              hindi="सबसे कम ₹200 से शुरुवात" 
              sub="Instant Loading" 
              variants={slideInLeft}
            />
            <FeatureCard 
              icon={<Download className="w-14 h-14 rotate-180" />} 
              title="Min. Withdrawal ₹800" 
              hindi="निकासी मात्र ₹800 से" 
              sub="Fast Payouts" 
              variants={slideInLeft}
            />
            <FeatureCard 
              icon={<Zap className="w-14 h-14" />} 
              title="Fastest Service" 
              hindi="पलक झपकते ही विड्रॉल"
              sub="24/7 Transactions" 
              variants={slideInRight}
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-14 h-14" />} 
              title="100% Reliable" 
              hindi="पूर्णतः सुरक्षित और भरोसेमंद"
              sub="Trusted Matka App" 
              variants={slideInRight}
            />
          </motion.div>
        </div>
      </section>

      {/* Game Rates Table Section */}
      <section id="rates" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-gray-900 leading-tight mb-4 uppercase tracking-tighter italic">Official Game Rates</h2>
            <p className="text-[#fab028] font-bold uppercase tracking-widest text-sm mb-16 underline underline-offset-8">बेस्ट गेम रेट्स जो आपको बनाए विनर</p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            <RateCard title="Single Digit" rate="1 RS KA 10.00 Rs" />
            <RateCard title="Jodi Digit" rate="1 RS KA 100.00 Rs" />
            <RateCard title="Single Pana" rate="1 RS KA 150.00 Rs" />
            <RateCard title="Double Pana" rate="1 RS KA 300.00 Rs" />
            <RateCard title="Triple Pana" rate="1 RS KA 1000.00 Rs" />
            <RateCard title="Half Sangam A" rate="1 RS KA 1000.00 Rs" />
            <RateCard title="Half Sangam B" rate="1 RS KA 1000.00 Rs" />
            <RateCard title="Full Sangam" rate="1 RS KA 10000.00 Rs" />
          </motion.div>
        </div>
      </section>

      {/* User Reviews Section */}
      <section id="testimonials" className="py-24 bg-gray-50 overflow-hidden border-y border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-900 leading-tight mb-4 uppercase tracking-tighter italic">हमारे विजेता क्या कहते हैं</h2>
            <p className="text-[#fab028] font-bold uppercase tracking-widest text-sm">भारत का नंबर 1 भरोसेमंद मटका ऐप</p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <TestimonialCard 
              name="राहुल शर्मा" 
              location="दिल्ली" 
              image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200"
              text="मधुर बाज़ार का रिज़ल्ट सबसे तेज़ है। विड्रॉल भी चुटकियों में हो जाता है। बहुत भरोसेमंद ऐप है।"
              variants={fadeInUp}
            />
            <TestimonialCard 
              name="प्रिया वर्मा" 
              location="लखनऊ" 
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
              text="कस्टमर सपोर्ट बहुत अच्छा है। मुझे कभी कोई दिक्कत नहीं आई। पैसा बिल्कुल सुरक्षित है और गेम रेट भी बेस्ट है।"
              variants={fadeInUp}
            />
            <TestimonialCard 
              name="अमित सिंह" 
              location="पटना" 
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
              text="मैने बहुत सारी ऐप्स इस्तेमाल कीं पर मधुर बाज़ार जैसा गेम रेट और सफ़ाई कहीं नहीं मिली। रोज़ाना जीत का मौका!"
              variants={fadeInUp}
            />
            <TestimonialCard 
              name="संजय यादव" 
              location="इंदौर" 
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
              text="इंटरफ़ेस बहुत आसान है। पहली बार में ही सब समझ आ गया। शानदार एक्सपीरियंस! पैसे निकालने में कोई झंझट नहीं।"
              variants={fadeInUp}
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-black text-gray-900 leading-tight mb-4 uppercase tracking-tighter italic">Frequently Asked Questions</h2>
            <div className="w-24 h-1.5 bg-[#fab028] mx-auto rounded-full shadow-lg shadow-[#fab028]/20"></div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <FaqItem 
              question="What is Madhur Bazar Matka ?" 
              answer="Madhur Bazar Matka leads India's online gaming market with transparency and trust. You can participate in major matka games and win big jackpots. (मधुर बाज़ार मटका पारदर्शिता और भरोसे के साथ भारत के ऑनलाइन गेमिंग बाज़ार का नेतृत्व करता है।)" 
            />
            <FaqItem 
              question="Which games are available?" 
              answer="We host all popular Satta Matka games including Kalyan, Sridevi, Milan Day/Night, Time Bazar, and Rajdhani systems. (हम कल्याण, श्रीदेवी, मिलन डे/नाइट, टाइम बाज़ार और राजधानी सिस्टम सहित सभी लोकप्रिय सट्टा मटका गेम होस्ट करते हैं।)" 
            />
            <FaqItem 
              question="Is my money safe on this platform?" 
              answer="Absolutely. We handle thousands of transactions daily. Our app is 100% secure with encrypted payment systems and instant payouts. (बिल्कुल। हम रोजाना हजारों लेनदेन संभालते हैं। हमारा ऐप एन्क्रिप्टेड भुगतान सिस्टम और तत्काल भुगतान के साथ 100% सुरक्षित है।)" 
            />
            <FaqItem 
              question="What are the withdrawal limits?" 
              answer="Minimum withdrawal is ₹800 with no maximum daily limit. All withdrawals are processed within minutes of your request. (न्यूनतम निकासी ₹800 है जिसमें कोई अधिकतम दैनिक सीमा नहीं है। सभी निकासी आपके अनुरोध के कुछ ही मिनटों के भीतर संसाधित की जाती हैं।)" 
            />
          </motion.div>
        </div>
      </section>

      {/* Modern Footer Section */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-md">
              <div className="relative mb-6">
                <Image 
                  src="https://madhurmatka.today/assets/img/logo.png" 
                  alt="Logo" 
                  width={160}
                  height={48}
                  unoptimized
                  className="h-12 w-auto" 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('logo-2.png')) {
                      target.src = "https://madhurbazar.online/assets/img/logo-2.png";
                    } else {
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.logo-fallback');
                      if (fallback) fallback.classList.remove('hidden');
                    }
                  }}
                />
                <div className="logo-fallback hidden flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#fab028] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-[#fab028]/10">M</div>
                  <span className="text-2xl font-black text-gray-900 tracking-tighter italic uppercase">Madhur <span className="text-[#fab028]">Bazar</span></span>
                </div>
              </div>
              <p className="text-gray-500 font-medium leading-relaxed">
                Madhur Bazar is India&apos;s leading online Matka platform providing the fastest results and a secure gaming experience. Play with confidence on the most trusted app.
              </p>
            </div>
            <div className="flex gap-16">
              <div className="text-center">
                <p className="text-[#fab028] font-black text-5xl mb-2">10L+</p>
                <p className="text-gray-400 text-xs font-black uppercase tracking-widest">Active Players</p>
              </div>
              <div className="text-center">
                <p className="text-[#fab028] font-black text-5xl mb-2">4.9★</p>
                <p className="text-gray-400 text-xs font-black uppercase tracking-widest">User Rating</p>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm font-bold">
              © {new Date().getFullYear()} Madhur Bazar Matka. India&apos;s No. 1 Official Application.
            </p>
            <div className="flex gap-8 text-[11px] font-black uppercase text-gray-500 tracking-wider">
              <Link href="#" className="hover:text-[#fab028] transition-colors">Terms of Use</Link>
              <Link href="#" className="hover:text-[#fab028] transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#fab028] transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Persistent Floating Download FAB */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <motion.a 
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          id="floating-download-button"
          aria-label="Floating Download App Button"
          href="https://madhurbazar.online/app/madhurbazar.apk" 
          onClick={() => handleDownload('Floating FAB')}
          className="flex items-center justify-center gap-3 bg-[#fab028] text-white px-7 py-5 rounded-full font-black shadow-[0_15px_30px_rgba(250,176,40,0.5)] transition-all"
        >
          <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-lg font-bold">
            📥
          </div>
          <span className="hidden md:inline uppercase tracking-tighter">Download Now</span>
        </motion.a>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, hindi, sub, variants }: { icon: React.ReactNode; title: string; hindi?: string; sub: string; variants: any }) {
  return (
    <motion.div 
      variants={variants}
      className="p-10 rounded-[45px] bg-white shadow-[0_15px_60px_rgba(0,0,0,0.03)] border border-transparent hover:border-[#fab028]/10 transition-all duration-700 text-center group hover:shadow-2xl hover:-translate-y-3 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#fab028]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div className="text-[#fab028] mb-8 flex justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 relative z-10">
        {icon}
      </div>
      <h3 className="text-gray-900 font-bold text-xl tracking-tight mb-3 relative z-10">{title}</h3>
      {hindi && <p className="text-[#fab028] text-sm font-black mb-3 relative z-10">{hindi}</p>}
      <p className="text-gray-400 text-[11px] font-black uppercase tracking-widest relative z-10">{sub}</p>
    </motion.div>
  );
}

function RateCard({ title, rate }: { title: string; rate: string }) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      className="bg-white border border-gray-100 p-12 rounded-[50px] shadow-[0_20px_70px_rgba(0,0,0,0.02)] text-center group hover:border-[#fab028]/20 transition-all duration-700 hover:shadow-3xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Image src="https://madhurbazar.online/assets/home/images/icon.png" alt="icon" width={60} height={60} className="grayscale" />
      </div>
      <div className="bg-gray-50/80 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-[#fab028]/10 transition-colors duration-700 relative z-10">
        <Image 
          src="https://madhurbazar.online/assets/home/images/icon.png" 
          alt="Rate Icon" 
          width={45} 
          height={45} 
          className="group-hover:scale-110 transition-transform grayscale group-hover:grayscale-0 duration-700"
        />
      </div>
      <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-[#fab028] transition-colors relative z-10">{title}</h4>
      <p className="text-3xl font-black text-[#fab028] relative z-10">{rate}</p>
    </motion.div>
  );
}

function TestimonialCard({ name, location, image, text, variants }: { name: string; location: string; image: string; text: string; variants: any }) {
  return (
    <motion.div 
      variants={variants}
      className="bg-white p-10 rounded-[50px] border border-gray-50 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-3xl hover:border-[#fab028]/20 transition-all duration-700 group relative"
    >
      <div className="flex items-center gap-5 mb-8">
        <div className="relative w-20 h-20 rounded-3xl overflow-hidden ring-4 ring-[#fab028]/5 shadow-xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
          <Image 
            src={image} 
            alt={name} 
            fill 
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h4 className="text-gray-900 font-black tracking-tight text-xl">{name}</h4>
          <p className="text-[#fab028] text-[11px] font-black uppercase tracking-widest">{location}</p>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute -top-10 -left-4 text-7xl text-[#fab028]/10 font-serif select-none group-hover:text-[#fab028]/20 transition-colors">“</div>
        <p className="text-gray-600 font-semibold leading-relaxed italic relative z-10 text-base">&quot;{text}&quot;</p>
      </div>

      <div className="flex gap-1.5 mt-10 pt-8 border-t border-gray-50">
        {[...Array(5)].map((_, i) => (
          <CheckCircle2 key={i} className="w-5 h-5 text-[#fab028] fill-[#fab028]/10 group-hover:fill-[#fab028]/30 transition-all" />
        ))}
      </div>
    </motion.div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
      }}
      className="bg-white border border-gray-100 rounded-[40px] shadow-[0_15px_50px_rgba(0,0,0,0.02)] overflow-hidden group hover:border-[#fab028]/20 transition-all duration-500"
    >
      <button className="w-full text-left bg-white hover:bg-gray-50/50 transition-colors text-gray-900 font-extrabold text-xl p-10 flex justify-between items-center group">
        <span className="pr-8">{question}</span>
        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#fab028] group-hover:bg-[#fab028] group-hover:text-white transition-all ring-4 ring-transparent group-hover:ring-[#fab028]/10 flex-shrink-0">
          <ChevronDown className="w-6 h-6 transition-transform group-hover:rotate-180" />
        </div>
      </button>
      <div className="px-10 pb-10 text-gray-500 font-medium leading-relaxed border-t border-gray-50 pt-8 bg-gray-50/20 text-base">
        {answer}
      </div>
    </motion.div>
  );
}
