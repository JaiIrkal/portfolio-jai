"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import {
    ArrowRight,
    Briefcase,
    BriefcaseBusiness,
    Cloud,
    Download,
    ExternalLink,
    FolderKanban,
    GitBranch,
    Globe,
    Mail,
    MapPin,
    Menu,
    Sparkles,
    X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";

const fadeInUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
};

const socialIconMap = {
    github: GitHubIcon,
    linkedin: LinkedInIcon,
    x: Globe,
};

const marqueeSkills = [...portfolioData.expertise, ...portfolioData.expertise];

function GitHubIcon(props: React.ComponentPropsWithoutRef<"svg">) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M12 2C6.477 2 2 6.582 2 12.235c0 4.51 2.865 8.324 6.839 9.678.5.093.683-.216.683-.482 0-.237-.009-1.03-.014-1.88-2.782.606-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.607.069-.607 1.003.072 1.533 1.031 1.533 1.031.892 1.531 2.339 1.088 2.912.833.091-.648.35-1.088.636-1.338-2.221-.253-4.555-1.115-4.555-4.968 0-1.098.391-1.997 1.03-2.699-.103-.252-.447-1.273.098-2.66 0 0 .84-.269 2.75 1.025A9.397 9.397 0 0 1 12 6.896c.851.004 1.708.115 2.507.338 1.91-1.294 2.747-1.025 2.747-1.025.548 1.387.204 2.408.1 2.66.642.702 1.027 1.601 1.027 2.699 0 3.864-2.338 4.712-4.567 4.961.358.308.678.913.678 1.844 0 1.331-.012 2.404-.012 2.73 0 .267.181.576.689.479C19.141 20.556 22 16.743 22 12.235 22 6.582 17.523 2 12 2Z" />
        </svg>
    );
}

function LinkedInIcon(props: React.ComponentPropsWithoutRef<"svg">) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.39a1.56 1.56 0 0 1 0 3.11Zm-1.44 1.25h2.88v8.75H5.5V9.75Zm4.72 0h2.76v1.2h.04c.39-.73 1.34-1.5 2.76-1.5 2.94 0 3.48 1.93 3.48 4.43v3.62h-2.88v-3.38c0-1.01-.02-2.31-1.41-2.31-1.42 0-1.64 1.11-1.64 2.24v3.45h-2.88V9.75Z" />
        </svg>
    );
}

function StatIcon({ type }: { type: "experience" | "projects" | "cloud" }) {
    const commonClassName = "h-5 w-5 stroke-[2]";

    if (type === "experience") {
        return <BriefcaseBusiness className={commonClassName} aria-hidden="true" />;
    }

    if (type === "projects") {
        return <FolderKanban className={commonClassName} aria-hidden="true" />;
    }

    return <Cloud className={commonClassName} aria-hidden="true" />;
}

function SectionHeading({
    eyebrow,
    title,
    description,
}: {
    eyebrow: string;
    title: string;
    description: string;
}) {
    return (
        <div style={{ marginBottom: 28 }}>
            <Badge variant="secondary" className="mb-4">
                {eyebrow}
            </Badge>
            <h2 className="max-w-2xl text-3xl font-black uppercase tracking-[-0.06em] text-[#111111] sm:text-4xl">
                {title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#2f2a26]">{description}</p>
        </div>
    );
}

export function PortfolioPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <div className="relative overflow-hidden bg-[#ece7df] text-[#111111]">
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(#111111_1px,transparent_1px),linear-gradient(90deg,#111111_1px,transparent_1px)] bg-[size:28px_28px] opacity-10" />
            </div>

            <header className="sticky top-0 z-50 border-b-2 border-black bg-[#f6f3ee]/95 backdrop-blur-sm">
                <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">

                    {/* Logo */}
                    <a
                        href="#top"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex min-w-0 items-center gap-3 text-sm font-black uppercase tracking-[0.18em] text-[#111111]"
                    >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-black bg-[#111111] text-xs font-black text-[#f6f3ee]">
                            {portfolioData.name
                                .split(" ")
                                .map((part) => part[0])
                                .join("")
                                .slice(0, 2)}
                        </span>

                        <span className="truncate">
                            {portfolioData.name}
                        </span>
                    </a>

                    {/* Desktop navigation */}
                    <nav className="hidden items-center gap-8 text-xs font-black uppercase tracking-[0.12em] text-[#111111] md:flex">
                        {portfolioData.nav.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="transition hover:-translate-y-px"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <Button
                        asChild
                        size="sm"
                        className="hidden md:inline-flex"
                    >
                        <a href="#contact">
                            Let&apos;s talk
                        </a>
                    </Button>

                    {/* Desktop CTA */}
                    <Button
                        asChild
                        size="sm"
                        className="hidden md:inline-flex"
                    >
                        <a href="/resume" download>
                            <Download className="h-4 w-4" />
                            Download Resume
                        </a>
                    </Button>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen((open) => !open)}
                        className="
                flex h-10 w-10
                items-center justify-center
                border-2 border-black
                bg-[#111111]
                text-[#f6f3ee]
                transition
                hover:translate-x-[-1px]
                hover:translate-y-[-1px]

                md:hidden
            "
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>

                {/* Mobile navigation */}
                <div
                    className={`
            overflow-hidden
            border-t-2
            border-black
            bg-[#f6f3ee]
            transition-all
            duration-300
            md:hidden

            ${mobileMenuOpen
                            ? "max-h-[400px] opacity-100"
                            : "max-h-0 border-t-0 opacity-0"
                        }
        `}
                >
                    <nav className="flex flex-col px-5 py-4 sm:px-6">
                        {portfolioData.nav.map((item, index) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="
                        flex
                        items-center
                        justify-between
                        border-b-2
                        border-black
                        py-4
                        text-sm
                        font-black
                        uppercase
                        tracking-[0.12em]
                        text-[#111111]
                    "
                            >
                                <span>{item.label}</span>

                                <ArrowRight className="h-4 w-4" />
                            </a>
                        ))}

                        <Button
                            asChild
                            size="lg"
                            className="mt-4 w-full"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <a href="#contact">
                                Let&apos;s talk
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            className="mt-4 w-full"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <a href="/resume" download>
                                <Download className="h-4 w-4" />
                                Download Resume
                            </a>
                        </Button>
                    </nav>
                </div>
            </header>

            <main
                id="top"
                className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-8 sm:px-6 lg:px-8 lg:pt-12"
            >
                <motion.section
                    className="grid items-center gap-14 overflow-visible py-10 sm:py-14 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:py-20"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.div
                        className="relative w-full"
                        variants={{
                            hidden: { opacity: 0, x: 30 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 0.15,
                        }}
                    >
                        <div className="relative h-[650px] w-full max-w-[500px] left-180">

                            {/* Background cards stack - lower z-index */}
                            <motion.div
                                className="absolute md:right-[100px] lg:right-[-62px] z-40 w-48 rotate-[-15deg] border-2 border-black bg-[#f6f3ee] p-4 shadow-[8px_8px_0_0_#111111] sm:w-56"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#111111]">Experience</p>
                                <p className="mt-2 text-3xl font-black leading-none tracking-[-0.08em] text-[#111111]">2+</p>
                                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#2f2a26]">Years</p>
                            </motion.div>

                            <motion.div
                                className="absolute md:right-[500px] md:z-[40] lg:left-[-870px] lg:bottom-154 z-10 w-44 rotate-[12deg] border-2 border-black bg-[#dcd3c5] p-4 shadow-[8px_8px_0_0_#111111] sm:w-52"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#111111]">Projects</p>
                                <p className="mt-2 text-3xl font-black leading-none tracking-[-0.08em] text-[#111111]">04</p>
                                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#2f2a26]">Delivered</p>
                            </motion.div>

                            <motion.div
                                className="absolute md:bottom-8 md:right-[570px] md:z-40 lg:bottom-28 lg:right-170 z-10 w-48 rotate-[-10deg] border-2 border-black bg-[#f6f3ee] p-4 shadow-[8px_8px_0_0_#111111] sm:w-56"
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#111111]">Launched</p>
                                <p className="mt-2 text-3xl font-black leading-none tracking-[-0.08em] text-[#111111]">03</p>
                                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#2f2a26]">Products</p>
                            </motion.div>

                            {/* Decorative shapes - behind portrait */}
                            {/* <div
                                className="absolute top-0 z-40 border-2 border-black bg-[#f6f3ee]"
                                style={{
                                    left: "200px",
                                    width: "120px",
                                    height: "120px",
                                    borderRadius: "55% 45% 62% 38% / 40% 60% 40% 60%",
                                }}
                            /> */}

                            {/* <div
                                className="absolute z-20 border-2 border-black bg-[#dcd3c5]"
                                style={{
                                    right: "10px",
                                    top: "20px",
                                    width: "320px",
                                    height: "420px",
                                    borderRadius: "22% 78% 67% 33% / 12% 16% 84% 88%",
                                    transform: "rotate(3deg)",
                                }}
                            /> */}

                            {/* Main portrait - CLEARLY VISIBLE */}
                            <div
                                className="
        absolute z-30 overflow-hidden
        border-2 border-black
        bg-[#111111]
        shadow-[16px_16px_0_0_#111111]

        md:right-[566px] md:top-[-65px]
        md:h-[700px] md:w-[600px]

        lg:left-[32px] lg:top-[32px]
        lg:h-[400px] lg:w-[300px]

        xl:left-[40px] xl:top-[40px]
        xl:h-[440px] xl:w-[330px]

        2xl:left-[48px] 2xl:top-[48px]
        2xl:h-[480px] 2xl:w-[360px]
    "
                                style={{
                                    borderRadius: "26% 74% 68% 32% / 12% 15% 85% 88%",
                                    WebkitTransform: "translateZ(0)",
                                }}
                            >
                                <img
                                    src="/img1.jpg"
                                    alt="Jai Vinod Irkal"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        objectPosition: "center",
                                        display: "block",
                                    }}
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>

                            {/* Floating label - top layer */}
                            <motion.div
                                className="absolute z-40 border-2 border-black bg-[#f6f3ee] px-4 py-3 shadow-[6px_6px_0_0_#111111]"
                                style={{
                                    left: "150px",
                                    bottom: "90px",
                                }}
                                animate={{ y: [0, -5, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#111111]">
                                    Full Stack Developer
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <div>
                        <Badge variant="secondary" className="mb-6">
                            <Sparkles className="mr-2 h-3.5 w-3.5" />
                            Available for new projects
                        </Badge>

                        <motion.h1
                            className="max-w-2xl text-4xl font-black uppercase tracking-[-0.08em] text-[#111111] sm:text-5xl lg:text-7xl"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            {portfolioData.role}
                        </motion.h1>

                        <motion.p
                            className="mt-6 max-w-xl text-lg leading-8 text-[#2f2a26]"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {portfolioData.headline}
                        </motion.p>

                        <motion.div
                            className="mt-8 flex flex-wrap items-center gap-4"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <Button size="lg">
                                Book a call
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                            <Button variant="secondary" size="lg" asChild>
                                <a href="#work">View projects</a>
                            </Button>
                        </motion.div>

                        <motion.div
                            className="mt-10 flex flex-wrap items-center gap-6 text-sm font-medium text-[#111111]"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="flex items-center gap-2 border-2 border-black bg-[#f6f3ee] px-3 py-2">
                                <MapPin className="h-4 w-4" />
                                {portfolioData.location}
                            </div>
                            <div className="flex items-center gap-2 border-2 border-black bg-[#f6f3ee] px-3 py-2">
                                <Mail className="h-4 w-4" />
                                {portfolioData.email}
                            </div>
                        </motion.div>

                        <div className="mt-8 overflow-hidden border-2 border-black bg-[#f6f3ee] py-3">
                            <div className="marquee-track">
                                {marqueeSkills.map((skill, index) => (
                                    <span key={`${skill}-${index}`} className="marquee-item">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                <section className="mt-12 grid items-stretch gap-4 md:grid-cols-3">
                    {portfolioData.stats.map((stat) => (
                        <motion.div
                            key={stat.label}
                            className="h-full"
                            whileHover={{ y: -4, scale: 1.01 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Card className="section-shell h-full w-full bg-[#f6f3ee] text-[#111111]">
                                <CardContent className="flex h-full items-center justify-between gap-4 p-5">
                                    <div className="min-w-0 flex-1">
                                        <div className="text-3xl font-black text-[#111111]">{stat.value}</div>
                                        <div className="mt-2 text-sm font-black uppercase tracking-[0.12em] text-[#111111]">{stat.label}</div>
                                    </div>
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-black bg-[#dcd3c5]">
                                        <StatIcon type={stat.icon as "experience" | "projects" | "cloud"} />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </section>

                <motion.section
                    id="about"
                    className="mt-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeading
                        eyebrow="About"
                        title="I build products that look premium and perform with intent."
                        description={portfolioData.intro}
                    />

                    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">

                        {/* Personal image */}
                        <div className="space-y-6">

                            <motion.div
                                className="relative overflow-hidden border-2 border-black bg-[#111111] shadow-[10px_10px_0_0_#111111]"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div
                                    className="aspect-[4/3] overflow-hidden"
                                    style={{
                                        borderRadius: "14% 86% 20% 80% / 78% 14% 86% 22%",
                                    }}
                                >
                                    <img
                                        src="/img2.jpg"
                                        alt="Jai Vinod Irkal"
                                        className="block h-full w-full object-cover transition duration-500 hover:scale-105"
                                        style={{
                                            objectPosition: "center 45%",
                                        }}
                                    />
                                </div>

                                {/* <div className="absolute bottom-4 left-4 border-2 border-black bg-[#f6f3ee] px-4 py-2 shadow-[4px_4px_0_0_#111111]">
                                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#111111]">
                                        Bangalore · India
                                    </p>
                                </div> */}
                            </motion.div>

                            <div className="border-2 border-black bg-[#dcd3c5] p-5">
                                <p className="text-sm font-bold leading-6 text-[#111111]">
                                    Building across web, mobile, cloud, IoT, and AI —
                                    with a focus on reliable systems and thoughtful execution.
                                </p>
                            </div>

                        </div>

                        {/* Content */}
                        <div className="space-y-6">

                            <Card className="section-shell bg-[#f6f3ee] text-[#111111]">
                                <CardHeader>
                                    <CardTitle className="uppercase tracking-[0.12em]">
                                        Core strengths
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    {portfolioData.services.map((service) => (
                                        <div
                                            key={service.title}
                                            className="border-2 border-black bg-[#f9f7f2] p-4"
                                        >
                                            <div className="mb-2 flex items-center gap-2">
                                                <Briefcase className="h-4 w-4" />

                                                <span className="font-black uppercase tracking-[0.12em]">
                                                    {service.title}
                                                </span>
                                            </div>

                                            <p className="text-sm leading-6 text-[#2f2a26]">
                                                {service.description}
                                            </p>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            <Card className="section-shell bg-[#f6f3ee] text-[#111111]">
                                <CardHeader>
                                    <CardTitle className="uppercase tracking-[0.12em]">
                                        Expertise
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="flex flex-wrap gap-3">
                                    {portfolioData.expertise.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="outline"
                                            className="px-3 py-1.5 text-[10px] tracking-[0.14em]"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </CardContent>
                            </Card>

                            {/* <Card className="section-shell bg-[#111111] text-[#f6f3ee]">
                                <CardContent className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between">
                                    <span className="text-xs font-black uppercase tracking-[0.18em]">
                                        Currently
                                    </span>

                                    <span className="text-sm font-medium text-[#dcd3c5] sm:text-right">
                                        {portfolioData.availability}
                                    </span>
                                </CardContent>
                            </Card> */}

                        </div>
                    </div>
                </motion.section>

                <motion.section
                    id="experience"
                    className="mt-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeading
                        eyebrow="Experience"
                        title="A product-minded engineering career shaped by delivery and craft."
                        description="I pair technical depth with design sensitivity to build digital products that are elegant, measurable, and dependable."
                    />

                    <div className="space-y-5">
                        {portfolioData.experience.map((job, index) => (
                            <motion.div
                                key={job.title}
                                initial={{ opacity: 0, x: -18 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                            >
                                <Card className="section-shell bg-[#f6f3ee] text-[#111111]">
                                    <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                                        <div>
                                            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#111111]">{job.period}</p>
                                            <h3 className="mt-2 text-2xl font-black uppercase tracking-[-0.06em] text-[#111111]">{job.title}</h3>
                                            <p className="mt-1 text-base font-medium text-[#2f2a26]">{job.company}</p>
                                        </div>
                                        <p className="max-w-xl text-sm leading-7 text-[#2f2a26]">{job.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    id="work"
                    className="mt-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeading
                        eyebrow="Selected work"
                        title="Recent products built to move users, teams, and metrics."
                        description="Every project balances design quality, product thinking, and engineering execution to create outcomes beyond the interface."
                    />

                    <div className="grid gap-6 lg:grid-cols-3">
                        {portfolioData.projects.map((project, index) => (
                            <motion.div
                                key={project.name}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                whileHover={{ y: -8 }}
                            >
                                <Card className="group section-shell h-full bg-[#f6f3ee] text-[#111111] transition duration-150 hover:translate-x-[-3px] hover:translate-y-[-3px]">
                                    <CardHeader>
                                        <div className="mb-4 flex items-center justify-between">
                                            <Badge
                                                variant={project.accent === "cyan" ? "secondary" : project.accent === "violet" ? "accent" : "default"}
                                                className=""
                                            >
                                                {project.category}
                                            </Badge>
                                            <ExternalLink className="h-4 w-4 text-[#111111]" />
                                        </div>
                                        <CardTitle className="uppercase tracking-[-0.05em]">{project.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-sm leading-7 text-[#2f2a26]">{project.summary}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.stack.map((item) => (
                                                <Badge key={item} variant="outline" className="px-2.5 py-1 text-[10px] tracking-[0.12em]">
                                                    {item}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="border-2 border-black bg-[#dcd3c5] p-3 text-sm font-black uppercase tracking-[0.12em] text-[#111111]">
                                            {project.impact}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Testimonials"
            title="Strong collaboration leads to stronger outcomes."
            description="From early visioning to scaling launch-ready systems, the approach stays thoughtful, transparent, and measurable."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {portfolioData.testimonials.map((quote, index) => (
              <motion.div
                key={quote.author}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="section-shell bg-[#f6f3ee] text-[#111111]">
                  <CardContent className="space-y-4 p-6">
                    <p className="text-lg leading-8 text-[#111111]">“{quote.quote}”</p>
                    <div>
                      <div className="font-black uppercase tracking-[0.12em] text-[#111111]">{quote.author}</div>
                      <div className="text-sm text-[#2f2a26]">{quote.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section> */}

                <motion.section
                    id="contact"
                    className="mt-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Card className="section-shell overflow-hidden border-2 border-black !bg-[#111111] p-0 !text-[#f6f3ee]">
                        <CardContent className="p-8 sm:p-10 lg:p-12">
                            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

                                {/* Main CTA */}
                                <div>
                                    <Badge
                                        variant="default"
                                        className="mb-8 border-2 border-[#111111] bg-[#f6f3ee] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-[#111111]"
                                    >
                                        Let&apos;s build
                                    </Badge>

                                    <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.07em] text-[#f6f3ee] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
                                        Build
                                        <br />
                                        <span className="text-[#8d8d8d]">something</span>
                                        <br />
                                        worth shipping.
                                    </h2>

                                    <p className="mt-8 max-w-xl text-sm leading-6 text-[#b8b8b8] sm:text-base">
                                        Have an idea, product, or technical challenge?
                                        I build full-stack web, mobile, cloud, IoT, and AI
                                        solutions from development to deployment.
                                    </p>
                                </div>

                                {/* Contact */}
                                <div className="flex flex-col gap-6 lg:min-w-[310px] lg:items-end">

                                    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                                        <Button
                                            size="lg"
                                            variant="secondary"
                                            className="h-14 border-2 border-[#f6f3ee] bg-[#f6f3ee] px-7 text-sm font-black uppercase tracking-wide text-[#111111] shadow-[5px_5px_0_0_#8d8d8d] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_0_#8d8d8d]"
                                            asChild
                                        >
                                            <a href={`mailto:${portfolioData.email}`}>
                                                Email me
                                            </a>
                                        </Button>

                                        <Button
                                            size="lg"
                                            className="h-14 border-2 border-[#8d8d8d] bg-[#111111] px-7 text-sm font-black uppercase tracking-wide text-[#f6f3ee] shadow-[5px_5px_0_0_#f6f3ee] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_0_#f6f3ee]"
                                            asChild
                                        >
                                            <a
                                                href={`tel:${portfolioData.phone.replace(/\s+/g, "")}`}
                                            >
                                                Call now
                                            </a>
                                        </Button>
                                    </div>

                                    <div className="border-t border-[#444444] pt-5 text-sm leading-6 text-[#b8b8b8] lg:w-full lg:text-right">
                                        <p className="font-medium text-[#f6f3ee]">
                                            {portfolioData.email}
                                        </p>
                                        <p>{portfolioData.phone}</p>
                                        <p>{portfolioData.location}</p>
                                    </div>

                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.section>
            </main>

            <footer className="border-t-2 border-black bg-[#f6f3ee]">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 text-sm font-black uppercase tracking-[0.12em] text-[#111111] sm:flex-row sm:px-6 lg:px-8">
                    <p>
                        © {new Date().getFullYear()} {portfolioData.name}. Built with care.
                    </p>

                    <div className="flex items-center gap-4">
                        {portfolioData.socials.map((social) => {
                            const Icon = socialIconMap[social.icon as keyof typeof socialIconMap] ?? ArrowRight;

                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex h-9 w-9 items-center justify-center border-2 border-black bg-[#111111] text-[#f6f3ee] transition hover:translate-x-[-2px] hover:translate-y-[-2px]"
                                    aria-label={social.name}
                                >
                                    <Icon className="h-6 w-6" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </footer>
        </div>
    );
}
