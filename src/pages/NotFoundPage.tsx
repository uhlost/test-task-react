import { useNavigate } from "react-router"

export function NotFoundPage() {
  const router = useNavigate()

  return (
    <div className="flex h-full flex-col gap-3 justify-center items-center">
      <p className="text-[#ffff]">Упс, неверный url!</p>
      <Button
        variant="solid"
        color="blue"
        onClick={() => router("/")}
      >
        Вернуться обратно
      </Button>
    </div>
  )
}
