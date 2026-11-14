function FiltroGastos({ categoriaSelecionada, aoAlterarCategoria }) {
  return (
    <div className="painel campo">
      <label htmlFor="filtro-categoria">Filtrar por categoria</label>
      <select
        id="filtro-categoria"
        value={categoriaSelecionada}
        onChange={(evento) => aoAlterarCategoria(evento.target.value)}
      >
        <option value="">Todas as categorias</option>
        <option value="alimentacao">Alimentação</option>
        <option value="transporte">Transporte</option>
        <option value="lazer">Lazer</option>
        <option value="outros">Outros</option>
      </select>
    </div>
  )
}

export default FiltroGastos
