import { usePokemonsStore } from "@/entities/pokemons"
import type { PokemonResponse } from "@/entities/pokemons/types/pokemons.types"
import { PokemonCard, PokemonName } from "@/widget/Pokemons"

export function PokemonsPage() {
  const { data } = usePokemonsStore()
  const [currPokemon, setCurrPokemon] = useState<PokemonResponse | undefined>()

  const showPokemon = useCallback(async (url: string) => {
    const response = await fetch(url)
    const res: PokemonResponse = await response.json()

    if (res) setCurrPokemon(res)
  }, [])

  return (
    <div className="grid px-3 pb-3 grid-cols-2 h-full gap-3 justify-center items-center">
      <div className="flex gap-2.5 flex-wrap">
        {data?.results &&
          data?.results.length > 0 &&
          data.results.map((item) => (
            <PokemonName
              showPokemon={showPokemon}
              key={item.url}
              pokemon={item}
            />
          ))}
      </div>
      <div className="flex flex-col gap-11 h-[500px] p-11 h-full bg-[#000000]">
        {currPokemon && <PokemonCard pokemon={currPokemon} />}
      </div>
    </div>
  )
}
