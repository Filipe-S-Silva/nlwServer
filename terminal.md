### Arquivos que foram baixados
- npm init -y
- npm i typescript @types/node -D
- npx tsc --init
- ir ao google baixar os arquivos tsconfig base e pegar a versao do node
- npm i fastify @fastify/cors fatify-type-provider-zod zod

- extensao biome 
- npm i @biomejs/biome -D
- npx ultracite init (configurar biome basic)  

### Mudar o package.json

 "type": "module",


 "scripts": {
    "start": "node --env-file .env --experimental-strip-types --no-warnings src/server.ts",
    "dev": "node --env-file .env --experimental-strip-types --no-warnings --watch src/server.ts"
  }

### Criar um arquivo para o docker
- docker-compose.yml -> configura

- docker ps -a -> lista tudo
- rodar no terminal docker compose up -d

- npm i postgres

### ORM PARA AUXILIAR A CRIAR DATABASE

- npm i drizzle-orm
- npm i drizzle-kit -D
- npx drizzle-kit generate - rodar o sql
- npx drizzle-kit migrate - rodar o sql
- npx drizzle-kit studio - olha tudo nego 

### FZR O SEED DO DB

- o que é o seed - prepopula o bd
-npm i drizzle-seed -D