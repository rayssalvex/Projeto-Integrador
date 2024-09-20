# Aplicação Web de Compra de Livros 📚

## ✍🏼 Descrição
Esta é uma aplicação web MERN (MongoDB, Express, React, Node.js) desenvolvida para a compra de livros e utilizada como Projeto Integrador de conclusão de curso no Rio Pomba Valley. Os usuários podem navegar por uma lista de livros disponíveis, visualizar detalhes específicos de cada livro, cadastrar novos livros para troca e gerenciar suas próprias ofertas.

## 📋 Funcionalidades
- **Listagem de Livros**: Os usuários podem visualizar uma lista de todos os livros disponíveis para troca ou compra.
- **Detalhes do Livro**: Ao clicar em um livro, os usuários podem ver informações detalhadas como autor, descrição, preço e condição do livro.
- **Gerenciamento de Livros**: Os usuários podem editar ou remover livros que eles próprios cadastraram.
- **Autenticação e Autorização**: O sistema usa autenticação JWT para gerenciar as permissões de usuários.
- **Sistema de Pagamento Integrado**: O Stripe, em modo de desenvolvimento, permite testar e simular transações sem movimentar dinheiro real. É possível criar e testar pagamentos, assinaturas e reembolsos usando cartões de teste fornecidos pela plataforma.
- **Chat Integrado**: Permite conversa direta entre usuários e o suporte da aplicação.

## 💻 Tecnologias Utilizadas
- **Frontend**: React.js, Vite, Axios para chamadas de API, CSS, HTML, Slick Carousel, JavaScript.
- **Backend**: Node.js com Express.js, MVC, JWT, Router, JSON, integração com MongoDB (mongoose) para armazenamento de dados.
- **Banco de Dados**: MongoDB para gerenciar as informações dos livros e usuários.
- **Autenticação**: JWT (JSON Web Token) para autenticação e autorização.
- **Outras Ferramentas**: Vite para desenvolvimento frontend, Git e GitHub para controle de versão, ContextAPI para gerenciamento de estado.

## 📦 Instalação

1. Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/rayssalvex/Projeto-Integrador-Final.git

2.Navegue até a pasta do backend e instale as dependências:
```
cd ./backend
npm install
```

3. Para uso pessoal configure as variáveis de ambiente no arquivo .env:
```
MONGODB_URI=sua_conexao_mongodb
JWT_SECRET=sua_chave_secreta
STRIPE_SECRET_KEY=sua_chave
```
4.Inicie o servidor backend:
```
npm run server
```
5.Em um novo terminal, navegue até a pasta do frontend e instale as dependências:
```
cd ./frontend
npm install
```
6.Inicie o servidor frontend:
```
npm run dev
```
## 📱 Uso
- Acesse a aplicação em https://localhost:5173.
- Crie uma conta com e-mail e senha e faça login.
- Navegue pelos livros, adicione ao carrinho e faça compras simuladas.

## 🌙 Próximos Passos
Apesar do final do curso, continuarei a aprimorar o projeto com esses passos futuros:

- Gerenciamento de estoque.
- Recomendação personalizada com base nas compras do usuário.
- Busca avançada e filtros (melhorar o filtro de pesquisas).
- Aprimorar a experiência mobile.
- Garantir que o site seja totalmente responsivo, com navegação fluida em dispositivos móveis.
- Melhorias de segurança no backend.
  
## 📧 Contato
Para mais informações, entre em contato:

- Nome: Rayssa dos Santos Alves
- E-mail: rayssa.alves1608@gmail.com
- LinkedIn: www.linkedin.com/in/rayssa-santos-alves

