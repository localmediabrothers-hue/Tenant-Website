import { Button } from "@/components/ui/button";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const NAV_LINKS = ["Studio", "About", "Journal", "Reach Us"];

export function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={VIDEO_SRC}
      />

      <nav className="relative z-10 mx-auto flex max-w-7xl flex-row items-center justify-between px-8 py-6">
        <span
          className="text-3xl tracking-tight text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Velorah<sup className="text-xs">®</sup>
        </span>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm text-foreground">
            Home
          </a>
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </div>

        <Button
          variant="ghost"
          size="none"
          className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground transition-transform duration-300 ease-out hover:scale-[1.03]"
        >
          Begin Journey
        </Button>
      </nav>

      <section className="relative z-10 flex flex-col items-center px-6 pt-32 pb-40 py-[90px] text-center">
        <h1
          className="max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] sm:text-7xl md:text-8xl animate-fade-rise"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Where <em className="not-italic text-muted-foreground">dreams</em>{" "}
          rise{" "}
          <em className="not-italic text-muted-foreground">
            through the silence.
          </em>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-fade-rise-delay">
          We're designing tools for deep thinkers, bold creators, and quiet
          rebels. Amid the chaos, we build digital spaces for sharp focus and
          inspired work.
        </p>

        <Button
          variant="ghost"
          size="none"
          className="liquid-glass mt-12 cursor-pointer rounded-full px-14 py-5 text-base text-foreground transition-transform duration-300 ease-out hover:scale-[1.03] animate-fade-rise-delay-2"
        >
          Begin Journey
        </Button>
      </section>
    </div>
  );
}
