# Contexto do repositório

- Este ainda é um projeto inicial React/Vite com um único pacote, não um controle de gastos implementado. `README.md` contém a documentação do modelo inicial; `RELATORIO.MD` é um relatório acadêmico sem respostas, não uma evidência de que as funcionalidades descritas existem. Deixe as respostas do relatório para o usuário.
- Fluxo de execução: `index.html` → `src/main.jsx` → `src/App.jsx`, renderizado com o `StrictMode` do React. Os estilos globais são carregados de `src/index.css`; `App.jsx` importa `src/App.css`.
- O código usa JavaScript/JSX com módulos ES. A instalação dos pacotes `@types/react*` não significa que TypeScript ou a verificação de tipos estejam configurados.

## Comandos e verificação

- Use npm e o `package-lock.json` existente: execute `npm ci` para instalar as versões fixadas no arquivo. Vite, seu plugin React e Oxlint exigem Node `^20.19.0 || >=22.12.0`.
- `npm run dev` inicia o Vite. `npm run build` gera a pasta `dist/`, ignorada pelo Git; execute o build antes de `npm run preview` para visualizar a versão de produção.
- As verificações automatizadas disponíveis são `npm run lint` (Oxlint, não ESLint) e `npm run build`. Não há executor de testes, script de testes, script de verificação de tipos ou formatador configurado; confira alterações na interface pelo navegador usando o servidor de desenvolvimento.
- Lint de um arquivo específico: `npm run lint -- src/App.jsx`. `.oxlintrc.json` aplica as regras de hooks do React e emite avisos para exportações que não sejam componentes, permitindo exportações de constantes.

## Regras
- Responda e comente os códigos sempre em Pt-br;
- Utilize a arquitetura por camadas (layers) para o desenvolvimento do projeto;
- Não adicione NADA além do que for pedido;
- Não instale bibliotecas novas;
- Não crie e nem edite o arquivo RELATORIO.md;
- Todas as variáveis também devem estar em pt-br;