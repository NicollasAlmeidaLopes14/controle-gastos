import FormularioGasto from './apresentacao/componentes/FormularioGasto.jsx'
import ListaGastos from './apresentacao/componentes/ListaGastos.jsx'
import TotalGastos from './apresentacao/componentes/TotalGastos.jsx'
import './App.css'

function App() {
  return (
    <main className="controle-gastos">
      <h1>Controle de gastos</h1>
      <FormularioGasto />
      <ListaGastos />
      <TotalGastos />
    </main>
  )
}

export default App
