import PageShell from "@/components/page-shell";

export default function VrouwencirkelPage() {
  return (
    <PageShell
      currentPath="/vrouwencirkel"
      title="Vrouwencirkel"
      intro="Dit is een dummy pagina voor de vrouwencirkels. Hier kun je later informatie zetten over data, thema’s, bedding, rituelen en hoe vrouwen zich kunnen aanmelden."
    >
      <div className="rounded-[28px] bg-white/60 p-6">
        <h2 className="mb-3 text-2xl">Wat je hier kunt verwachten</h2>
        <p className="leading-7 text-black/80">
          Een warme plek voor verbinding, verdieping en thuiskomen in jezelf.
          Later kun je hier jouw eigen aanbodtekst, praktische info en sfeer
          toevoegen.
        </p>
      </div>

      <div className="rounded-[28px] bg-white/60 p-6">
        <h2 className="mb-3 text-2xl">Praktische info</h2>
        <p className="leading-7 text-black/80">
          Dummy tekst voor locatie, tijden, investering en aanmelding. Deze
          sectie kun je straks makkelijk vervangen door je echte informatie.
        </p>
      </div>
    </PageShell>
  );
}