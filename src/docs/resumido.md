# primeiros passos

1. executar `npm init -y` : para criar o package.json

2. instalar dependências:
    - `npm i express` : para instalar o express
    - `npm i dotenv` : para instalar o env

preparar o ambiente do typescript

1. `npm i -D typescript` : para instalar o typescript

2. `npm i @types/express` : para instalar os tipos do express na versão typescript

3. `npm i @types/node` : é a mesma coisa que fez no 2° passo so que agora é para o node

para começar(rodar) o typescript

1. `npx tsc --init`

2. no arquivo `tsconfig.json`, procure por:

```
// "rootDir": "./src",
// "outDir": "./dist",
```

e mude para :

```
"rootDir": "./src",
"outDir": "./build",
```

3. no arquivo `package.json` procure por :

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

e mude para :

```
"scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

e instale o nodemon :

```
npm i nodemon -g
```

e depois instale :

```
npm i -D ts-node
```

---

A pasta : `dtos` serve para quardar as rotas de APIs
