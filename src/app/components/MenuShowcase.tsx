import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { menuCategories, type MenuItem } from "../data/menuData";
import { Eyebrow, LineReveal, CategoryGlyph } from "./primitives";

/* ---------- Price rendering ---------- */
function Price({ item }: { item: MenuItem }) {
  if (item.prices.length === 1) {
    return (
      <span className="whitespace-nowrap font-display text-xl text-ink">
        {item.prices[0].price.replace(" zł", "")}
        <span className="ml-1 text-sm text-stone">zł</span>
      </span>
    );
  }
  return (
    <div className="flex shrink-0 gap-4 text-right">
      {item.prices.map((p) => (
        <div key={p.size}>
          <div className="eyebrow text-stone">{p.size.replace("Ø", "Ø ")}</div>
          <div className="mt-1 whitespace-nowrap font-display text-lg text-ink">
            {p.price.replace(" zł", "")}
            <span className="ml-0.5 text-xs text-stone">zł</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Menu row ---------- */
function Row({ item, single }: { item: MenuItem; single: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group flex items-start justify-between gap-4 py-5"
    >
      <div className="min-w-0">
        <div className="flex items-center gap-3">
          <h4 className="font-display text-xl text-ink transition-colors group-hover:text-clay">
            {item.name}
          </h4>
          {item.popular && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-olive/12 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-olive-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-olive" />
              Polecane
            </span>
          )}
        </div>
        {item.ingredients && (
          <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-stone">
            {item.ingredients}
          </p>
        )}
      </div>

      {single ? (
        <>
          <span className="leader hidden text-ink sm:block" />
          <Price item={item} />
        </>
      ) : (
        <Price item={item} />
      )}
    </motion.div>
  );
}

export function MenuShowcase() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);
  const [onlyPopular, setOnlyPopular] = useState(false);

  const active = menuCategories.find((c) => c.id === activeId)!;
  const hasPopular = active.items.some((i) => i.popular);
  const items =
    onlyPopular && hasPopular ? active.items.filter((i) => i.popular) : active.items;
  const single = items.every((i) => i.prices.length === 1);

  return (
    <section className="grain relative bg-bone pt-8 pb-20 lg:pt-10 lg:pb-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Header */}
        <div className="mb-6 flex flex-col justify-between gap-3 lg:flex-row lg:items-end">
          <div>
            <Eyebrow className="text-clay">Karta dań</Eyebrow>
            <h2 className="mt-3 font-display text-3xl leading-[0.95] tracking-tight text-ink sm:text-4xl lg:text-5xl">
              <LineReveal
                lines={[
                  <span key="1">Nasze menu</span>,
                  <span key="2" className="italic text-clay">
                    prosto z pieca
                  </span>,
                ]}
              />
            </h2>
          </div>
          <p className="max-w-sm text-ink/60 lg:text-right">
            Włoska pizza, pierogi lepione ręcznie i domowe dania obiadowe — wszystko
            w jednym miejscu.
          </p>
        </div>

        {/* Anchor target: clicking "Menu" lands right here, at the categories */}
        <span id="menu" aria-hidden="true" className="block scroll-mt-28" />

        {/* Category rail — sticky */}
        <div
          className="sticky top-16 z-30 -mx-5 border-y border-ink/10 bg-bone/95 px-5 backdrop-blur md:top-20 sm:-mx-8 sm:px-8"
        >
          <div className="flex gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {menuCategories.map((c) => {
              const on = c.id === activeId;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveId(c.id);
                    setOnlyPopular(false);
                  }}
                  aria-pressed={on}
                  aria-label={`Pokaż kategorię: ${c.name}`}
                  className={`relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    on ? "text-cream" : "text-ink/60 hover:text-ink"
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="cat-pill"
                      className="absolute inset-0 rounded-full bg-forest"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <CategoryGlyph name={c.icon} className="h-4 w-4" />
                    {c.tabLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category meta + filter */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-3xl text-ink">{active.name}</h3>
            {active.note && <p className="mt-1 text-sm text-stone">{active.note}</p>}
          </div>
          {hasPopular && (
            <button
              onClick={() => setOnlyPopular((v) => !v)}
              aria-pressed={onlyPopular}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                onlyPopular
                  ? "border-olive bg-olive/10 text-olive-deep"
                  : "border-ink/15 text-ink/60 hover:border-ink/40"
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${onlyPopular ? "bg-olive" : "bg-ink/30"}`} />
              Tylko polecane
            </button>
          )}
        </div>

        {/* List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId + String(onlyPopular)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 grid grid-cols-1 gap-x-16 border-t border-ink/10 lg:grid-cols-2"
          >
            {items.map((item) => (
              <div key={item.name} className="border-b border-ink/10">
                <Row item={item} single={single} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
