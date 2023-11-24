import useData from "@/context/DataContext"
// import { useState } from "react";
// import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";


export default function Sidebar() {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { menuCategories, setItemsByCatName, activeCat } = useData();

  return (
    <div id="sidebar" className={`relative p-4 set-bg-light flex gap-4 md:flex-col rounded-lg overflow-x-scroll`}>
      <div className="py-2 px-4 set-bg rounded font-bold">Category:</div>
      <div className="flex md:flex-col gap-2">
        {menuCategories &&
          menuCategories.map(item => {
            return <p className={`py-2 px-4 set-bg rounded cursor-pointer capitalize ${item == activeCat && "text-red-500"}`} key={item + 1} onClick={() => setItemsByCatName(item)}>{item}</p>
          })
        }
      </div>

      {/* <div className="p-2 fixed bottom-6 left-6 set-bg w-10 h-10 border border-solid border-red-500 icon-box md:hidden justify-self-end rounded-full"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? <RxCross2 /> : <RxHamburgerMenu />}
      </div> */}
    </div>
  )
}
