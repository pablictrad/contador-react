import { useCallback, useState } from "react"
import { Incremntar } from "./Incremntar"


export const CallBackComponent = () => {

  const [counter, setCounter] = useState(0)

  const incrementarPadre = useCallback((val) => {
    setCounter(valSetCounter => valSetCounter + val)
        
},[])
return (
  <>
    <h1> Contador: {counter}</h1>
    <Incremntar increment={incrementarPadre} />
  </>
)
}
