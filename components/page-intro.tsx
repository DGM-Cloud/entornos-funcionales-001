export function PageIntro({
  title,
  lede,
}: {
  title: string;
  lede?: string;
  index?: string;
}) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <h1 className="max-w-3xl text-[clamp(2rem,4vw,3.25rem)] leading-tight font-semibold tracking-[-0.03em] text-balance">
          {title}
        </h1>
        {lede ? <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{lede}</p> : null}
      </div>
    </header>
  );
}
