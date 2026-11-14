import { formatarMoeda } from '../formatadores/moeda.js'

const nomesCategorias = {
  alimentacao: 'Alimentação',
  transporte: 'Transporte',
  lazer: 'Lazer',
  outros: 'Outros',
}

function ListaGastos({ gastos }) {
  return (
    <section className="painel" aria-labelledby="titulo-lista">
      <h2 id="titulo-lista">Gastos</h2>
      {gastos.length === 0 ? (
        <p className="lista-vazia">Nenhum gasto cadastrado</p>
      ) : (
        <ul className="lista-gastos">
          {gastos.map((gasto) => (
            <li key={gasto.identificador} className="item-gasto">
              <div className="detalhes-gasto">
                <strong>{gasto.descricao}</strong>
                <span>{nomesCategorias[gasto.categoria]}</span>
              </div>
              <span className="valor-gasto">{formatarMoeda(gasto.valorCentavos)}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ListaGastos
