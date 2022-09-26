## Introdução

* Estrutura de desenvolvimento parao o Frontend (UI).

### O que pretendo utilizado no projeto?

* [NodeJS](https://nodejs.org)
* [Typescript](https://www.typescriptlang.org/)
* [Scss](https://sass-lang.com/)
* [VueJS](https://v2.vuejs.org/)
* [Vuetify](https://vuetifyjs.com/)
* [Axios](https://axios-http.com/)

### Requisitos para rodar o UI (Set/2022)

* NodeJS (v16.16.0)
* Npm (v8.11.0) ou Nvm (Gerenciador de versões do NodeJS)

### Importante

* Este projeto depende de uma `api de backend`. Com uma `URL_BASE`

## Começo rápido

* Após baixar o repositório (código fonte) e com os requisitos instalados
* Abra o terminal e execute os passos a seguir para o modo de desenvolvimento

```shell
$ cd path/to/folder/project (e.g. /user/bumerbox/ui)
$ npm install
$ npm run serve
```

* A sua aplicação que estará disponível em [localhost:8080](http://localhost:8080)

### Coisas a saber:

* A pública que seu servidor `localhost` deve apontar `./public`.
* O raiz document root é a pasta `ui`
* Os arquivos de configuração estão localizados na pasta `raiz`
* O projeto utiliza LINT, ou seja, acusa erros em tempo de execução parando até a correção adequada

### Comandos a Saber

```shell
# Instalar as dependências
npm install

# Compilar para desenvolvimento com Hot-reload
npm run serve

# Compilar e Minificar para produção (pasta build)
npm run build

# Verificação de erros de código
npm run lint
```

### Dúvidas
Rovian Vieceli
<br/>
[rovianvieceli@gmail.com](mailto:rovianvieceli@gmail.com)
