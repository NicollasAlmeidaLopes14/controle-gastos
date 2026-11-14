import { useState } from 'react'
import { somarGastos } from './dominio/gastos.js'
import FormularioGasto from './apresentacao/componentes/FormularioGasto.jsx'
import ListaGastos from './apresentacao/componentes/ListaGastos.jsx'
import TotalGastos from './apresentacao/componentes/TotalGastos.jsx'
import './App.css'

function App() {
  const [gastos, definirGastos] = useState([])

  function adicionarGasto(gasto) {
    definirGastos((gastosAtuais) => [...gastosAtuais, { ...gasto, identificador: crypto.randomUUID() }])
  }

  return (
    <main className="controle-gastos">
      <h1>Controle de gastos</h1>
      <FormularioGasto gastos={gastos} aoAdicionar={adicionarGasto} />
      <ListaGastos gastos={gastos} />
      <TotalGastos totalCentavos={somarGastos(gastos)} />
    </main>
  )
}

export default App
