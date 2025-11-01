import Link from "next/link";
import Image from "next/image";
import logo from "@/public/website_logo.png";

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-24 py-16 sm:py-24">
    <div className="mx-auto max-w-5xl px-6">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">{title}</h2>
      <div className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed">
        {children}
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 font-sans">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-gray-900">
          <Image
            src={logo}
            alt="Project Logo"
            width={36}
            height={36}
            className="rounded-sm"
          />
          RPi Companion Computer
        </Link>

          <nav className="hidden gap-6 text-sm sm:flex text-gray-700">
            <a href="#overview" className="hover:text-sky-600 transition-colors">Overview</a>
            <a href="#specs" className="hover:text-sky-600 transition-colors">Interfaces</a>
            <a href="#risk" className="hover:text-sky-600 transition-colors">Risks</a>
            <a href="#team" className="hover:text-sky-600 transition-colors">Team</a>
            <a href="#partner" className="hover:text-sky-600 transition-colors">Partner</a>
            <a href="#contact" className="hover:text-sky-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_40rem_at_top,rgba(56,189,248,0.2),transparent)]" />
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-[10px] sm:text-xs uppercase tracking-widest inline-flex items-center gap-2 rounded-full bg-sky-100 text-sky-700 ring-1 ring-sky-300 px-2 py-1">UCSB CE Capstone × AeroVironment</p>
            <h1 className="mt-3 flex items-center gap-3 text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900">
              <Image
                src={logo}
                alt="Project Logo"
                width={100}
                height={100}
                className="inline-block rounded-sm"
                unoptimized
              />
              AeroVironment Integrated RPi Companion Computer
            </h1>
            <p className="mt-4 text-gray-700 text-base sm:text-lg">
              A custom carrier board that mates a Raspberry Pi Compute Module 5 with AV's Varmint flight controller — simple, robust, and open-source.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#overview" className="rounded-full bg-sky-600 text-white px-5 py-2 text-sm font-medium shadow-sm hover:bg-sky-700 transition-colors">Explore</a>
              <a href="#contact" className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </section>

      <Section id="overview" title="Abstract">
        <p>
          We are building a companion board to interface a Raspberry Pi Compute Module 5 (CM5) with AeroVironment's flight controller. The CM5 replaces a costlier Jetson Orin NX while keeping essential I/O and performance. To validate the design, we'll integrate ROSflight and demonstrate control of an airborne drone.
        </p>
      </Section>

      <Section id="specs" title="External Behavior & Interfaces">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Connection to AV Varmint Flight Controller via SODIMM edge: SPI, I2C, UART, USB 2.0/3.0, GbE, and GPIO routed with attention to signal integrity.
          </li>
          <li>
            Direct CM5 support: offload compute, adapt RPi pinout in place of Jetson Orin NX.
          </li>
          <li>
            External peripherals: MIPI cameras, HDMI display, and USB devices connected to the CM5 (not the FC).
          </li>
          <li>
            ROSflight integration on Linux/ROS for control and telemetry.
          </li>
          <li>
            Power module: step down 12 V from the FC to a stable 5 V rail for the CM5 and peripherals.
          </li>
        </ul>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-gray-200 p-6 bg-white">
            <h3 className="text-lg font-medium text-gray-900">Annotated Block Diagram</h3>
            <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/rpi-capstone-website/block_diagram.svg"
                  alt="System block diagram showing CM5, power, AV flight controller, and external peripherals."
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain p-4"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 p-6 bg-white">
            <h3 className="text-lg font-medium text-gray-900">Goals</h3>
            <p className="mt-3 text-sm sm:text-base text-gray-700">
              Stable high‑speed routing, clean power, and a public demo: ROSflight controlling a drone while the CM5 handles compute tasks like data collection or lightweight AI inference.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-sky-50 text-gray-900 p-3">SODIMM form‑factor</div>
              <div className="rounded-lg bg-sky-50 text-gray-900 p-3">Signal integrity</div>
              <div className="rounded-lg bg-sky-50 text-gray-900 p-3">Open‑source design</div>
              <div className="rounded-lg bg-sky-50 text-gray-900 p-3">ROSflight demo</div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="risk" title="Risk Analysis">
        <ul className="list-disc pl-5 space-y-2">
          <li>Reliable routing for high‑speed signals with minimal EMI and solid return paths.</li>
          <li>Mechanical fit within flight controller constraints and SODIMM connector tolerances.</li>
          <li>Thermal management for CM5 with cooler while maintaining compact layout.</li>
          <li>Demonstration complexity: integrate ROSflight and prove end‑to‑end control on a drone.</li>
        </ul>
      </Section>

      <Section id="team" title="Team">
        <p className="font-medium text-gray-900">Loren Ashfield • David Chang • Zachary Duckering • Vishal Seenivasan • Adit Suman</p>
      </Section>

      <Section id="partner" title="Partner">
        <p>
          In partnership with AeroVironment, Inc. (Moorpark, CA). Project lead: Phil Tokumaru (<a className="underline hover:no-underline text-sky-600 hover:text-sky-700" href="mailto:tokumaru@avinc.com">tokumaru@avinc.com</a>).
        </p>
        <p className="mt-4">AeroVironment is a global leader in unmanned systems. Learn more at <a className="underline hover:no-underline text-sky-600 hover:text-sky-700" href="https://www.avinc.com" target="_blank" rel="noreferrer">www.avinc.com</a>.</p>
      </Section>

      <Section id="contact" title="Get in touch">
        <p>
          Questions, collaboration, or feedback? Reach out to the team via email or open an issue in our repo.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="mailto:lashfield@ucsb.edu" className="rounded-full bg-gray-900 text-white px-5 py-2 text-sm font-medium hover:bg-gray-800 transition-colors">Email</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors">GitHub</a>
        </div>
      </Section>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-600">
          © {new Date().getFullYear()} RPi Companion Computer — Open Source
        </div>
      </footer>
    </div>
  );
}
