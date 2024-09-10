

export const Sidebar = ({children, isOpen,onclickClose}) => {
  return (
    <>
    <div className={`dark:bg-night overflow-y-auto p-5 w-full h-full bg-white fixed top-0 z-50 right-0 ${isOpen ? "translate-x-0" : "translate-x-full"} transition transform duration-300 md:w-[50%] lg:w-[35%] shadow-lg`}>
        <button onClick={onclickClose} className="absolute right-4 top-4 p-2 text-black font-bold dark:text-white">
            &times;
        </button>
        {children}
        
    </div>
   {isOpen && <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50">

    </div>}
    </>
  )
}
