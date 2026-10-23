export function Card({ item, onClick }) {
  return (
    <div
      onClick={() => onClick(item)}
      className={`${item.className} relative min-h-64 max-w-xl overflow-hidden rounded-sm transition-transform hover:scale-[1.02]`}
    >
      <div className="relative z-10 p-6 sm:p-8">
        <h3 className="text-xl font-bold sm:text-2xl">
          {item.title}
        </h3>
        <a
          href="#"
          className="mt-8 inline-block font-semibold underline underline-offset-4"
        >
          SHOP NOW +
        </a>
      </div>
      <img
        className="pointer-events-none absolute right-2 bottom-2 h-32 max-w-[65%] object-contain sm:h-40"
        src={item.src}
        alt={item.title}
        loading="lazy"
      />
    </div>
  );
}
