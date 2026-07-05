import { LayoutHeader } from "@/widget/Pokemons"
import { Outlet } from "react-router"

export function LayoutPage() {
  return (
    <div className="flex flex-col gap-[54px] h-screen bg-[#131313]">
      <LayoutHeader />
      <Outlet />
    </div>
  )
}
