import { useEffect, useState } from 'react'
import { filtrarGastosPorCategoria, somarGastos } from './dominio/gastos.js'
import { carregarGastos, salvarGastos } from './infraestrutura/armazenamentoGastos.js'
import FormularioGasto from './apresentacao/componentes/FormularioGasto.jsx'
import FiltroGastos from './apresentacao/componentes/FiltroGastos.jsx'
import ListaGastos from './apresentacao/componentes/ListaGastos.jsx'
import TotalGastos from './apresentacao/componentes/TotalGastos.jsx'
import './App.css'

function App() {
  const [gastos, definirGastos] = useState(carregarGastos)
  const [categoriaSelecionada, definirCategoriaSelecionada] = useState('')
  const gastosFiltrados = filtrarGastosPorCategoria(gastos, categoriaSelecionada)

  useEffect(() => {
    salvarGastos(gastos)
  }, [gastos])

  function adicionarGasto(gasto) {
    definirGastos((gastosAtuais) => [...gastosAtuais, { ...gasto, identificador: crypto.randomUUID() }])
  }

  function removerGasto(identificador) {
    definirGastos((gastosAtuais) =>
      gastosAtuais.filter((gasto) => gasto.identificador !== identificador),
    )
  }

  return (
    <main className="controle-gastos">
      <h1>Controle de gastos</h1>
      <FormularioGasto gastos={gastos} aoAdicionar={adicionarGasto} />
      <FiltroGastos
        categoriaSelecionada={categoriaSelecionada}
        aoAlterarCategoria={definirCategoriaSelecionada}
      />
      <ListaGastos
        gastos={gastosFiltrados}
        categoriaSelecionada={categoriaSelecionada}
        aoRemover={removerGasto}
      />
      <TotalGastos totalCentavos={somarGastos(gastosFiltrados)} />
    </main>
  )
}

export default App
