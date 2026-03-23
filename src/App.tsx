/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Zap, 
  Layout, 
  Cpu, 
  MessageSquare, 
  BarChart3, 
  Globe, 
  Clock, 
  ShieldCheck,
  Star,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useMotionValue, useTransform, useSpring } from "motion/react";

const lionSrc = "https://qefmchuahafbmzzpehzc.supabase.co/storage/v1/object/public/uploads/uploads/1774123477777_oBklB6tC.png";
const cloudsSrc = "https://qefmchuahafbmzzpehzc.supabase.co/storage/v1/object/public/uploads/uploads/1774123530128_N5ORkoDV.png";

const aiToolIcons = [
  { 
    url: "https://qefmchuahafbmzzpehzc.supabase.co/storage/v1/object/public/uploads/uploads/1774160668134_yh0H220D.png", 
    top: "-12%", left: "48%", 
    delay: "0s", duration: "10s",
    layer: "mid"
  },
  { 
    url: "https://qefmchuahafbmzzpehzc.supabase.co/storage/v1/object/public/uploads/uploads/1774160652182_wj5W4PB0.png", 
    top: "15%", right: "-10%", 
    delay: "1.5s", duration: "6s",
    layer: "mid"
  },
  { 
    url: "https://qefmchuahafbmzzpehzc.supabase.co/storage/v1/object/public/uploads/uploads/1774160641589_mMBbljHA.png", 
    top: "75%", right: "-5%", 
    delay: "3s", duration: "8s",
    layer: "mid"
  },
  { 
    url: "https://qefmchuahafbmzzpehzc.supabase.co/storage/v1/object/public/uploads/uploads/1774160624412_kQv0R68c.png", 
    top: "105%", left: "52%", 
    delay: "0.8s", duration: "8s",
    layer: "mid"
  },
  { 
    url: "https://qefmchuahafbmzzpehzc.supabase.co/storage/v1/object/public/uploads/uploads/1774160599936_H9pWms9A.png", 
    top: "70%", left: "-8%", 
    delay: "2.2s", duration: "6s",
    layer: "mid"
  },
  { 
    url: "https://qefmchuahafbmzzpehzc.supabase.co/storage/v1/object/public/uploads/uploads/1774161125045_uV9Bq6ac.png", 
    top: "10%", left: "-5%", 
    delay: "4s", duration: "10s",
    layer: "mid"
  },
];

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Conversion Website Design",
    body: "Premium hero sections, offer positioning, UX systems, and landing pages built to convert serious traffic.",
    features: ["High-Status Visuals", "Conversion Copywriting", "Mobile Optimization"]
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Automation Architecture",
    body: "Lead routing, CRM workflows, AI chat, proposal funnels, onboarding automation, and reporting systems.",
    features: ["CRM Integration", "Lead Qualification", "Workflow Logic"]
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Offer & Messaging Systems",
    body: "Sharper copy, better CTA logic, authority positioning, and a narrative that makes your agency feel expensive.",
    features: ["Value Prop Design", "Authority Building", "CTA Optimization"]
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Launch Support",
    body: "Analytics, QA, responsive polish, CMS setup, and post-launch iteration based on real user behavior.",
    features: ["Analytics Setup", "A/B Testing", "Performance Tuning"]
  },
];

const work = [
  {
    title: "AI Ops Studio",
    body: "Rebuilt offer and funnel. Added $1.2M to pipeline in 90 days.",
    gradient: "from-[#f4c400] to-[#a86d00]",
    stats: "+$1.2M Pipeline"
  },
  {
    title: "PromptStack Pro",
    body: "Automated lead qualification for SaaS. Reduced CAC by 42%.",
    gradient: "from-[#27272a] to-[#6b7280]",
    stats: "-42% CAC"
  },
  {
    title: "Atlas Growth Lab",
    body: "Proposal automation and CRM enrichment. 6x ROI on initial spend.",
    gradient: "from-[#1f2937] to-[#f4c400]",
    stats: "6x ROI"
  },
];

const processSteps = [
  {
    num: "01",
    title: "Deep Audit",
    body: "We map your current sales flow and identify where $5K–$10K/mo is leaking."
  },
  {
    num: "02",
    title: "System Build",
    body: "We wire the AI lead intake, CRM routing, and proposal automation."
  },
  {
    num: "03",
    title: "The Atlas Method",
    body: "We deploy our proprietary messaging framework to maximize conversion."
  },
  {
    num: "04",
    title: "Scale & Support",
    body: "We optimize for ROI and provide 24/7 technical oversight."
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$4,500",
    desc: "For agencies needing a high-status presence and basic lead intake.",
    features: ["Custom hero section", "Conversion copy", "Responsive build", "1 core automation"],
    cta: "Choose Starter",
    popular: false
  },
  {
    name: "Growth",
    price: "$9,000",
    desc: "Our flagship system. Replaces 2 full-time SDRs with automation.",
    features: ["Multi-section website", "CRM + lead routing", "AI chat / forms", "Analytics dashboard"],
    cta: "Choose Growth",
    popular: true
  },
  {
    name: "Flagship",
    price: "$15,000+",
    desc: "Full-scale automation engine for elite agencies scaling to $1M+.",
    features: ["Custom design system", "Advanced workflows", "Proposal automation", "Launch optimization"],
    cta: "Choose Flagship",
    popular: false
  },
];

const BackgroundGrid = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const clickScale = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    const handleClick = () => {
      clickScale.set(1);
      setTimeout(() => clickScale.set(0), 600);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleClick);
    };
  }, [mouseX, mouseY, clickScale]);

  const spotlightBackground = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(244, 196, 0, 0.08), transparent 80%)`
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base subtle grid - very faint, always there */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#171717_1px,transparent_1px)] [background-size:40px_40px]" />
      
      {/* Interactive spotlight reveal - slightly more visible dots around mouse */}
      <motion.div 
        className="absolute inset-0 opacity-100"
        style={{
          background: spotlightBackground,
          maskImage: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, black, transparent)`
          ),
          WebkitMaskImage: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, black, transparent)`
          ),
        }}
      >
        <div className="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(#171717_1.5px,transparent_1.5px)] [background-size:40px_40px]" />
      </motion.div>

      {/* Click Pulse Effect */}
      <motion.div
        className="absolute h-[1000px] w-[1000px] rounded-full bg-[#f4c400]/10 blur-[120px]"
        style={{
          left: smoothX,
          top: smoothY,
          x: "-50%",
          y: "-50%",
          scale: clickScale,
          opacity: useTransform(clickScale, [0, 0.2, 1], [0, 1, 0]),
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
      />
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Parallax Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax Transforms
  const lionX = useTransform(smoothMouseX, [-500, 500], [-5, 5]);
  const lionY = useTransform(smoothMouseY, [-500, 500], [-5, 5]);
  
  // Relative parallax for icons (since they will be inside the lion's motion container)
  // Total motion = lionMotion + relativeMotion
  // Back: -5 + -10 = -15
  // Mid: -5 + -5 = -10
  // Front: -5 + -3 = -8
  const relBackX = useTransform(smoothMouseX, [-500, 500], [-10, 10]);
  const relBackY = useTransform(smoothMouseY, [-500, 500], [-10, 10]);
  
  const relMidX = useTransform(smoothMouseX, [-500, 500], [-5, 5]);
  const relMidY = useTransform(smoothMouseY, [-500, 500], [-5, 5]);
  
  const relFrontX = useTransform(smoothMouseX, [-500, 500], [-3, 3]);
  const relFrontY = useTransform(smoothMouseY, [-500, 500], [-3, 3]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX - innerWidth / 2;
      const y = e.clientY - innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen bg-[#f6f3ee] font-sans text-[#171717] selection:bg-[#f4c400]/30 overflow-x-hidden">
      <BackgroundGrid />
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled 
            ? "bg-[#f6f3ee]/90 backdrop-blur-md border-black/5 py-2 shadow-[0_2px_20px_rgba(0,0,0,0.02)]" 
            : "bg-transparent border-transparent py-8"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <motion.div 
              animate={{ scale: scrolled ? 0.85 : 1 }}
              whileHover={{ scale: 1.05 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black bg-[#111111] text-lg font-black text-[#f4c400] shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
            >
              &gt;_
            </motion.div>
            <div className="hidden sm:block">
              <motion.div 
                animate={{ 
                  opacity: scrolled ? 0 : 1,
                  height: scrolled ? 0 : "auto",
                  marginBottom: scrolled ? 0 : 2
                }}
                className="text-[10px] font-bold uppercase tracking-[0.24em] text-black/40 leading-none overflow-hidden"
              >
                AI Automation
              </motion.div>
              <motion.div 
                animate={{ fontSize: scrolled ? "14px" : "16px" }}
                className="font-black tracking-tight leading-tight"
              >
                Atlas Agency
              </motion.div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-black/60 md:flex">
            {["Services", "Work", "Process", "Pricing"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="transition-colors hover:text-black relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f4c400] transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="hidden rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-bold text-black shadow-sm transition hover:bg-gray-50 md:inline-flex"
            >
              Book Call
            </motion.button>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-[#f4c400] px-5 py-2.5 text-sm font-bold text-black shadow-[0_8px_20px_rgba(244,196,0,0.25)] transition hover:-translate-y-0.5"
            >
              Get Proposal
            </motion.button>
            <motion.button 
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#f6f3ee] pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-2xl font-black">
              {["Services", "Work", "Process", "Pricing"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between border-b border-black/5 pb-4"
                >
                  {item}
                  <ChevronRight className="text-[#f4c400]" />
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,196,0,0.12),transparent_40%),radial-gradient(circle_at_70%_40%,rgba(244,196,0,0.08),transparent_30%)]" />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
              {/* Left Column: Text */}
              <div className="flex flex-col">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm px-4 py-2 text-xs font-bold uppercase tracking-widest text-black/60 mb-8 w-fit"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Elite AI Automation Design
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black leading-[0.82] tracking-[-0.05em] mb-16"
                >
                  <span className="relative inline-block">
                    <span className="relative z-10 px-6 py-1 bg-[#f4c400] rounded-2xl shadow-[0_20px_50px_rgba(244,196,0,0.35)]">AUTOMATED</span>
                  </span>
                  <br />
                  <span className="text-black opacity-90 inline-block mt-3">Sales Systems</span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-lg sm:text-xl text-black/50 font-medium leading-relaxed max-w-xl mb-16"
                >
                  We replace 3 full-time SDRs with a single AI-driven ecosystem. ROI in 60 days or we work for free.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col sm:flex-row gap-6 mb-28"
                >
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -4 }}
                    whileTap={{ scale: 0.96 }}
                    className="rounded-full bg-[#111111] px-10 py-5 text-base font-bold text-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] flex items-center justify-center gap-2 group"
                  >
                    Book Your ROI Audit <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    className="rounded-full border border-black/5 bg-white px-10 py-5 text-base font-bold text-black shadow-sm transition-all duration-300 hover:bg-gray-50 flex items-center justify-center gap-2"
                  >
                    View Case Studies
                  </motion.button>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-wrap items-center gap-8"
                >
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-[#f6f3ee] bg-gray-200 overflow-hidden">
                        <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-bold text-black/40 uppercase tracking-widest">
                    Trusted by <span className="text-black">50+</span> AI-First Founders
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Lion & Floating UI */}
              <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center">
                {/* Orbit Lines (SVG) */}
                <motion.svg 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute inset-0 w-full h-full z-0 pointer-events-none hidden lg:block" 
                  viewBox="0 0 600 600"
                >
                  <motion.circle 
                    cx="300" cy="300" r="220" 
                    fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="1" strokeDasharray="4 8"
                  />
                  <motion.circle 
                    cx="300" cy="300" r="160" 
                    fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1" strokeDasharray="6 12"
                  />
                </motion.svg>

                {/* Background Dashboard (Grounding Element) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 0.05, scale: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="w-[800px] h-[600px] border border-black/10 rounded-[4rem] bg-black/[0.02] translate-y-20" />
                </motion.div>

                {/* Focal Staging: Radial Glow */}
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
                  <div className="w-[1200px] h-[1200px] bg-radial from-[#f4c400]/15 via-transparent to-transparent opacity-60 blur-[120px]" />
                  <div className="absolute w-[800px] h-[800px] bg-radial from-[#f4c400]/5 via-transparent to-transparent opacity-40 blur-[80px]" />
                </div>

                {/* The Lion & Clouds (Visual Anchor) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  style={{ x: lionX, y: lionY }}
                  transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-20 w-full max-w-[750px] lg:max-w-[1100px] lg:translate-y-12 lg:translate-x-24"
                >
                  {/* Clouds (Behind Lion) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      opacity: { duration: 1.5, delay: 0.1 },
                      scale: { duration: 1.5, delay: 0.1 }
                    }}
                    className="absolute inset-0 z-10 pointer-events-auto cursor-pointer"
                  >
                    <img 
                      src={cloudsSrc} 
                      alt="Clouds Background" 
                      className="w-full h-auto"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>

                  {/* AI Tool Icons: Intentional Circular Orbit */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 z-20 pointer-events-none -translate-y-[20px]"
                  >
                    {aiToolIcons.map((icon, idx) => {
                      return (
                        <motion.div
                          key={idx}
                          className="absolute"
                          style={{
                            top: icon.top,
                            left: icon.left,
                            right: icon.right,
                            x: relMidX,
                            y: relMidY
                          } as any}
                        >
                          <motion.div 
                            animate={{ rotate: -360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="relative group"
                          >
                            {/* Subtle Icon Glow */}
                            <div className="absolute inset-0 bg-[#f4c400]/15 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            
                            <img
                              src={icon.url}
                              alt="AI Tool"
                              className={`
                                w-[50px] lg:w-[75px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-1000
                                opacity-100 blur-0 scale-100 group-hover:scale-110
                              `}
                              referrerPolicy="no-referrer"
                            />
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </motion.div>

                  {/* The Lion */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ x: relFrontX, y: relFrontY }}
                    transition={{ 
                      opacity: { duration: 1.2, delay: 0.3 },
                      scale: { duration: 1.2, delay: 0.3 }
                    }}
                    className="relative z-30 pointer-events-auto cursor-pointer group -translate-y-[30px]"
                  >
                    <div className="absolute inset-0 bg-[#f4c400]/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <img 
                      src={lionSrc} 
                      alt="Atlas Lion" 
                      className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="py-12 border-y border-black/5 bg-white/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-black/30 mb-8">
              Powering elite AI-first operations
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-40">
              {["Scale.ai", "Vanta", "Deel", "Ramp", "Mercury", "Brex"].map((brand) => (
                <span key={brand} className="text-xl font-black tracking-tighter text-black">{brand}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 lg:py-32 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
              <div className="max-w-2xl">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-[#f4c400] font-black uppercase tracking-widest text-xs mb-4"
                >
                  Capabilities
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1]"
                >
                  Everything you need to launch a high-converting AI brand.
                </motion.h2>
              </div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-md text-black/50 font-medium leading-relaxed"
              >
                We don't just build websites. We design the entire conversion engine that powers your agency's growth.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -10 }}
                  className="group p-10 rounded-[3rem] bg-white border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-[1.25rem] bg-[#111111] text-[#f4c400] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-5 leading-tight tracking-tight">{service.title}</h3>
                  <p className="text-sm text-black/40 mb-10 font-medium leading-relaxed">{service.body}</p>
                  <ul className="space-y-3">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-[11px] font-bold text-black/30">
                        <div className="h-1 w-1 rounded-full bg-[#f4c400]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="py-24 lg:py-32 bg-[#111111] text-white rounded-[4rem] mx-4 lg:mx-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
              <div className="max-w-2xl">
                <div className="text-[#f4c400] font-black uppercase tracking-widest text-xs mb-4">Portfolio</div>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1]">
                  Systems designed to look premium and perform under pressure.
                </h2>
              </div>
              <button className="group flex items-center gap-2 text-sm font-bold text-[#f4c400] uppercase tracking-widest">
                View All Projects <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
              {work.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative overflow-hidden rounded-[3.5rem] bg-white/5 border border-white/5 aspect-[4/5] hover:border-white/10 transition-colors duration-500"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-25 transition-opacity duration-700`} />
                  
                  <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start">
                      <div className="px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-[9px] font-black uppercase tracking-[0.2em]">
                        Case Study 0{idx + 1}
                      </div>
                      <div className="text-[#f4c400] font-black text-3xl tracking-tighter">
                        {item.stats}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-3xl font-black mb-5 tracking-tight">{item.title}</h3>
                      <p className="text-white/40 text-sm font-medium leading-relaxed mb-8">
                        {item.body}
                      </p>
                      <motion.button 
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-5 rounded-2xl bg-white text-black font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#f4c400] hover:scale-[1.02]"
                      >
                        View Details
                      </motion.button>
                    </div>
                  </div>

                  {/* Decorative UI in card */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-8 opacity-20 group-hover:opacity-40 transition-opacity">
                    <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                      <div className="flex gap-2 mb-4">
                        <div className="h-2 w-2 rounded-full bg-white/20" />
                        <div className="h-2 w-2 rounded-full bg-white/20" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-full bg-white/10 rounded-full" />
                        <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 lg:py-32 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <div className="text-[#f4c400] font-black uppercase tracking-[0.2em] text-[10px] mb-6">The Method</div>
                <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[0.9] mb-10">
                  Built like a design sprint. Delivered like an unfair advantage.
                </h2>
                <p className="text-lg text-black/50 font-medium leading-relaxed mb-16 max-w-xl">
                  We keep the process tight, strategic, and fast so your team gets a premium website and a working automation engine without months of drift.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6 p-6 rounded-[2.5rem] bg-white border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                    <div className="h-12 w-12 rounded-2xl bg-green-500/10 text-green-600 flex items-center justify-center">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-base font-black tracking-tight">2-4 Week Delivery</div>
                      <div className="text-xs text-black/30 font-bold uppercase tracking-widest">Rapid execution, no fluff.</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 p-6 rounded-[2.5rem] bg-white border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                    <div className="h-12 w-12 rounded-2xl bg-[#f4c400]/10 text-[#f4c400] flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-base font-black tracking-tight">Fixed Pricing</div>
                      <div className="text-xs text-black/30 font-bold uppercase tracking-widest">No hidden fees or scope creep.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {processSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="group p-10 rounded-[3rem] bg-white border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500"
                  >
                    <div className="flex gap-8">
                      <div className="text-5xl font-black text-[#f4c400]/20 group-hover:text-[#f4c400] transition-colors duration-500 tracking-tighter">
                        {step.num}
                      </div>
                      <div>
                        <h3 className="text-2xl font-black mb-3 tracking-tight">{step.title}</h3>
                        <p className="text-sm text-black/40 font-medium leading-relaxed">{step.body}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 lg:py-32 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
            <div className="absolute inset-0 [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="text-[#f4c400] font-black uppercase tracking-widest text-xs mb-4">Investment</div>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6">
                Simple packages for brands that want to move now.
              </h2>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-100 mb-8">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span className="text-[10px] font-black text-green-700 uppercase tracking-widest">ROI Guarantee Included</span>
              </div>
              <p className="text-black/50 font-medium">
                Transparent, value-based pricing. No complex retainers or hourly billing.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
              {pricingTiers.map((tier, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative p-12 rounded-[4rem] flex flex-col h-full transition-all duration-500 ${
                    tier.popular 
                      ? "bg-[#111111] text-white shadow-[0_50px_100px_rgba(0,0,0,0.25)] scale-105 z-10" 
                      : "bg-[#f6f3ee] text-[#171717] border border-black/5 hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)]"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#f4c400] text-black text-[9px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-xl">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-10">
                    <h3 className={`text-2xl font-black mb-3 tracking-tight ${tier.popular ? "text-[#f4c400]" : "text-black"}`}>
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-5xl font-black tracking-tighter">{tier.price}</span>
                      <span className={`text-[11px] font-bold uppercase tracking-widest ${tier.popular ? "text-white/30" : "text-black/20"}`}>/ project</span>
                    </div>
                  </div>

                  <p className={`text-sm font-medium mb-12 leading-relaxed ${tier.popular ? "text-white/50" : "text-black/40"}`}>
                    {tier.desc}
                  </p>

                  <div className="space-y-5 mb-14 flex-grow">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${tier.popular ? "text-[#f4c400]" : "text-black"}`} />
                        <span className={`text-sm font-bold tracking-tight ${tier.popular ? "text-white/70" : "text-black/60"}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <motion.button 
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-6 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                      tier.popular 
                        ? "bg-[#f4c400] text-black hover:bg-[#d9ab00] shadow-[0_15px_30px_rgba(244,196,0,0.3)] hover:scale-[1.02]" 
                        : "bg-[#111111] text-white hover:bg-black hover:scale-[1.02]"
                    }`}
                  >
                    {tier.cta}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 lg:py-40 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[5rem] bg-[#111111] p-16 lg:p-32 overflow-hidden text-center shadow-[0_50px_100px_rgba(0,0,0,0.3)]"
            >
              {/* Background Accents */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f4c400]/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#f4c400]/5 to-transparent pointer-events-none" />
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#f4c400]/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f4c400]/5 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 max-w-4xl mx-auto">
                <div className="text-[#f4c400] font-black uppercase tracking-[0.3em] text-[10px] mb-10">Get Started</div>
                <h2 className="text-4xl sm:text-7xl font-black text-white tracking-tight leading-[0.9] mb-10">
                  Your agency should look expensive and run on autopilot.
                </h2>
                <p className="text-xl text-white/40 font-medium mb-16 leading-relaxed max-w-2xl mx-auto">
                  Stop wasting time on manual admin and generic design. Let's build the elite automation engine your agency deserves.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-12 py-6 rounded-[1.5rem] bg-[#f4c400] text-black font-black text-base uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(244,196,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d9ab00] hover:shadow-[0_25px_50px_rgba(244,196,0,0.3)]"
                  >
                    Book Your ROI Audit
                  </motion.button>
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-12 py-6 rounded-[1.5rem] bg-white/5 border border-white/10 text-white font-black text-base uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
                  >
                    View The Method
                  </motion.button>
                </div>

                <div className="mt-24 pt-20 border-t border-white/5 flex flex-wrap justify-center gap-16">
                  <div className="text-center">
                    <div className="text-4xl font-black text-white mb-2 tracking-tighter">14 Days</div>
                    <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20">Avg. Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-white mb-2 tracking-tighter">100%</div>
                    <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20">Custom Design</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-white mb-2 tracking-tighter">24/7</div>
                    <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20">AI Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-black/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111111] text-sm font-black text-[#f4c400] shadow-lg">
                A
              </div>
              <div className="text-xl font-black tracking-tighter">ATLAS AGENCY</div>
            </div>
            
            <div className="flex gap-10 text-[9px] font-black uppercase tracking-[0.2em] text-black/30">
              <a href="#" className="hover:text-[#f4c400] transition-colors">Twitter</a>
              <a href="#" className="hover:text-[#f4c400] transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-[#f4c400] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#f4c400] transition-colors">Dribbble</a>
            </div>

            <div className="text-[9px] font-black uppercase tracking-[0.2em] text-black/10">
              © 2026 Atlas AI Automation. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
