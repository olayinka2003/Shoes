import { useState } from "react";
import nike1 from "../assets/n1-min.png";
import { QTY, SIZES } from "../constant";
import { Select } from "./Select";

export const Shoe = ({shoe, onAddToCart}) => {
  const [form, setForm] = useState({qty:null, size:null});
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4 lg:space-x-4 dark:text-white">
      <div className="flex-1 lg:-mt-32 lg:ml-28 ">
        <div className="flex-center bg-gradient-to-br from-[#f637cf] from-5% via-[#e3d876] via-40% to-[#4dd4c6] h-dvh">
          <img className="animate-float" src={shoe.src} alt="" />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <div className="text-5xl font-black md:text-9xl">{shoe.title}</div>

        <div className="font-medium md:text-xl">
          {
           shoe.description
          }
        </div>
        <div className="flex space-x-6">
        <div className="text-3xl font-extrabold md:text-6xl"> ${shoe.price}</div>
        <Select Value={form.qty} onChange={(qty)=> setForm({...form,qty})} title={'QTY'} options={QTY}/>
        <Select Value={form.size} title={'SIZE'} options={SIZES} onChange={(size)=> setForm({...form,size})} />
        </div>


        <div className="space-x-10">
          <button onClick={()=>onAddToCart(shoe,form.qty, form.size)} className="h-14 w-44 bg-black text-white hover:bg-gray-900 btn-press-anim active:bg-gray-700 dark:bg-white dark:text-black">
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
    </div>
  );
};
