//rac

import Component1 from "./components/component1"

//Buena practica para enviar al main la applicacion
const App = () => {
  return (
    <>
    <Component1 text={"Texto desde propiedades"} color="red"></Component1>
    </>
  )
}

export default App
