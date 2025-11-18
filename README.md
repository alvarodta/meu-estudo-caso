# AV2

Este repositório contém a entrega completa da AV2 da disciplina de Programação Web e Mobile, composta por:

- Aplicação Web (React + Vite + Axios + React Router DOM + Vitest)
- Aplicação Mobile (Expo + React Native + Axios + Expo Router)
- Consumo de API REST pública
- Testes automatizados na versão Web
- Deploy da aplicação Web na Vercel

A estrutura inicial deste projeto foi baseada no material fornecido na Atividade 8, que já disponibilizava as pastas web/ e mobile/.
A partir desse esqueleto, o projeto foi expandido e aprimorado conforme as exigências da AV2.

--------------------------------------------------------------------------------

Estrutura do Repositório

meu-estudo-caso/
│
├── web/        # Aplicação Web (React + Vite)
├── mobile/     # Aplicação Mobile (Expo + React Native)
└── README.md   # Este arquivo

--------------------------------------------------------------------------------

Parte 1 – Aplicação Web (React + Vite)

Tecnologias Utilizadas
- React
- Vite
- React Router DOM
- Axios
- React Bootstrap
- Vitest
- React Testing Library
- JSDOM

Funcionalidades Implementadas

Listagem de Alunos
A tela inicial realiza uma requisição ao endpoint:
GET https://proweb.leoproti.com.br/alunos

Exibe:
- ID
- Nome
- E-mail
- Link para detalhes do aluno

Detalhes do Aluno
Requisição:
GET https://proweb.leoproti.com.br/alunos/{id}

Exibe:
- ID
- Nome
- Turma
- Curso
- Matrícula

Navegação entre Rotas
Rotas implementadas:
/             → Lista de Alunos
/aluno/:id    → Detalhes do Aluno

Consumo da API REST
Utilização de instância Axios:
const api = axios.create({
  baseURL: 'https://proweb.leoproti.com.br',
});

Testes Automatizados
Testes implementados:
- Exibição do estado "Carregando"
- Renderização da lista após resposta da API
- Exibição de erro em caso de falha
- Mock de Axios

Para executar:
npm test
Ou:
npm run test:ui

Deploy no Vercel
Aplicação Web publicada conforme orientações da AV2.
(Adicionar link após publicação)

--------------------------------------------------------------------------------

Parte 2 – Aplicação Mobile (Expo + React Native)

Tecnologias Utilizadas
- React Native
- Expo
- Axios
- Expo Router

Funcionalidades Implementadas

Tela Inicial – Lista de Alunos
GET https://proweb.leoproti.com.br/alunos

Exibe:
- Nome
- ID
- Acesso para detalhes

Tela de Detalhes
Rota:
 /aluno/[id]

Exibe:
- ID
- Nome
- Turma
- Curso
- Matrícula

Consumo da Mesma API REST
Mesma instância Axios da Web.

--------------------------------------------------------------------------------

Como Executar o Projeto

Aplicação Web:
cd web
npm install
npm run dev

Aplicação Mobile:
cd mobile
npm install
npm start

--------------------------------------------------------------------------------

Como Rodar os Testes (Web)

cd web
npm test
ou:
npm run test:ui

--------------------------------------------------------------------------------

Rotas Implementadas

Web:
/             → Lista de Alunos
/aluno/:id    → Detalhes do Aluno

Mobile:
/                 → Lista de Alunos
/aluno/[id]       → Detalhes do Aluno

--------------------------------------------------------------------------------

Observação Importante
O projeto foi iniciado a partir da Atividade 8, que já continha a estrutura base.  
