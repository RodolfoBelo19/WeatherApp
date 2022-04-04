import { useState } from "react"
import { api } from "./Api"


// const 


export const City = () => {

    const [weatherCity, setweatherCity] = useState();

    api.get(`riodejaneiro&lang=pt`)
    .then((response) => {
        setweatherCity(response.data)
    })
    .catch((err) => {
        console.error(`Ops! Ocorreu um erro! ${err}`)
    })

}

