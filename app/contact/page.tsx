import SiteHeader from "@/components/site-header";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#eadccf] px-6 pb-16 text-[#111]">
      <SiteHeader currentPath="/contact" />

      <section className="mx-auto mt-10 max-w-[1180px] rounded-[36px] bg-[#efefef] px-6 py-10 md:px-12 md:py-14">
        <div className="mx-auto max-w-[950px]">
          <h1 className="text-center text-[34px] font-normal tracking-[0.18em] md:text-[64px]">
            CONTACT &amp; LOCATIE
          </h1>

          <p className="mx-auto mt-6 max-w-[880px] text-center text-[18px] leading-[1.4] tracking-[0.08em] md:text-[24px]">
            Voel je vrij om contact op te nemen voor een reading of meer
            informatie over de vrouwencirkel. Ik hoor graag van je! ♥
          </p>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 text-[44px] leading-none">⌖</div>
              <h2 className="text-[20px] font-semibold md:text-[24px]">
                Locatie Vrouwencirkel
              </h2>
              <div className="mt-2 text-[18px] leading-[1.35] md:text-[20px]">
                <p>Vrouwencirkel Arnhem</p>
                <p>Willem Beijerstraat 13</p>
                <p>6823 EW Arnhem</p>
                <p>Nederlands</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-5 text-[44px] leading-none">✉</div>
              <h2 className="text-[20px] font-semibold md:text-[24px]">Email</h2>
              <a
                href="mailto:info@takebackyourpower.nl"
                className="mt-2 text-[18px] leading-[1.35] text-[#111] no-underline hover:opacity-70 md:text-[20px]"
              >
                info@takebackyourpower.nl
              </a>
            </div>
          </div>

          <div className="mx-auto mt-24 max-w-[620px]">
            <p className="mb-8 text-center text-[20px] leading-[1.45] md:text-[24px]">
              Of vul het contactformulier in en dan neem ik zo snel mogelijk
              contact met jou op! ♥
            </p>

            <form className="space-y-7">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-[18px] md:text-[20px]"
                >
                  Naam *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="h-12 w-full border border-[#cfc6bd] bg-[#f8f6f3] px-4 text-[18px] outline-none transition focus:border-[#b6aaa0]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[18px] md:text-[20px]"
                >
                  E-mail *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="h-12 w-full border border-[#cfc6bd] bg-[#f8f6f3] px-4 text-[18px] outline-none transition focus:border-[#b6aaa0]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[18px] md:text-[20px]"
                >
                  Bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  className="w-full resize-none border border-[#cfc6bd] bg-[#f8f6f3] px-4 py-3 text-[18px] outline-none transition focus:border-[#b6aaa0]"
                />
              </div>

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="rounded-full bg-[#111] px-8 py-3 text-[16px] tracking-[0.08em] text-[#efefef] transition hover:opacity-85"
                >
                  VERSTUREN
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}