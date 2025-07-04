import React, { useEffect, Suspense } from "react";
import HeaderGreen from "../components/HeaderGreen";
import AOS from "aos";
import "aos/dist/aos.css";
import { supabase } from "../../supabaseClient";
import {
  Code2, Paintbrush2, Puzzle, ArrowRight,
  LayoutDashboard, Layers, Zap, Star, Users, GitBranch, Database
} from "lucide-react";

export default function Homepage() {
  useEffect(() => {
    const updateMousePosition = (ev) => {
      const { clientX, clientY } = ev;
      document.documentElement.style.setProperty('--x', `${clientX}px`);
      document.documentElement.style.setProperty('--y', `${clientY}px`);
    };
    window.addEventListener('mousemove', updateMousePosition);

    const hasLoggedOut = localStorage.getItem('hasLoggedOutOnce');
    if (!hasLoggedOut) {
      const logoutOnFirstVisit = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) await supabase.auth.signOut();
        localStorage.setItem('hasLoggedOutOnce', 'true');
      };
      logoutOnFirstVisit();
    }

    AOS.init({ once: true, duration: 1000, delay: 100 });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const techStack = [
    "React", "TailwindCSS", "Figma", "Next.js", "Supabase", "Vercel", "UI/UX", "HTML", "CSS"
  ];

  return (
    <>
      <style jsx global>{`
        :root {
          --x: 50%;
          --y: 50%;
        }
        .spotlight-bg {
          background: radial-gradient(circle at var(--x) var(--y), rgba(100, 255, 218, 0.08), transparent 30%), #0a192f;
        }
      `}</style>

      <div className="min-h-screen spotlight-bg text-slate-300 font-['Inter',sans-serif] overflow-x-hidden">
        <Suspense><HeaderGreen /></Suspense>

        <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">

          {/* HERO */}
          <section className="text-center mb-32 sm:mb-40">
            <div data-aos="fade-up">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 text-slate-100 !leading-tight">
                Build Faster with <br />
                <span className="text-[#64FFDA]">Ready-to-Use Digital Resources</span>
              </h1>
              <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
                Explore a growing library of design templates, UI kits, components, and tools to accelerate your creative and development workflow.
              </p>
              <a
                href="/get-started"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#64FFDA] text-[#0a192f] font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-[#64FFDA]/20 transform hover:scale-105 group"
              >
                Browse Templates
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </section>

          {/* FEATURES */}
          <section className="mb-32 sm:mb-40">
            <h2 className="text-4xl font-bold text-center text-slate-100 mb-12" data-aos="fade-up">What You'll Get</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              <div data-aos="fade-up" className="group relative p-8 col-span-1 lg:col-span-2 rounded-2xl bg-slate-800/50 border border-slate-700 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#64FFDA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <Paintbrush2 className="w-12 h-12 text-[#64FFDA] mb-5" />
                  <h3 className="text-2xl text-slate-100 font-semibold mb-3">Stylish Landing Pages</h3>
                  <p className="text-slate-400 leading-relaxed">Visually rich and responsive landing pages built for modern brands and startups.</p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="100" className="group relative p-8 rounded-2xl bg-slate-800/50 border border-slate-700 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#64FFDA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <Zap className="w-12 h-12 text-[#64FFDA] mb-5" />
                  <h3 className="text-2xl text-slate-100 font-semibold mb-3">Responsive Layouts</h3>
                  <p className="text-slate-400">Pre-built screens optimized for mobile and desktop. Drop them into any project with ease.</p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="200" className="group relative p-8 rounded-2xl bg-slate-800/50 border border-slate-700 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#64FFDA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <Layers className="w-12 h-12 text-[#64FFDA] mb-5" />
                  <h3 className="text-2xl text-slate-100 font-semibold mb-3">Modular Components</h3>
                  <p className="text-slate-400">Get reusable UI parts that work seamlessly with TailwindCSS or plain CSS.</p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="300" className="group relative p-8 col-span-1 lg:col-span-2 rounded-2xl bg-slate-800/50 border border-slate-700 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#64FFDA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <Code2 className="w-12 h-12 text-[#64FFDA] mb-5" />
                  <h3 className="text-2xl text-slate-100 font-semibold mb-3">Developer-Ready Code</h3>
                  <p className="text-slate-400 leading-relaxed">Copy, paste, and launch. Each layout is clean, well-commented, and production friendly.</p>
                </div>
              </div>

            </div>
          </section>

          {/* SCROLLING TICKER */}
          <section className="relative w-full overflow-hidden bg-slate-800/30 py-4 my-24 sm:my-32 border-y border-slate-700" data-aos="zoom-in">
            <div className="flex animate-infinite-scroll group-hover:pause">
              {techStack.concat(techStack).map((tech, index) => {
                const iconMap = {
                  "React": <LayoutDashboard className="w-5 h-5 text-[#64FFDA] mr-3" />,
                  "TailwindCSS": <Paintbrush2 className="w-5 h-5 text-[#64FFDA] mr-3" />,
                  "Figma": <Puzzle className="w-5 h-5 text-[#64FFDA] mr-3" />,
                  "Next.js": <Code2 className="w-5 h-5 text-[#64FFDA] mr-3" />,
                  "Supabase": <Database className="w-5 h-5 text-[#64FFDA] mr-3" />,
                  "Vercel": <Zap className="w-5 h-5 text-[#64FFDA] mr-3" />,
                  "UI/UX": <Users className="w-5 h-5 text-[#64FFDA] mr-3" />,
                  "HTML": <Code2 className="w-5 h-5 text-[#64FFDA] mr-3" />,
                  "CSS": <Paintbrush2 className="w-5 h-5 text-[#64FFDA] mr-3" />
                };
                return (
                  <div key={index} className="flex items-center mx-6">
                    {iconMap[tech] || <Star className="w-5 h-5 text-[#64FFDA] mr-3" />}
                    <span className="text-lg font-medium text-slate-300 whitespace-nowrap">{tech}</span>
                  </div>
                );
              })}
            </div>
            <style jsx>{`
              @keyframes infinite-scroll {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
              .animate-infinite-scroll {
                display: flex;
                width: calc(2 * ${techStack.length * 150}px);
                animation: infinite-scroll 40s linear infinite;
              }
              .group-hover\\:pause:hover {
                animation-play-state: paused;
              }
            `}</style>
          </section>

          {/* CTA */}
          <div
            className="bg-slate-800 mt-28 py-16 px-8 rounded-3xl text-center border border-slate-700 shadow-2xl"
            data-aos="zoom-in-up"
          >
            <GitBranch className="w-16 h-16 text-[#64FFDA] mx-auto mb-6 animate-pulse" />
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
              Ship Projects Faster
            </h3>
            <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
              Get high-quality screen designs and landing pages that save time and help you focus on building.
            </p>
            <a
              href="/get-started"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#64FFDA] text-[#0a192f] font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-[#64FFDA]/20 transform hover:scale-105 group"
            >
              Browse Screens
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <footer className="mt-32 text-center text-slate-500 text-sm">
            <p className="mb-2">🚀 Powered by the CodeCanverse Team © {new Date().getFullYear()}</p>
            <p>Your launchpad for developer-friendly designs.</p>
          </footer>
        </main>
      </div>
    </>
  );
}
