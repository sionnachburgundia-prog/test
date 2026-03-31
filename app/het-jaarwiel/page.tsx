import PageShell from "@/components/page-shell";

export default function JaarwielPage() {
  return (
    <PageShell
      currentPath="/het-jaarwiel"
      title="Het Jaarwiel"
      intro="Dit is een dummy pagina voor het jaarwiel. Hier kun je later de acht jaarfeesten, jouw ceremonies en de betekenis van de seizoenspoorten uitwerken."
    >
      <div className="rounded-[28px] bg-white/60 p-6">
        <h2 className="mb-3 text-2xl">Ceremonies</h2>
        <p className="leading-7 text-black/80">
          Ruimte voor dummy info over Beltane, Samhain, Midzomer, Midwinter en
          andere rituele momenten in het jaar.
        </p>
      </div>

      <div className="rounded-[28px] bg-white/60 p-6">
        <h2 className="mb-3 text-2xl">De reis door het jaar</h2>
        <p className="leading-7 text-black/80">
          Hier kun je later schrijven hoe het jaarwiel vrouwen helpt zakken in
          hun proces, hun lichaam en hun natuurlijke ritme.
        </p>
      </div>
    </PageShell>
  );
}