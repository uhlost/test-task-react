export interface DefaultResponse {
  url: string
  name: string
}

export interface PokemonResponse {
  id: number
  name: string
  height: string
  stats: Stats[]
  sprites: {
    front_default: string
  }
}

interface Stats {
  base_stat: number
  effort: number
  stat: DefaultResponse
}
