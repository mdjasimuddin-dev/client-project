import React, { useId } from "react";
import GlowButton from "./button/PrimaryButton";
import SecondaryButton from "./button/SecondaryButton";

const iconPaths = {
  leaf: (
    <>
      <path d="M26 6A13 13 0 1 0 28 19" />
      <path d="M10 23C5 13 14 6 27 5c-1 14-7 21-17 18ZM7 26l15-15M12 21v-6" />
    </>
  ),
  plant: (
    <>
      <path d="M16 28V12m0 9-6-6m6 2 6-5M10 28h12" />
      <path d="M16 12c-5-1-6-5-3-9 5 2 6 6 3 9ZM10 16c-5 0-7-4-6-8 5 0 8 3 6 8ZM21 13c-1-5 2-8 7-8 0 5-3 8-7 8Z" />
    </>
  ),
  car: (
    <>
      <path d="m6 13 3-8h14l3 8M5 13h22v12H5ZM5 19h22M7 25v3h4v-3m10 0v3h4v-3M9 22h3m8 0h3" />
    </>
  ),
  house: (
    <>
      <path d="m3 14 13-11 13 11M6 12v16h20V12M12 28V17h8v11M23 9V4h3v7" />
    </>
  ),
  pergola: (
    <>
      <path d="M4 28V9l7-5h17v21M4 9h17l7-5M21 9v19M11 4v22M4 28H2m19 0h2M4 12h17m-13-3 7-5m-3 5 7-5m-3 5 7-5" />
    </>
  ),
  solar: (
    <>
      <path d="m7 12-4 13h23l4-13ZM6 20h22M8 16h21M14 12l-4 13m12-13-4 13m-4 0v4m7-4v4M10 29h15" />
      <circle cx="18" cy="5" r="2" />
      <path d="M18 1v1m0 6v1m-5-4h1m8 0h1M14 1l1 1m6 0 1-1" />
    </>
  ),
  arrow: <path d="M5 16h22m-8-8 8 8-8 8" />,
  play: (
    <>
      <circle cx="16" cy="16" r="12" />
      <path d="m13 10 9 6-9 6Z" fill="currentColor" strokeWidth="0.8" />
    </>
  ),
};

function Icon({ name, className }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {iconPaths[name]}
    </svg>
  );
}

const features = [
  ["leaf", "Classe", "A4"],
  ["plant", "Giardino", "privato"],
  ["car", "Box", "auto"],
  ["house", "Finiture", "personalizzabili"],
];

export default function HeroSection({
  imageSrc,
  desktopImageSrc,
  contactHref = "#contatti",
  videoHref = "#video",
  onVideoClick, // নতুন প্রপ যোগ করা হলো যাতে মোдал ওপেন করা যায়
}) {
  const titleId = useId();

  return (
    <section
      aria-labelledby={titleId}
      lang="it"
      className="relative isolate mx-auto px-4 w-full overflow-hidden bg-[#001b17] text-[#fffdf5] [container-type:inline-size] [font-family:Arial,Helvetica,sans-serif] min-[600px]:max-w-[520px] lg:flex lg:min-h-[820px] lg:max-w-none lg:items-center"
    >
      <div className="absolute inset-x-0 top-[28cqw] -z-10 h-[165cqw] overflow-hidden lg:inset-y-0 lg:top-0 lg:left-[39%] lg:h-full">
        <picture className="block h-full w-full">
          {desktopImageSrc && (
            <source media="(min-width: 1024px)" srcSet={desktopImageSrc} />
          )}
          <img
            src={imageSrc}
            alt="Villa Bazachi Green con giardino e ampie vetrate"
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#001b17_0%,rgba(0,27,23,0.82)_28%,rgba(0,27,23,0.42)_52%,rgba(0,27,23,0.2)_74%,#001b17_100%)] lg:bg-[linear-gradient(90deg,#001b17_0%,rgba(0,27,23,0.82)_9%,rgba(0,27,23,0.2)_32%,transparent_55%)]" />
      </div>

      <div className="relative mx-auto grid w-full pb-[3.5cqw] pt-[16cqw] lg:max-w-[1600px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-x-[7%] lg:py-16">
        <header className="min-h-[90cqw] mt-16 lg:mt-28 min-w-0 px-[2.5cqw] drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] lg:drop-shadow-none lg:col-start-1 lg:row-start-1 lg:min-h-0 lg:px-0">
          <p className="m-0 text-[4cqw] font-bold uppercase leading-[1.2] tracking-[0.065em] text-[#c9b27d] lg:text-xs lg:tracking-[0.14em]">
            Ville nuove in classe A4
          </p>

          <h1
            id={titleId}
            className="mb-0 mt-[2cqw] text-[17cqw] font-normal uppercase leading-[0.87] tracking-[-0.045em] [font-family:'Times_New_Roman',Times,serif] lg:mt-4 lg:text-[clamp(76px,6.5vw,96px)] lg:leading-[0.88] lg:tracking-[-0.035em]"
          >
            <span className="block">Bazachi</span>{" "}
            <span className="block">Green</span>
          </h1>

          <p className="mb-0 mt-[2.8cqw] text-[6.8cqw] font-medium leading-[1.12] tracking-[-0.02em] lg:mt-[22px] lg:text-[clamp(24px,2.1vw,30px)] lg:leading-[1.2]">
            8 ville bifamiliari nel cuore
            <br />
            di Borgotrebbia.
          </p>

          <p className="mb-0 mt-[3cqw] text-[4.15cqw] leading-[1.3] text-[#f4f4ed] lg:mt-4 lg:text-[clamp(14px,1.2vw,17px)] lg:leading-[1.55]">
            Design moderno, efficienza energetica
            <br />e spazi pensati per la tua famiglia.
          </p>
        </header>

        <div
          aria-hidden="true"
          className="h-[58cqw] lg:col-start-2 lg:row-span-4 lg:row-start-1 lg:h-auto"
        />

        <div
          role="group"
          aria-label="Dotazioni in omaggio"
          className="grid min-h-[28cqw] grid-cols-2 gap-[2cqw] rounded-[2.8cqw] border border-[#ffeebd]/40 bg-[linear-gradient(115deg,#b59b66,#9e8456_49%,#bda271)] px-[3cqw] py-[4.2cqw] lg:col-start-1 lg:row-start-2 lg:mt-[30px] lg:min-h-[103px] lg:gap-3 lg:rounded-[10px] lg:px-3.5 lg:py-[17px]"
        >
          <div className="flex min-w-0 items-center justify-center gap-[1.8cqw] lg:gap-3">
            <Icon
              name="pergola"
              className="h-[17cqw] w-[13.5cqw] shrink-0 text-[#fff4d6] lg:h-[62px] lg:w-[58px]"
            />
            <p className="m-0 text-[3.1cqw] font-bold uppercase leading-[1.25] tracking-[0.015em] lg:text-xs lg:leading-[1.3]">
              Pergola
              <br />
              <span className="whitespace-nowrap">in omaggio</span>
            </p>
          </div>
          <div className="flex min-w-0 items-center justify-center gap-[1.8cqw] lg:gap-3">
            <Icon
              name="solar"
              className="h-[17cqw] w-[13.5cqw] shrink-0 text-[#fff4d6] lg:h-[62px] lg:w-[58px]"
            />
            <p className="m-0 text-[3.1cqw] font-bold uppercase leading-[1.25] tracking-[0.015em] lg:text-xs lg:leading-[1.3]">
              Impianto
              <br />
              fotovoltaico
              <br />
              <span className="normal-case">da 6 kW</span>
              <br />
              <span className="whitespace-nowrap">in omaggio</span>
            </p>
          </div>
        </div>

        <ul
          aria-label="Caratteristiche delle ville"
          className="mb-[5.2cqw] mt-[4.6cqw] grid list-none grid-cols-4 p-0 lg:col-start-1 lg:row-start-3 lg:mb-[30px] lg:mt-[25px]"
        >
          {features.map(([icon, firstLine, secondLine]) => (
            <li
              key={icon}
              className="flex min-w-0 flex-col items-center gap-[1.5cqw] text-center lg:gap-[9px]"
            >
              <Icon
                name={icon}
                className="h-[10.5cqw] w-[10.5cqw] text-[#c9b27d] lg:h-[35px] lg:w-[35px]"
              />
              <span className="text-[3cqw] font-medium leading-[1.2] tracking-[-0.02em] lg:text-xs lg:leading-[1.3] lg:tracking-normal">
                {firstLine}
                <br />
                {secondLine}
              </span>
            </li>
          ))}
        </ul>

        <div className="grid gap-[3.3cqw] lg:col-start-1 lg:row-start-4 lg:grid-cols-[1.25fr_1fr] lg:gap-3">
          <GlowButton text="Richiedi informazioni" href={contactHref} />

          {/* Video Button - Click korle modal open hobe */}
          <div onClick={onVideoClick} className="cursor-pointer">
            <SecondaryButton
              text="Guarda il video"
              href={videoHref}
              onClick={(e) => {
                if (onVideoClick) {
                  e.preventDefault();
                  onVideoClick();
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
