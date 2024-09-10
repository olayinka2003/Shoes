import { IoIosArrowDown } from "react-icons/io"
import { twMerge } from "tw-merge"


export const Select = ({options,title, className, Value, onChange}) => {
  return (
    <div className="relative  dark:text-black">
        <select onChange={(e)=>onChange(e.target.value)} value={Value || ""}className={twMerge(`w-24 appearance-none  bg-white p-4 border-gray-500 ${className}`)}>
          <option value="" disabled hidden>
            {title}
          </option>
          {options.map(opt => <option value={opt} key={opt}>{opt}</option>)}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex-center pr-3 ">
            <IoIosArrowDown/>
          </div>

    </div>
  )
}
