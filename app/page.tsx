"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/website_logo.png";
import { useState, useEffect } from "react";


const Section = ({ id, title, children, className = "" }: { id: string; title: string; children: React.ReactNode; className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(id);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [id]);

  return (
    <section id={id} className={`scroll-mt-24 py-8 sm:py-12 ${className}`}>
      <div className="mx-auto max-w-5xl px-6">
        <h2 className={`text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {title}
        </h2>
        <div className={`mt-4 text-gray-700 text-base sm:text-lg leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 font-sans">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.1),transparent_50%)] animate-pulse" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl animate-bounce" style={{animationDuration: '8s'}} />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-sky-200/20 to-indigo-200/20 rounded-full blur-3xl animate-bounce" style={{animationDuration: '10s', animationDelay: '2s'}} />
      </div>

      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-xl shadow-lg shadow-gray-100/50">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-gray-900 hover:scale-105 transition-transform">
            <Image
              src={logo}
              alt="Project Logo"
              width={36}
              height={36}
              className="rounded-sm shadow-sm"
            />
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              RPi Companion Computer
            </span>
          </Link>

          <nav className="hidden gap-6 text-sm sm:flex text-gray-700">
            {[
              { href: "#overview", label: "Overview" },
              { href: "#specs", label: "Interfaces" },
              { href: "#risk", label: "Risks" },
              { href: "#team", label: "Team" },
              { href: "#partner", label: "Partner" },
              { href: "#contact", label: "Contact" }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative hover:text-sky-600 transition-all duration-300 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-sky-500 before:to-blue-500 before:transition-all before:duration-300 hover:before:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-transparent to-blue-50/50" />
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16 w-full">
          <div className="max-w-4xl">
            <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-xs uppercase tracking-widest inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-100 to-blue-100 text-sky-700 ring-1 ring-sky-200 px-4 py-2 shadow-sm font-medium">
                <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
                UCSB CE Capstone × AeroVironment
              </p>
            </div>

            <div className={`mt-6 transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="flex items-center gap-4 text-4xl sm:text-6xl font-bold tracking-tight">
                <div className="relative">
                  <Image
                    src={logo}
                    alt="Project Logo"
                    width={120}
                    height={120}
                    className="inline-block rounded-lg shadow-xl ring-4 ring-white/50 hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-40 transition-opacity"></div>
                </div>
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent leading-tight">
                  AeroVironment
                  <br />
                  <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                    Integrated RPi
                  </span>
                  <br />
                  Companion Computer
                </span>
              </h1>
            </div>

            <div className={`mt-6 transition-all duration-1000 delay-400 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl">
                A custom carrier board that mates a Raspberry Pi Compute Module 5 with AV's Varmint flight controller — simple, robust, and open-source.
              </p>
            </div>

            <div className={`mt-10 flex flex-wrap gap-4 transition-all duration-1000 delay-600 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a href="#overview" className="group relative rounded-full bg-gradient-to-r from-sky-600 to-blue-600 text-white px-8 py-3 text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Explore Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="#contact" className="group rounded-full border-2 border-gray-300 px-8 py-3 text-sm font-semibold text-gray-700 hover:border-sky-400 hover:text-sky-600 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">
                <span className="flex items-center gap-2">
                  Get in Touch
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 right-10 w-20 h-20 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 rounded-full blur-xl animate-bounce" style={{animationDuration: '6s'}} />
        <div className="absolute bottom-1/4 left-10 w-16 h-16 bg-gradient-to-r from-sky-200/30 to-indigo-200/30 rounded-full blur-xl animate-bounce" style={{animationDuration: '8s', animationDelay: '1s'}} />
      </section>

      <Section id="overview" title="Abstract">
        <p>
          We are building a companion board to interface a Raspberry Pi Compute Module 5 (CM5) with AeroVironment's flight controller. The CM5 replaces a costlier Jetson Orin NX while keeping essential I/O and performance. To validate the design, we'll integrate ROSflight and demonstrate control of an airborne drone.
        </p>
      </Section>

      <Section id="specs" title="External Behavior & Interfaces" className="bg-gradient-to-br from-gray-50/50 to-blue-50/30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            {
              icon: "🔗",
              title: "Flight Controller Integration",
              desc: "SODIMM edge connection with SPI, I2C, UART, USB 2.0/3.0, GbE, and GPIO routing for optimal signal integrity."
            },
            {
              icon: "🖥️",
              title: "CM5 Support",
              desc: "Direct compute offloading with RPi pinout adaptation replacing Jetson Orin NX requirements."
            },
            {
              icon: "📷",
              title: "Peripheral Interfaces",
              desc: "MIPI cameras, HDMI display, and USB devices connected exclusively to the CM5."
            },
            {
              icon: "🚀",
              title: "ROSflight Integration",
              desc: "Linux/ROS-based control and telemetry system for autonomous drone operations."
            },
            {
              icon: "⚡",
              title: "Power Management",
              desc: "12V to 5V DC-DC conversion providing stable power rails for CM5 and peripherals."
            },
            {
              icon: "🔧",
              title: "Open-Source Design",
              desc: "Fully documented hardware and software for community collaboration and improvement."
            }
          ].map((item, index) => (
            <div key={index} className="group relative rounded-3xl border border-gray-200/60 bg-white/90 backdrop-blur-sm p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50/20 to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-sky-700 transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="group relative rounded-3xl border border-gray-200/60 bg-white/90 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50/20 to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-sky-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">📊</span>
                System Architecture
              </h3>
              <div className="overflow-hidden rounded-xl border border-gray-200/60 bg-gray-50/80 shadow-inner">
                <div className="relative aspect-[16/9] group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/rpi-capstone-website/block_diagram.svg"
                    alt="System block diagram showing CM5, power, AV flight controller, and external peripherals."
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain p-6"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="group relative rounded-3xl border border-gray-200/60 bg-white/90 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/20 to-teal-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">🎯</span>
                Project Objectives
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Achieving stable high-speed signal routing, clean power delivery, and successful ROSflight integration for autonomous drone control with CM5 handling compute-intensive tasks.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "SODIMM Form-Factor", color: "from-amber-400 to-orange-500" },
                  { label: "Signal Integrity", color: "from-blue-400 to-cyan-500" },
                  { label: "Open-Source", color: "from-green-400 to-emerald-500" },
                  { label: "ROSflight Demo", color: "from-purple-400 to-pink-500" }
                ].map((goal, index) => (
                  <div key={index} className={`relative rounded-xl bg-gradient-to-r ${goal.color} p-4 text-white font-medium text-sm text-center shadow-lg hover:scale-105 transition-all duration-300 group/item`}>
                    <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">{goal.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="risk" title="Risk Analysis" className="bg-gradient-to-br from-amber-50/30 to-red-50/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              level: "High",
              title: "Signal Integrity",
              desc: "Reliable routing for high-speed signals with minimal EMI and solid return paths.",
              mitigation: "PCB design with controlled impedance traces and proper grounding techniques."
            },
            {
              level: "Medium",
              title: "Mechanical Fit",
              desc: "SODIMM connector tolerances and flight controller integration constraints.",
              mitigation: "3D modeling and iterative prototyping with AeroVironment specifications."
            },
            {
              level: "Medium",
              title: "Thermal Management",
              desc: "CM5 thermal performance while maintaining compact form factor.",
              mitigation: "Heat sink integration and airflow analysis within flight controller enclosure."
            },
            {
              level: "High",
              title: "System Integration",
              desc: "ROSflight integration and end-to-end drone control demonstration.",
              mitigation: "Modular testing approach and collaboration with AeroVironment team."
            }
          ].map((risk, index) => (
            <div key={index} className="group relative rounded-2xl border border-gray-200/60 bg-white/90 backdrop-blur-sm p-6 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-gray-50/0 group-hover:from-white/50 group-hover:to-gray-50/50 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    risk.level === 'High'
                      ? 'bg-red-100 text-red-700 border border-red-200'
                      : 'bg-amber-100 text-amber-700 border border-amber-200'
                  }`}>
                    {risk.level} Risk
                  </span>
                  <span className="text-2xl">⚠️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">{risk.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{risk.desc}</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs font-medium text-gray-500 mb-1">MITIGATION STRATEGY</p>
                  <p className="text-sm text-gray-700">{risk.mitigation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="team" title="Meet the Team" className="bg-gradient-to-br from-indigo-50/30 to-purple-50/20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Loren Ashfield", role: "Project Lead", emoji: "👨‍💻" },
            { name: "David Chang", role: "Hardware Engineer", emoji: "🔧" },
            { name: "Zachary Duckering", role: "Software Engineer", emoji: "💻" },
            { name: "Vishal Seenivasan", role: "Systems Engineer", emoji: "🚀" },
            { name: "Adit Suman", role: "Embedded Engineer", emoji: "⚙️" }
          ].map((member, index) => (
            <div key={index} className="group relative rounded-2xl border border-gray-200/60 bg-white/90 backdrop-blur-sm p-6 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-purple-50/0 group-hover:from-indigo-50/50 group-hover:to-purple-50/30 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {member.emoji}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-indigo-700 transition-colors">{member.name}</h3>
                <p className="text-sm text-gray-600 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">UCSB Computer Engineering Capstone Project</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full border border-indigo-200">
            <span className="text-sm font-medium text-indigo-700">2025 - 2026</span>
          </div>
        </div>
      </Section>

      <Section id="partner" title="Industry Partner" className="bg-gradient-to-br from-emerald-50/30 to-teal-50/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl border border-emerald-200 mb-6">
              <span className="text-2xl">🏢</span>
              <span className="text-lg font-semibold text-emerald-700">AeroVironment, Inc.</span>
            </div>
            <p className="text-gray-600 text-lg">Global leader in unmanned aerial systems and autonomous technologies</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group relative rounded-3xl border border-gray-200/60 bg-white/90 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/20 to-teal-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">👔</span>
                  Project Leadership
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700"><span className="font-medium">Location:</span> Moorpark, California</p>
                  <p className="text-gray-700"><span className="font-medium">Lead:</span> Phil Tokumaru</p>
                  <a
                    href="mailto:tokumaru@avinc.com"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <span>📧</span>
                    tokumaru@avinc.com
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative rounded-3xl border border-gray-200/60 bg-white/90 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-cyan-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">🌐</span>
                  Company Overview
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  AeroVironment pioneers unmanned aircraft systems for both military and commercial applications, delivering innovative solutions for reconnaissance, surveillance, and autonomous operations.
                </p>
                <a
                  href="https://www.avinc.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border-2 border-blue-500 text-blue-600 rounded-lg font-medium hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                >
                  <span>🔗</span>
                  Visit Website
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Get in Touch" className="bg-gradient-to-br from-rose-50/30 to-pink-50/20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl border border-rose-200 mb-6">
              <span className="text-2xl">💬</span>
              <span className="text-lg font-semibold text-rose-700">Let's Connect</span>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Have questions about the project? Interested in collaboration or feedback?
              We'd love to hear from you!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:lashfield@ucsb.edu"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="text-xl">📧</span>
              <span>Email the Team</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="https://github.com/lorenashfield/rpi-capstone-website"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold hover:border-gray-400 hover:bg-gray-50 hover:scale-105 transition-all duration-300"
            >
              <span className="text-xl">🐙</span>
              <span>View on GitHub</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>Located at UC Santa Barbara • Electrical and Computer Engineering Department</p>
          </div>
        </div>
      </Section>

      <footer className="relative border-t border-gray-200/60 bg-gradient-to-br from-white via-gray-50/50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.05),transparent_70%)]"></div>
        <div className="relative mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="Project Logo"
                width={32}
                height={32}
                className="rounded-sm"
              />
              <span className="text-sm font-medium text-gray-700">RPi Companion Computer Project</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <span>© {new Date().getFullYear()} UCSB CE Capstone Team</span>
              <span className="hidden md:inline">•</span>
              <span>Loren Ashfield • David Chang • Zachary Duckering • Vishal Seenivasan • Adit Suman</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
            <div className="flex items-center gap-4">
              <span>In partnership with AeroVironment</span>
              <span>•</span>
              <span>Open-source and MIT licensed</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
