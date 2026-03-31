import SiteHeader from "./site-header";

type PageShellProps = {
  currentPath: string;
  title: string;
  intro: string;
  children?: React.ReactNode;
};

export default function PageShell({
  currentPath,
  title,
  intro,
  children,
}: PageShellProps) {
  return (
    <main className="min-h-screen bg-[#eadccf] px-6 pb-12 text-[#111]">
      <SiteHeader currentPath={currentPath} />

      <section className="mx-auto mt-9 max-w-[1100px] rounded-[38px] bg-[#efefef] px-6 py-8 md:px-10 md:py-12">
        <h1 className="mb-6 text-center text-[28px] leading-[1.3] tracking-[0.08em] md:text-[38px]">
          {title}
        </h1>

        <p className="mx-auto mb-10 max-w-[800px] text-center text-[18px] leading-[1.7] text-black/80 md:text-[22px]">
          {intro}
        </p>

        <div className="grid gap-6 md:grid-cols-2">{children}</div>
      </section>
    </main>
  );
}