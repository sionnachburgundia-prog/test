import PageShell from "@/components/page-shell";

export default function MoonSistersPage() {
  return (
    <PageShell
      currentPath="/moonsisters"
      title="MoonSisters"
      intro="Dit is een dummy pagina voor MoonSisters. Hier kun je later uitleg geven over het netwerk, de visie, de verbinding met hoedsters en hoe mensen meer kunnen ontdekken."
    >
      <div className="rounded-[28px] bg-white/60 p-6">
        <h2 className="mb-3 text-2xl">Over MoonSisters</h2>
        <p className="leading-7 text-black/80">
          Vertel hier waar MoonSisters voor staat en wat de betekenis is binnen
          jouw werk en community.
        </p>
      </div>

      <div className="rounded-[28px] bg-white/60 p-6">
        <h2 className="mb-3 text-2xl">Samenwerking</h2>
        <p className="leading-7 text-black/80">
          Dummy tekst over verbinding, gezamenlijke energie en de kracht van een
          groter veld van vrouwen.
        </p>
      </div>
    </PageShell>
  );
}