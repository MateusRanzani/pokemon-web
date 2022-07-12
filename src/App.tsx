
import Page from "./Components/Homepage/Content/Page";
import { GlobalStyle } from "./Styles/global";
import {Routes , Route, Link} from "react-router-dom"
import PageTwo from "./Components/PageTwo/Page";
import { PokemonsProvider } from "./PokemonsContext";

export function App() {
  return (
    <PokemonsProvider>

    <Routes>
      <Route  path="" element={<Page/>}/>
      <Route  path="/pagetwo" element={<PageTwo/>}/>
    </Routes>
    
    <GlobalStyle />

    </PokemonsProvider>
  );
}

export default App;
