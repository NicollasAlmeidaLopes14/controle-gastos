import { formatarMoeda } from '../formatters/moeda.js'

const nomesCategorias = {
  alimentacao: 'Alimentação',
  transporte: 'Transporte',
  lazer: 'Lazer',
  outros: 'Outros',
}

function ListaGastos({ gastos, categoriaSelecionada, aoRemover }) {
  return (
    <section className="painel" aria-labelledby="titulo-lista">
      <h2 id="titulo-lista">Gastos</h2>
      {gastos.length === 0 ? (
        <p className="lista-vazia" role="status">
          {categoriaSelecionada
            ? 'Não existem gastos nesta categoria.'
            : 'Nenhum gasto cadastrado'}
        </p>
      ) : (
        <ul className="lista-gastos">
          {gastos.map((gasto) => (
            <li key={gasto.identificador} className="item-gasto">
              <div className="detalhes-gasto">
                <strong>{gasto.descricao}</strong>
                <span>{nomesCategorias[gasto.categoria]}</span>
              </div>
              <span className="valor-gasto">{formatarMoeda(gasto.valorCentavos)}</span>
              <button
                type="button"
                className="botao-remover"
                aria-label={`Remover gasto: ${gasto.descricao}`}
                onClick={() => aoRemover(gasto.identificador)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ListaGastos
