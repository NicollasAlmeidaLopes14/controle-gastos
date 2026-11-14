import { useState } from 'react'
import { validarGasto } from '../../dominio/gastos.js'
import { converterParaCentavos, formatarMoeda } from '../formatadores/moeda.js'

function FormularioGasto({ gastos, aoAdicionar }) {
  const [descricao, definirDescricao] = useState('')
  const [valor, definirValor] = useState('')
  const [categoria, definirCategoria] = useState('alimentacao')
  const [erros, definirErros] = useState({})

  function alterarValor(evento) {
    const texto = evento.target.value
    const valorCentavos = converterParaCentavos(texto)
    definirValor(valorCentavos === null ? texto : formatarMoeda(valorCentavos))
  }

  function enviarFormulario(evento) {
    evento.preventDefault()
    const valorCentavos = converterParaCentavos(valor)
    const novosErros = validarGasto(descricao, valorCentavos, gastos)
    definirErros(novosErros)

    if (Object.keys(novosErros).length > 0) return

    aoAdicionar({ descricao: descricao.trim(), valorCentavos, categoria })
    definirDescricao('')
    definirValor('')
  }

  return (
    <section className="painel" aria-labelledby="titulo-formulario">
      <h2 id="titulo-formulario">Novo gasto</h2>
      <form className="formulario-gasto" onSubmit={enviarFormulario} noValidate>
        <div className="campo">
          <label htmlFor="descricao">Descrição</label>
          <input
            id="descricao"
            name="descricao"
            type="text"
            placeholder="Ex.: Almoço"
            value={descricao}
            onChange={(evento) => definirDescricao(evento.target.value)}
            required
            aria-invalid={Boolean(erros.descricao)}
            aria-describedby={erros.descricao ? 'erro-descricao' : undefined}
          />
          {erros.descricao && <p id="erro-descricao" className="mensagem-erro" role="alert">{erros.descricao}</p>}
        </div>
        <div className="campo">
          <label htmlFor="valor">Valor (R$)</label>
          <input
            id="valor"
            name="valor"
            type="text"
            inputMode="decimal"
            placeholder="R$ 0,00"
            value={valor}
            onChange={alterarValor}
            required
            aria-invalid={Boolean(erros.valor)}
            aria-describedby={erros.valor ? 'erro-valor' : undefined}
          />
          {erros.valor && <p id="erro-valor" className="mensagem-erro" role="alert">{erros.valor}</p>}
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select id="categoria" name="categoria" value={categoria} onChange={(evento) => definirCategoria(evento.target.value)}>
            <option value="alimentacao">Alimentação</option>
            <option value="transporte">Transporte</option>
            <option value="lazer">Lazer</option>
            <option value="outros">Outros</option>
          </select>
        </div>
        <button type="submit">Adicionar gasto</button>
      </form>
    </section>
  )
}

export default FormularioGasto
