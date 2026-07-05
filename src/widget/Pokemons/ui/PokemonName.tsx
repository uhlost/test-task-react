import type { DefaultResponse } from "@/entities/pokemons/types/pokemons.types"

export function PokemonName({
  pokemon,
  showPokemon,
}: {
  pokemon: DefaultResponse
  showPokemon: (url: string) => void
}) {
  return (
    <div
      onClick={() => showPokemon(pokemon.url)}
      className="h-15 w-fit cursor-pointer flex items-center border rounded-[44px] p-5 bg-[#1986EC]"
    >
      <p className="text-[#ffff]">{pokemon.name}</p>
    </div>
  )
}
