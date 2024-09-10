import { CiTrash } from "react-icons/ci";
import { Select } from "./Select";
import { QTY, SIZES } from "../constant";

export const Cart = ({ item:{product, qty, size}, onRemove }) => {
  return (
    <div className="p-2 cursor-pointer bg-gray-50 hover:bg-[#DAFFA2] space-y-2 dark:bg-transparent dark:hover:bg-night-50">
      <div className="  flex space-x-2">
        <img src={product.src} alt={product.src} className="h-24" />
        <div className="space-y-2">
          <div className="font-bold dark:text-white">{product.title}</div>
          <div className="text-sm text-gray-400">{product.description}</div>
        </div>
        <div className="font-bold dark:text-white">${product.price}</div>
      </div>

      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
            <div>
          <div>
            <div className="font-bold dark:text-white">SIZE</div>
            <Select Value={size} title="" options={SIZES}  className={"w-16 p-1 pl-2"}/>
          </div>
        </div>
        <div>
          <div className="font-bold dark:text-white">QTY</div>
          <Select Value={qty} title="" options={QTY}  className={"w-16 p-1 pl-2"} />
        </div>
        </div>
        <button onClick={()=>onRemove(product.id)}>
          <CiTrash size={25} className="text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
};
