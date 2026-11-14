function FormularioGasto() {
  return (
    <section className="painel" aria-labelledby="titulo-formulario">
      <h2 id="titulo-formulario">Novo gasto</h2>
      <form className="formulario-gasto">
        <div className="campo">
          <label htmlFor="descricao">Descrição</label>
          <input
            id="descricao"
            name="descricao"
            type="text"
            placeholder="Ex.: Almoço"
          />
        </div>
        <div className="campo">
          <label htmlFor="valor">Valor (R$)</label>
          <input
            id="valor"
            name="valor"
            type="number"
            min="0"
            step="0.01"
            placeholder="0,00"
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select id="categoria" name="categoria">
            <option value="alimentacao">Alimentação</option>
            <option value="transporte">Transporte</option>
            <option value="lazer">Lazer</option>
            <option value="outros">Outros</option>
          </select>
        </div>
        <button type="button" disabled>Adicionar gasto</button>
      </form>
    </section>
  )
}

export default FormularioGasto
