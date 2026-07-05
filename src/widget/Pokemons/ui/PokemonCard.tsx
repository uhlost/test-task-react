import type { PokemonResponse } from "@/entities/pokemons/types/pokemons.types"

export function PokemonCard({ pokemon }: { pokemon: PokemonResponse }) {
  return (
    <>
      <div className="flex flex-col size-full gap-11 h-[297px]">
        <p className="font-bold text-[48px]/[100%] text-[#A0A0A0]">
          {pokemon.name}
        </p>
        <img
          className="h-[200px]"
          src={pokemon.sprites.front_default}
        />
      </div>
      <div className="flex flex-col justify-between">
        <p className="font-medium text-[#A0A0A0] text-[17px]/[150%]">
          id: {pokemon.id}
        </p>
        <p className="font-medium text-[#A0A0A0] text-[17px]/[150%]">
          height: {pokemon.height}
        </p>
        <p className="font-medium text-[#A0A0A0] text-[17px]/[150%]">
          attack:{" "}
          {pokemon.stats.find((item) => item.stat.name === "attack")?.base_stat}
        </p>
        <p className="font-medium text-[#A0A0A0] text-[17px]/[150%]">
          defense:{" "}
          {
            pokemon.stats.find((item) => item.stat.name === "defense")
              ?.base_stat
          }
        </p>
      </div>
    </>
  )
}
