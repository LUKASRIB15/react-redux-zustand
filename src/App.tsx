import "./styles/global.css"
import {Provider as ReduxProvider} from "react-redux"
import { store } from "./store";
import { Player } from "./pages/Player";

export function App() {

  return (
    // ReduxProvider funciona exatamente como no ContextAPI,
    // para afetar apenas nos filhos desse provider
    // <ReduxProvider store={store}>
    //   <Player/>
    // </ReduxProvider>
    <Player/>
  )
}

