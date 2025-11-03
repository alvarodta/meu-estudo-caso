Estudo de Caso – Rotas (Web e Mobile)

Descrição
Aplicação dividida em duas partes: Web (React + Vite + React Router) e Mobile (Expo + React Navigation). A Web lista produtos e abre uma tela de detalhes via /product/:id. O Mobile faz o mesmo com navegação de pilha (Home → Details).

Estrutura
/meu-estudo-caso
  web/    (React + Vite + React Router)
  mobile/ (Expo + React Navigation)

Como executar – Web
cd web
npm install
npm install react-router-dom
npm run dev

Rotas Web
/                 lista de produtos
/product/:id      detalhes do produto

Como executar – Mobile
cd mobile
npm install
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
npm install @react-navigation/native-stack
npx expo start

Rotas Mobile
Home       lista de produtos
Details    detalhes do produto

Autor
Álvaro Daniel Teixeira de Almeida


