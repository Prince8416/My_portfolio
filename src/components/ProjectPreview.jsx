// Agar data.js me image diya hai to wahi dikhega, warna stylised storefront preview.
export default function ProjectPreview({ image, title }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-lg shadow-ink/5">
      <div className="flex items-center gap-1.5 border-b border-line bg-paper px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-xs text-mute">{title}</span>
      </div>

      {image ? (
        <img src={image} alt={`${title} screenshot`} className="w-full" loading="lazy" />
      ) : (
        <div className="bg-[#F6EEE1] p-4" aria-hidden="true">
          <div className="flex items-center justify-between pb-3">
            <span className="font-display text-sm font-bold text-[#2B1B12]">Zardozi Heritage</span>
            <span className="flex gap-3">
              <span className="h-1.5 w-8 rounded bg-[#2B1B12]/25" />
              <span className="h-1.5 w-8 rounded bg-[#2B1B12]/25" />
              <span className="h-1.5 w-8 rounded bg-[#2B1B12]/25" />
            </span>
          </div>
          <div className="rounded-xl bg-[#2B1B12] px-5 py-7">
            <p className="font-display text-lg font-bold leading-tight text-[#E2B661]">The bridal edit</p>
            <p className="mt-1 text-xs text-[#F6EEE1]/70">Hand embroidered, made to order</p>
            <span className="mt-4 inline-block rounded-full bg-[#B8893C] px-4 py-1.5 text-xs font-semibold text-[#2B1B12]">Shop now</span>
          </div>
          <div className="mt-3 flex gap-2">
            {["Lehenga", "Saree", "Kurta", "Dupatta"].map((c) => (
              <span key={c} className="rounded-full border border-[#B8893C]/50 px-3 py-1 text-[11px] text-[#2B1B12]">
                {c}
              </span>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              ["#C9A36A", "#9C2A2A"],
              ["#9C2A2A", "#E2B661"],
              ["#2B1B12", "#B8893C"],
            ].map(([a, b], n) => (
              <div key={n} className="rounded-lg bg-white p-2">
                <div className="aspect-[3/4] rounded-md" style={{ background: `linear-gradient(160deg, ${a}, ${b})` }} />
                <div className="mt-2 h-1.5 w-3/4 rounded bg-[#2B1B12]/25" />
                <div className="mt-1.5 h-1.5 w-1/3 rounded bg-[#B8893C]" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
