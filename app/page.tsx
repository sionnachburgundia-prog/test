import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Vrouwencirkel", href: "/vrouwencirkel" },
  { label: "Blog", href: "/blog" },
  { label: "MoonSisters", href: "/moonsisters" },
  { label: "het jaarwiel", href: "/het-jaarwiel" },
  { label: "Readings", href: "/readings" },
  { label: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eadccf] px-6 pb-12 text-[#111]">
      <header className="mx-auto max-w-[1100px] pt-3">
        <div className="mb-[18px] flex justify-center">
          <Image
            src="/logo.png"
            alt="Sionnach logo"
            width={120}
            height={70}
            className="h-auto object-contain"
            priority
          />
        </div>

        <nav className="flex min-h-[72px] items-center justify-center overflow-x-auto border border-[#d9cfc5] bg-[#efefef]">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`inline-flex whitespace-nowrap px-5 py-[22px] text-[18px] text-[#111] no-underline transition ${
                item.href === "/" ? "bg-[#ff1f2d]" : "hover:bg-black/5"
              }`}
            >
              <span className="flex items-center gap-2">
                {item.label}
                {["Vrouwencirkel", "MoonSisters", "het jaarwiel"].includes(
                  item.label
                ) && <span className="text-[15px] leading-none">⌄</span>}
              </span>
            </Link>
          ))}
        </nav>
      </header>

      <section className="mx-auto mt-9 grid max-w-[1200px] grid-cols-1 gap-9 lg:grid-cols-[1.45fr_1fr]">
        <div className="overflow-hidden rounded-[38px] bg-[#efefef] p-6">
          <div className="relative h-[340px] w-full overflow-hidden rounded-[20px] bg-[#efefef] md:h-[480px] lg:h-[580px] lg:rounded-[26px]">
            <Image
              src="/logo-large.png"
              alt="Take Back Your Power"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-[28px] bg-[#efefef] px-[22px] py-7 md:px-[38px] md:py-[42px] lg:min-h-[630px] lg:rounded-[38px]">
          <h1 className="mb-7 text-center text-[27px] leading-[1.35] font-normal tracking-[0.08em] md:mb-[42px] md:text-[34px] md:tracking-[0.12em]">
            Welkom bij
            <br />
            Take Back Your Power!
          </h1>

          <p className="mb-7 text-center text-[20px] leading-[1.55] tracking-[0.08em] md:mb-10 md:text-right md:text-[25px] md:tracking-[0.14em]">
            Laat dit de plek zijn waar jij
            <br />
            jouw kracht, jouw oeroude
            <br />
            vrouwenkracht, weer terug
            <br />
            vind!
          </p>

          <p className="mb-7 text-center text-[24px] md:mb-[42px] md:text-right md:text-[30px]">
            Fijn dat je er bent! ♥
          </p>

          <div className="mt-auto flex flex-col gap-[14px]">
            <Link
              href="/het-jaarwiel"
              className="text-center text-[20px] leading-[1.25] tracking-[0.06em] text-[#ff7f8f] no-underline md:text-[24px] md:tracking-[0.1em]"
            >
              Klik hier{" "}
              <span className="text-[#111]">voor De Oerkracht Ceremonies</span>
            </Link>

            <Link
              href="/vrouwencirkel"
              className="text-center text-[20px] leading-[1.25] tracking-[0.06em] text-[#ff7f8f] no-underline md:text-[24px] md:tracking-[0.1em]"
            >
              Klik hier{" "}
              <span className="text-[#111]">
                voor meer informatie over mijn vrouwencirkels
              </span>
            </Link>

            <Link
              href="/readings"
              className="text-center text-[20px] leading-[1.25] tracking-[0.06em] text-[#ff7f8f] no-underline md:text-[24px] md:tracking-[0.1em]"
            >
              Klik hier{" "}
              <span className="text-[#111]">
                als je op zoek bent naar een reading
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}