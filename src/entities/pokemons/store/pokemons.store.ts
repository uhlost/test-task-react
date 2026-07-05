import { useCRUD } from "@/shared/api/base"
import { ENDPOINT } from "../config/pokemons.config"
import type { DefaultResponse } from "../types/pokemons.types"

export function usePokemonsStore() {
  const { useAll } = useCRUD<DefaultResponse, DefaultResponse>(ENDPOINT, [
    "pokemons",
  ])

  const { data } = useAll()

  return {
    data,
  }
}