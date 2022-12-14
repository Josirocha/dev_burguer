<p align="center">
<img src="./src/assets/images/dev_burguers_capa.gif" alt="dev burguer gif" width="500"/>
</p>

### Olá, pessoa! Seja bem-vinda ao repositório do nosso projeto de final de módulo 5 do curso de Desenvolvimento Web Full Stack da Resilia Educação!

## 📑Build da Aplicação no Vercel
[Dev Burguer](https://dev-burguer.vercel.app/)

## 📋 Proposta do projeto

**Construir, usando a biblioteca React, um site:**

-   utilizando endpoints da API criada no módulo 4 com Node.Js e Express (confira [aqui](https://api-dev-burguer.herokuapp.com/produtos) a api que usamos);
-   utilizando o README.md do repositório para documentação do projeto;
-   utilizando a biblioteca react-router-dom para roteamento das páginas;
-   utilizando CSS Grid no layout de pelo menos uma página;
-   contendo uma animação CSS para carregamento inicial do site (sem biblioteca).

**O site também deveria ter as funcionalidades básicas do CRUD:**

-   Página para listar os cadastros com opção de busca;
-   Página para incluir um novo registro;
-   Página para editar os cadastros;
-   Opção de excluir itens cadastrados.


## 📦 Packages <a id="packages"></a>

 Foi usado na construção do projeto:
 
  - [Axios](https://axios-http.com/) - v. 0.27.2
  - [Material UI](https://mui.com/material-ui/getting-started/overview/) - v. 5.10.4
  - [React Router Dom](https://reactrouter.com/en/main) - v. 6.3.0
  - [React Toastify](https://www.npmjs.com/package/react-toastify) - v. 9.0.8
  - [Node.js](https://nodejs.org/pt-br/) - v. 16.15.1
  - [React](https://reactjs.org/) - v. 18.2.0

---

 ## 🛠️ Instalação <a id="instalacao"></a>
 
 Para instalar o projeto, certifique-se de ter estes pré-requisitos:
 - Node.Js v16.17.0
 - NPM v8.15.0
 
Em seguida, abra o terminal e  execute os comandos:

1. para clonar o projeto:

```
git clone https://github.com/Josirocha/dev_burguer.git
```

2. entrar na pasta em que o projeto foi criado:

```
cd dev_burguer
```

3. Instalar as dependências do projeto:

```
npm install
```

4. Para iniciar a aplicação:

```
npm run dev
```

## 🛣️ Endpoints utilizados <a id="rotas"></a>

---

-   Rota `'/'` -> Nesse endpoint temos todas as informações sobre a Dev Burguer.
-   Rota `'/sobre'` -> Aqui temos informações sobre os desenvolvedores do projeto.
-   Rota `'/cardapio'` -> Nesse endpoint estão as operações do CRUD, onde você poderá adicionar, deletar, atualizar e pesquisar produtos no cardápio. No header, ele só vai aparecer quando o usuário estiver logado.
-   Rota `'/login'` -> Página destinada ao login do usuário. É preciso inserir email e senha (que devem estar previamente cadastrados). O login pega as informações que foram salvas no localStorage através do cadastro. Observação: o mock foi feito porque não tínhamos a entidade cadastro e login na API.
-   Rota `'/cadastro'` -> Página para o registro de usuário. As informações são salvas no localStorage.


## 💻 Time de desenvolvimento <a id="time"></a>

| <img width="100" src="https://avatars.githubusercontent.com/u/86576674?s=96&v=4">  | <img width="100" src="https://avatars.githubusercontent.com/u/102330429?v=4"> | <img width="100" src="https://avatars.githubusercontent.com/u/102763035?v=4"> | <img width="100" src="https://avatars.githubusercontent.com/u/101817310?v=4"> |
| ------------- | ------------- | ------------- | ------------- |
| 🌮**Alonso Estevam**      | 🍟 **Jiulie Vitória**     |🥪 **Josiane Rocha** | 🍔 **Willian Carvalho**|
| <a href="https://github.com/alonso-estevam" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/></a>      | <a href="https://github.com/JiulieVitoria" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/></a>      |<a href="https://github.com/Josirocha" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/></a>  |<a href="https://github.com/willcrvlh" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/></a> |
| <a href="https://www.linkedin.com/in/alonso-estevam" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/></a>      | <a href="https://www.linkedin.com/in/jiulie-vitoria/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/></a>    | <a href="https://www.linkedin.com/in/josiane-r-s-lima-santos-10202971/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/></a> | <a href="https://www.linkedin.com/in/willcrvlh" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/></a>|

