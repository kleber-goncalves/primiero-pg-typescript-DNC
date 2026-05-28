# Projeto: primeiros passos com TypeScript (Back-end)

Descrição
 - **Projeto**: Exemplo simples de back-end em TypeScript feito durante o curso "Introdução ao TypeScript para Back-End" da DNC.
 - **Objetivo**: demonstrar estrutura mínima de uma API com Express, organização por DTOs, handlers e helpers, e fluxo de build em TypeScript.

Sobre o curso
 - O projeto acompanha os conceitos do curso: configuração do TypeScript, tipagem para Express, organização de rotas/DTOs e execução em modo de desenvolvimento e produção.

Pré-requisitos
 - Node.js (>= 18 recomendado)
 - npm

Instalação
1. Instale dependências:

```
npm install
```

2. Dependências de desenvolvimento (já presentes no projeto):

```
npm install --save-dev typescript ts-node @types/express @types/node
```

Scripts úteis (definidos em `package.json`)
- **build**: `npx tsc` — compila TypeScript para JavaScript.
- **start**: `node dist/index.js` — executa a versão compilada (produção).
- **dev**: `nodemon src/index.ts` — desenvolvimento com recarga automática.

Observação importante
- O arquivo `tsconfig.json` atualmente possui `outDir` configurado como `./build`, mas o script `start` espera a saída em `dist` (`node dist/index.js`). Recomenda-se alinhar um dos dois:
  - alterar `tsconfig.json` para `"outDir": "./dist"`, ou
  - alterar o script `start` em `package.json` para `node build/index.js`.

Estrutura do projeto (resumo)
- **src/index.ts**: ponto de entrada da aplicação.
- **src/dtos/**: definições de tipos/DTOs para requests e responses.
- **src/helpers/**: funções utilitárias (ex.: cálculos, formatações).
- **src/utils/**: handlers para rotas (getHandler, postHandler).

Como executar
 - Desenvolvimento (hot-reload):

```
npm run dev
```

 - Build e execução em produção:

```
npm run build
npm start
```

O que o projeto implementa
 - Handlers básicos para requisições GET e POST (veja `src/utils/getHandler.ts` e `src/utils/postHandler.ts`).
 - DTOs para validar/organizar forma de entrada e saída em `src/dtos`.
 - Helpers para cálculos e formatação em `src/helpers`.

Próximos passos sugeridos
 - Escolher e alinhar o `outDir` (`dist` ou `build`) para evitar inconsistências.
 - Adicionar exemplos de rotas no README com URLs e payloads.
 - Incluir um arquivo `.env.example` se usar variáveis de ambiente.

Contribuição
 - Crie um branch, faça commits e abra um pull request.

Licença
 - (Adicione aqui a licença do projeto, se houver.)

---
Arquivo original: estrutura de instruções com passos iniciais para configurar TypeScript e dependências.
