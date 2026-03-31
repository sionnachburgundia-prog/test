import PageShell from "@/components/page-shell";

export default function ReadingsPage() {
  return (
    <PageShell
      currentPath="/readings"
      title="Readings"
      intro="Dit is een dummy pagina voor readings. Hier kun je later jouw aanbod, werkwijze, soorten readings en de investering neerzetten."
    >
      <div className="rounded-[28px] bg-white/60 p-6">
        <h2 className="mb-3 text-2xl">Wat is een reading?</h2>
        <p className="leading-7 text-black/80">
          Dummy tekst om uit te leggen hoe jij werkt, wat mensen kunnen
          verwachten en waar een reading inzicht in kan geven.
        </p>
      </div>

      <div className="rounded-[28px] bg-white/60 p-6">
        <h2 className="mb-3 text-2xl">Boeken & contact</h2>
        <p className="leading-7 text-black/80">
          Hier kun je later een knop, formulier of contactroute toevoegen voor
          het aanvragen van een reading.
        </p>
      </div>
    </PageShell>
  );
}