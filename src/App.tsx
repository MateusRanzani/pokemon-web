import { useEffect, useState } from "react";

const axios = require('axios').default;


interface PokemonsApiInterface {
  count: number,
  next: string,
  previous:null
  results: ListPokemonsInterface[]
}

interface ListPokemonsInterface {
  name: string,
  url: string
}

export function App() {
  let [listPokemonsAPI, setListPokemonsAPI] = useState<PokemonsApiInterface>({} as PokemonsApiInterface)


  const getPokemonsApi = () => {
  axios.get('https://pokeapi.co/api/v2/pokemon')
  .then((res: any) => {
    setListPokemonsAPI(res.data)
    console.log(listPokemonsAPI)
  })
  .catch( (error: any) => console.log(error))
  }


  useEffect(() => {
    getPokemonsApi()
  }, [])


  return (
    <div className="App">
     <h1>Hello World</h1>
    </div>
  );
}

export default App;
