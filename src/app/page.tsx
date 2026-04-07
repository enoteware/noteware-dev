import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans text-zinc-900 dark:text-zinc-100">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
            <span className="text-white dark:text-black font-bold text-lg italic">n</span>
          </div>
          <span className="text-xl font-bold tracking-tight">noteware.dev</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#work" className="hover:text-zinc-500 transition-colors">Work</a>
          <a href="#about" className="hover:text-zinc-500 transition-colors">About</a>
          <a href="https://styles.noteware.dev" className="hover:text-zinc-500 transition-colors">Design Picker</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 max-w-7xl mx-auto px-6 pt-20 pb-32 w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
            Build products that matter, <br />
            <span className="text-zinc-400 dark:text-zinc-600">powered by senior craft and AI.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed">
            Noteware Digital Solutions is an AI-native studio for high-growth founders. We partner with you to go from zero to full product, handling design, engineering, and automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:dev@notewaredigital.com"
              className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold text-lg hover:opacity-90 transition-opacity text-center"
            >
              Start a Project
            </a>
            <a 
              href="https://styles.noteware.dev"
              className="px-8 py-4 border border-zinc-200 dark:border-zinc-800 rounded-full font-semibold text-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-center"
            >
              Explore Design Styles
            </a>
          </div>
        </div>

        {/* Featured Case Study: Natural Catch */}
        <section id="work" className="mt-40">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">Flagship Partner</h2>
              <h3 className="text-4xl font-bold tracking-tight">Natural Catch Seafoods</h3>
            </div>
            <p className="max-w-md text-zinc-600 dark:text-zinc-400 text-lg">
              End-to-end brand transformation and e-commerce infrastructure for a premium seafood brand.
            </p>
          </div>
          
          <div className="relative group overflow-hidden rounded-3xl bg-zinc-200 dark:bg-zinc-900 aspect-[16/9] md:aspect-[21/9]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <div className="absolute bottom-10 left-10 z-20 text-white max-w-lg">
              <p className="text-lg font-medium opacity-80 mb-2">Shopify • Klaviyo • AI Insights</p>
              <h4 className="text-3xl font-bold">Scaling a premier brand with intelligent systems.</h4>
            </div>
            {/* Placeholder for actual showcase image */}
            <div className="w-full h-full flex items-center justify-center text-zinc-400 text-sm font-mono italic">
              [ Case Study Showcase: NC Flagship Site ]
            </div>
          </div>
        </section>

        {/* Studio Philosophy */}
        <section id="about" className="mt-40 grid md:grid-grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Built for speed, <br />scaled with intelligence.</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              We don't just write code. We build integrated systems that run your business. From the first brand foundation to automated operations, we're your technical and strategic partners.
            </p>
            <ul className="space-y-4 font-medium">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white"></span>
                AI-Driven Product Engineering
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white"></span>
                E-commerce Infrastructure (Shopify + Klaviyo)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white"></span>
                Custom Business Intelligence & Automation
              </li>
            </ul>
          </div>
          <div className="bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-10 flex flex-col justify-between">
            <blockquote className="text-2xl font-medium leading-relaxed italic text-zinc-700 dark:text-zinc-300">
              "Noteware isn't just a dev shop. They're part of the team, building the tools that actually drive our growth."
            </blockquote>
            <div className="mt-10">
              <p className="font-bold">Natural Catch Team</p>
              <p className="text-zinc-500 text-sm">Long-term Strategic Partner</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-zinc-500">© 2026 Noteware Digital Solutions. All rights reserved.</p>
          <div className="flex gap-8 text-sm font-medium">
            <a href="mailto:dev@notewaredigital.com" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
            <a href="https://github.com/enoteware" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a>
            <a href="https://app.noteware.dev" className="hover:text-black dark:hover:text-white transition-colors">Client Login</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
