import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 shadow-lg backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide text-white">
            My<span className="text-cyan-400">Website</span>
          </div>

          {/* Navigation */}
          <ol className="hidden items-center gap-8 md:flex">
            <li>
              <a
                href="#home"
                className="text-sm font-medium text-gray-300 transition hover:text-cyan-400"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="text-sm font-medium text-gray-300 transition hover:text-cyan-400"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="text-sm font-medium text-gray-300 transition hover:text-cyan-400"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-sm font-medium text-gray-300 transition hover:text-cyan-400"
              >
                Contact Us
              </a>
            </li>

            {/* Login Button */}
            <li>
              <a
                href="/login"
                className="rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 hover:shadow-cyan-400/30"
              >
                Login
              </a>
            </li>
          </ol>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg border border-white/10 p-2 text-gray-300 transition hover:bg-white/10 md:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>

        </div>
      </nav>

      <section
        id="center"
        className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white"
      >
        <div className="max-w-6xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Automated CI/CD Pipeline
          </div>

          {/* Hero Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Build. Test. Deploy.
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400">
              Faster with CI/CD
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-slate-300 leading-relaxed">
            Automate your software delivery pipeline with continuous integration
            and continuous deployment. Build reliable applications, run automated
            tests, and deploy to production with confidence.
          </p>

          {/* Pipeline */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-3 md:gap-5">

            <div className="px-5 py-3 rounded-xl bg-slate-800 border border-slate-700 shadow-lg">
              <span className="text-blue-400 font-semibold">Git Push</span>
            </div>

            <span className="text-slate-500 text-xl">→</span>

            <div className="px-5 py-3 rounded-xl bg-slate-800 border border-slate-700 shadow-lg">
              <span className="text-orange-400 font-semibold">Build</span>
            </div>

            <span className="text-slate-500 text-xl">→</span>

            <div className="px-5 py-3 rounded-xl bg-slate-800 border border-slate-700 shadow-lg">
              <span className="text-yellow-400 font-semibold">Test</span>
            </div>

            <span className="text-slate-500 text-xl">→</span>

            <div className="px-5 py-3 rounded-xl bg-slate-800 border border-slate-700 shadow-lg">
              <span className="text-purple-400 font-semibold">Deploy</span>
            </div>

            <span className="text-slate-500 text-xl">→</span>

            <div className="px-5 py-3 rounded-xl bg-slate-800 border border-slate-700 shadow-lg">
              <span className="text-green-400 font-semibold">Production</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              type="button"
              className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all duration-300 font-semibold shadow-lg shadow-blue-600/25"
            >
              Get Started
            </button>

            <button
              type="button"
              className="px-7 py-3 rounded-xl border border-slate-600 bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 font-semibold"
            >
              View Pipeline
            </button>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold">Automated Builds</h3>
              <p className="mt-2 text-sm text-slate-400">
                Automatically build your application whenever new code is pushed.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-3xl mb-3">🧪</div>
              <h3 className="text-lg font-bold">Continuous Testing</h3>
              <p className="mt-2 text-sm text-slate-400">
                Run automated tests to catch issues before they reach production.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold">Fast Deployment</h3>
              <p className="mt-2 text-sm text-slate-400">
                Deploy tested applications quickly and consistently across environments.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default App
