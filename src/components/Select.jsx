import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tailwind-merge";

export function Select({
  title,
  options = [],
  className = "",
  defaultValue,
  onChange,
  value,
}) {
  const isControlled = value !== undefined;

  return (
    <div className="relative dark:text-black">
      <select
        onChange={(event) => onChange?.(event.target.value)}
        {...(isControlled
          ? { value: value ?? "" }
          : { defaultValue: defaultValue ?? "" })}
        className={twMerge(
          "w-24 appearance-none border border-gray-300 bg-white p-4",
          className,
        )}
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
