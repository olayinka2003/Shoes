import { IoIosArrowDown } from "react-icons/io"


export const Select = ({options,title}) => {
  return (
    <div className="relative">
        <select defaultValue={""} className="w-24 appearance-none  bg-white p-4 border-gray-600">
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
