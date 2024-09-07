// import { Card } from "./components/Card";
import { useState } from "react";
import { Nav } from "./components/Nav";
import { New } from "./components/New";
import { Shoe } from "./components/Shoe";
import { Sidebar } from "./components/Sidebar";
import { SHOE_LIST } from "./constant";

function App() {

  const [isOpen, setIsopen]= useState(false)
  return (
    <div className="p-10 xl:px-24 animate-fadeIn">
      <Nav onClickShoppingButton={()=>setIsopen(true)}/>
      <Shoe/>
      <New items={SHOE_LIST}/>
      <Sidebar isOpen={isOpen} onclickClose={()=>setIsopen(false)}>
        NIKE
      </Sidebar>
  
    </div>
  )
}

export default App;
