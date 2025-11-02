# AeroVironment Integrated RPi Companion Computer

A custom carrier board interfacing a Raspberry Pi Compute Module 5 with AeroVironment's Varmint flight controller — designed for autonomous drone operations.

## Project Overview

This UCSB Computer Engineering capstone project replaces a costlier Jetson Orin NX with a Raspberry Pi CM5 while maintaining essential I/O and performance capabilities. The companion board features:

- **SODIMM edge connection** with SPI, I2C, UART, USB 2.0/3.0, GbE, and GPIO routing
- **Power management** with 12V to 5V DC-DC conversion
- **Peripheral support** for MIPI cameras, HDMI display, and USB devices
- **ROSflight integration** for autonomous control and telemetry
- **Open-source design** with full hardware and software documentation

## Team

**UCSB Computer Engineering Capstone (2025-2026)**

- Loren Ashfield - Project Lead
- David Chang - Hardware Engineer
- Zachary Duckering - Software Engineer
- Vishal Seenivasan - Systems Engineer
- Adit Suman - Embedded Engineer

**Industry Partner:** AeroVironment, Inc. (Moorpark, CA)  
**Lead:** Phil Tokumaru (tokumaru@avinc.com)

## Development

This is a Next.js website showcasing the project details and progress.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website locally.

## Contact

**Email:** lashfield@ucsb.edu  
**Website:** [https://lorenashfield.github.io/rpi-capstone-website](https://lorenashfield.github.io/rpi-capstone-website)

---

*Built with Next.js, TypeScript, and Tailwind CSS*
