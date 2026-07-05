import { ClickIcon } from "@/shared/icons/ClickIcon"
import { useNavigate } from "react-router"

export function LayoutHeader() {
  const router = useNavigate()

  return (
    <div className="flex border-b px-3 py-2 border-b-gray-800 justify-between">
      <Button
        className="bg-transparent! text-[#ffff]! hover:text-[#3c89e8]!"
        variant="outlined"
        onClick={() => router("/")}
      >
        Покемон API
      </Button>
      <div className="flex items-center w-[142.25px] gap-2.5">
        <ClickIcon />
        <p className="text-[#ffffff] font-ra font-semibold text-[12px]/[100%]">
          Нажмите на нужного Покемона
        </p>
      </div>
    </div>
  )
}
