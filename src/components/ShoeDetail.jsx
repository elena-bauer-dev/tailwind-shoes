import { useState } from "react";
import { QTY, SIZES } from "../constant";
import { Select } from "./Select";

export function ShoeDetail({ shoe, onClickAdd }) {
  const [form, setForm] = useState({ qty: "", size: "" });

  if (!shoe) {
    return null;
  }

  return (
    <section className="flex flex-col gap-6 lg:flex-row-reverse dark:text-white">
      <div className="min-w-0 flex-1 lg:-mt-32 lg:ml-28">
        <div className="flex-center min-h-72 overflow-hidden bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6] p-4 sm:p-8 lg:min-h-[34rem]">
          <img
            className="animate-float h-auto max-h-[34rem] w-full max-w-3xl object-contain"
            src={shoe.src}
            alt={shoe.title || "Nike sneaker"}
          />
        </div>
      </div>

      <div className="min-w-0 flex-1 space-y-6">
        <h1 className="text-5xl font-black md:text-8xl">
          {shoe.title}
        </h1>

        <p className="font-medium md:text-xl">{shoe.description}</p>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="text-3xl font-extrabold md:text-5xl">
            ${shoe.price}
          </div>

          <Select
            value={form.qty}
            onChange={(qty) => setForm((prev) => ({ ...prev, qty }))}
            title="QTY"
            options={QTY}
          />

          <Select
            value={form.size}
            onChange={(size) => setForm((prev) => ({ ...prev, size }))}
            title="SIZE"
            options={SIZES}
          />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => onClickAdd?.(shoe, Number(form.qty), Number(form.size))}
            disabled={!form.qty || !form.size}
            className="btn-press-anim h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-black"
          >
            Add to bag
          </button>

          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View details
          </a>
        </div>
      </div>
    </section>
  );
}
