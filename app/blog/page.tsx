import PageShell from "@/components/page-shell";

export default function BlogPage() {
  return (
    <PageShell
      currentPath="/blog"
      title="Blog"
      intro="Dit is een dummy blogpagina. Hier kunnen later artikelen komen over vrouwencirkels, rituelen, maancycli, schaduwwerk en alles wat bij jouw werk past."
    >
      <div className="rounded-[28px] bg-white/60 p-6">
        <h2 className="mb-3 text-2xl">Laatste artikel</h2>
        <p className="leading-7 text-black/80">
          Titel van een blogpost komt hier. Daaronder kan een korte intro staan
          zodat bezoekers doorklikken naar het volledige artikel.
        </p>
      </div>

      <div className="rounded-[28px] bg-white/60 p-6">
        <h2 className="mb-3 text-2xl">Categorieën</h2>
        <p className="leading-7 text-black/80">
          Dummy ruimte voor thema’s zoals ceremonie, maan, belichaming,
          oerkracht en persoonlijke processen.
        </p>
      </div>
    </PageShell>
  );
}