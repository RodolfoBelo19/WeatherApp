import { GlobalStyles } from "./styles/globalStyles";
// import img from "./assets/cloud.jpeg"; - versão 2
import { api } from "./Api";
import { useEffect, useState } from "react";


export const App = () =>  {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<Props>();

  const [allWeather, setAllWeather] = useState<Props>();

  // Depois criar listas de cidades de algumas regioes, como feito nas categorias do projeto netflix

  const handleSearch = (e:any) => {
    setCity(e.target.value)
    api.get(`${city}&lang=pt`)
      .then((response) => {
        setWeather(response.data)
      })
      .catch((err) => {
        console.error(`Ops! Ocorreu um erro! ${err}`)
      })
  }

  type Props = {
    location: {
      name: string,
      country: string,
      region: string
    } 
    current: {
      condition: {
        text: string
      }
      pressure_in: string
    }
  }

  return (
    <div className="App">
      <GlobalStyles />
      {/* Versão 2 <section style={{
        backgroundImage: `url(${img})`, 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh'}}> */}
        <section>
        <div>
          <h1>{allWeather?.location.country}</h1>
          <div className="header">
            <h1 className="title">Previsão do tempo</h1>
            {/* <div className="content" style={{backgroundColor: 'rgba(0,0,0,0.10)'}}> */}
            {
              weather ? (
                <div className="content">
                  <i className="fa-solid fa-xmark ico" />
                  <span className="sub_title__content">{weather.location.region} - {weather.location.country}{/*Niterói, RJ - Brasil*/}</span>
                  <h1 className="title_content">{weather.current.pressure_in}C <br /> {weather.current.condition.text}</h1>
                  <div className="grid-temp">
                    <div>
                      <span><strong><i className="fa-solid fa-arrow-up"/> 22 <i className="fa-solid fa-arrow-down"/> 16 </strong></span>
                      <span>Vento <strong>18km/h</strong></span>
                    </div>
                    <div>
                      <span>Sensação <strong>19C</strong></span>
                      <span>Humidade <strong>89%</strong></span>
                    </div>
                  </div>
                  <hr />
                  <br />
                  <div className="flex">
                    <div>
                      <span>Terça</span>  
                      <h6>17 28</h6>
                    </div>
                    <div>
                      <span>Quarta</span>
                      <h6>14 27</h6>
                    </div>
                    <div>
                      <span>Quinta</span>
                      <h6>16 32</h6>
                    </div>
                    <div>
                      <span>Sexta</span>
                      <h6>15 28</h6>
                    </div>
                    <div>
                      <span>Sábado</span>
                      <h6>19 29</h6>
                    </div>
                  </div>
                </div>
              )
              :
              null
            }
            <div className="search">
              <input onChange={handleSearch} type="text" placeholder="Insira aqui o nome da cidade" value={city}/><i className="fa-solid fa-magnifying-glass" />
            </div>
          </div>
        </div>

        <hr />

        <div className="city">
          <h1>Capitais</h1>
          <div className="grid">
            <div>
            <h6>Min Máx</h6>
              <h4>17 27 Rio de Janeiro</h4>
              <h4>16 32 São Paulo</h4>
              <h4>15 30 Santa Catarina</h4>
              <h4>13 28 Fortaleza</h4>
            </div>
            <div>
              <h6 className="responsive-none">Min Máx</h6>
              <h4>17 27 Rio de Janeiro</h4>
              <h4>16 32 São Paulo</h4>
              <h4>15 30 Santa Catarina</h4>
              <h4>13 28 Fortaleza</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

