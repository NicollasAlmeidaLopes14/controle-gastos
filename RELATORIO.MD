# Relatório · Controle de Gastos

Nome: Nicollas Almeida Lopes
Modelo usado: GPT-6.1 Sol

## Passo 1 · AGENTS.md
1.1 O que o /init descobriu sozinho sobre o projeto?
Resposta: Descobriu que o projeto é uma estrutura inicial em React + Vite, o fluxo da aplicação, as finalidades de cada arquivo .md e os comandos de build do projeto.

1.2 Qual regra você adicionou ao AGENTS.md e por quê?
Resposta: Para que, sempre que adicionar comentários no código, eles sejam em Pt-br; Utilizar a arquitetura por camadas (layers) porque é padrão de mercado e de fácil compreensão; não adicionar nada além do que for pedido, vale tanto para funcionalidade quanto para bibliotecas; não editar o arquivo do relatório acadêmico. os nomes das variáveis serem em português-br também.

## Passo 2 · Estrutura
2.1 Quais arquivos o plano criou ou alterou?
Resposta: FormularioGasto.jsx, ListaGastos.jsx, TotalGastos.jsx, App.jsx, App.css, index.css
2.2 Qual regra do AGENTS.md você viu sendo aplicada?
Resposta: Todas as regras foram seguidas/aplicadas corretamente.

## Missão 1 · Adicionar
M1.1 Como o app trata "12,50" com vírgula? Quem decidiu isso: você ou o agente?
Resposta: Trata a soma exata dos valores decimais. Isso foi decidido por mim.
M1.2 Quantas tool calls a missão usou?
Resposta: 7

## Missão 2 · Total
M2.1 Quanto deu 0,10 + 0,20 no app?
Resposta: 0,30.
M2.2 Por que 0.1 + 0.2 não dá exatamente 0.3 no JavaScript?
Resposta: Porque os computadores armazenam números decimais na base binária e não na decimal, causando dízimas binárias infinitas.

## Missão 3 · Remover
M3.1 O agente mudou algo que você não pediu? O quê?
Resposta: Não
M3.2 Como o código sabe qual gasto remover?
Resposta: O identificador do gasto que quero remover é passado como parâmetro na função removerGasto.

## Missão 4 · Filtrar
M4.1 Qual foi o seu prompt da tentativa B?
Resposta: Planeje um filtro por categoria que deverá listar somente os gastos por categoria. Caso não haja gastos na categoria filtrada, deve informar que não existem gastos naquele categoria. Ao adicionar um gasto com uma categoria selecionada, deve preservar a categoria selecionada, ou seje, ao listar os gastos pela categoria x, mas adicionando um gasto na categoria y, a lista deve continuar mostrando os gastos da categoria x.
M4.2 Qual tentativa gerou o melhor plano, A ou B? Por quê?
Resposta: Os dois foram bem parelhos. Acredito que por estar utilizando um modelo excelente, só de colococar o prompt A ele já sugeriu exatamento uma filtragem por categoria com bons detalhes, mas pelo fato do segundo prompt estar mais completo com aquilo que quero, acabei optando por ele.

## Bônus · Salvar
B.1 Onde o localStorage guarda os dados?
Resposta: O localStorage guarda os dados no navegador.
B.2 Por que os gastos não aparecem em outro navegador?
Resposta: Porque ele fica vinculado exclusivamente à origem do site.

## Reflexão final
R.1 Sem olhar o código, explique como um dos seus componentes recebe e altera os gastos.
Resposta: O TotalGastos.jsx recebe os valores através de um parâmetro onde o valor está em centavos para realizar a formatação através do utilitário moeda.js e mostrar o valor devidamente formatado. No App.jsx, ao chamar o componente do total, é passado como prop a função que soma todos os valores dos gastos.
R.2 Em que momento você aceitou algo sem entender?
Resposta: Nenhum. Tudo que foi pedido eu analisei o código e busquei entender
R.3 Quais decisões foram suas e quais foram do agente?
Resposta: Filtro por categoria ficar acima do componente de listagem dos gastos e, acredito que a mais importante, trabalhar sempre com os valores em centavos para realizar a formatação da moeda.
R.4 O que continuaria valendo se você trocasse o modelo?
Resposta: Praticamente tudo, mas acredito que a tratativa dos valores em centavos provavelmente mudaria, pois foi escolha do modelo.