import Image from "next/image";
import Link from "next/link";

type SiteHeaderProps = {
  currentPath: string;
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Vrouwencirkel", href: "/vrouwencirkel" },
  { label: "Blog", href: "/blog" },
  { label: "MoonSisters", href: "/moonsisters" },
  { label: "het jaarwiel", href: "/het-jaarwiel" },
  { label: "Readings", href: "/readings" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader({ currentPath }: SiteHeaderProps) {
  return (
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
        {navItems.map((item) => {
          const isActive = currentPath === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`inline-flex whitespace-nowrap px-5 py-[22px] text-[18px] text-[#111] no-underline transition ${
                isActive ? "bg-[#ff1f2d]" : "hover:bg-black/5"
              }`}
            >
              <span className="flex items-center gap-2">
                {item.label}
                {["Vrouwencirkel", "MoonSisters", "het jaarwiel"].includes(
                  item.label
                ) && <span className="text-[15px] leading-none">⌄</span>}
              </span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}