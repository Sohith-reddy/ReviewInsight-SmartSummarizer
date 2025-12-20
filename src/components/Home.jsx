import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full pt-14 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 transition-all duration-500 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-400/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative isolate px-6 pt-14 lg:px-8 z-10">
        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40 lg:pt-14">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center animate-fade-in-up">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-gray-100/10 hover:ring-gray-900/20 dark:hover:ring-gray-100/20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              Smart Review Summarizer is now live!{" "}
              <Link
                to="/features"
                className="font-semibold text-indigo-600 dark:text-indigo-400"
              >
                <span aria-hidden="true" className="absolute inset-0" />
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent sm:text-6xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              AI-Powered Product Review Summarizer
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Get instant, clear insights from thousands of product reviews. Our
              AI summarizes opinions, extracts pros & cons, analyzes sentiment,
              and highlights key features, so you can make smarter buying
              decisions.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/features"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-indigo-500/30"
              >
                Get Started
              </Link>
              <Link
                to="/features"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn how it works <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0; /* Start hidden */
        }
      `}</style>
    </div>
  );
}
