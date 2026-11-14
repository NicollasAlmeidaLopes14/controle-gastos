import { formatarMoeda } from '../formatters/moeda.js'

function TotalGastos({ totalCentavos }) {
  return (
    <section className="painel total-gastos" aria-labelledby="titulo-total">
      <h2 id="titulo-total">Total de gastos</h2>
      <p className="valor-total">{formatarMoeda(totalCentavos)}</p>
    </section>
  )
}

export default TotalGastos
