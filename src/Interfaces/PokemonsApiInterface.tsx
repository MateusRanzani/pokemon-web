export interface PokemonsApiInterface {
  count: number,
  next: string,
  previous:null
  results: ListPokemonsInterface[]
}

export interface ListPokemonsInterface {
    name: string,
    url: string
  }

