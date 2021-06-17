# Aplicação | Controle de estoque
-----
## Uso da aplicação
git clone https://github.com/Sousa83/inventory-control
    
### Api 
    rode o script SQL que está em api/src no mysql.
    sete as configurações de host, username e password. Se for necessário, mude port e o database para o que for melhor.
    npm i. 
    npm start -> Api estará no ar

### Front-end
    yarn install
    quasar dev -> A aplicação estará no ar

## Api | Organização de pastas
    src
        cases
            Todos os casos (ações possívels) para o endpoint de product
        controllers
            Controllers da aplicação
        dtos
            DTOs usados para facilitar o envio de dados à api   
        entities
            Entities (models) da aplicação
        repositories
            implementations
                Implementação das interfaces repositórios
            interfaces de repoistórios
        shared
            container
                container que vai ter registrado todos as interfaces e implementações para injetar a dependência
            Errors
                Classes de erros da aplicação
            typeorm
                todas as configuarções necessárias para usar o typeorm. No caso, apenas criei a conexão usando as configurações dadas no ormconfig.json
            index.ts
            routes.ts 
    .eslint.json
    ormconfig.json
    package.json
    package-lock.json
    tsconfig.json

## Front-end | Organização de pastas
    .quasar
        arquivos de configuração da aplicação quasar
    public
        icones gerados automáticamente pelo quasar
    src
        assets
            imagens das bibliotecas usadas para construção da aplicação
        boot
            arquivos de inicialização, que precisam ser executados antes da aplicação iniciar
        components
            dialogs
                dialogs usados pela aplicação, no caso só há o DeleteDialog.vue
            componentes que podem ser reutilizados
        layouts
            Layouts base da aplicação
        pages
            Páginas da aplicação
        router
            arquivos para definir qual componente ou layout estará na rota
        store
            modules
                configuração de estado do modulo
            adição dos modulos no Vuex.Store
        App.vue
        index.template.html
    ... Arquivos padrões, gerados pelo quasar  
