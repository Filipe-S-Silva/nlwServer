# 🚀 Backend API - Fastify, Drizzle ORM & Gemini AI

Um ecossistema de backend moderno e de alta performance, desenvolvido com **Node.js**, **Fastify** e **TypeScript** nativo. O projeto integra persistência de dados com **PostgreSQL** (via **Drizzle ORM**) e inteligência artificial generativa utilizando a API do **Google Gemini**.

---

## 🛠️ Tecnologias Utilizadas

* **Runtime:** Node.js (utilizando `--experimental-strip-types`)
* **Framework Web:** Fastify
* **Validação e Tipagem:** Zod + Fastify Type Provider
* **Banco de Dados:** PostgreSQL (via Docker)
* **ORM:** Drizzle ORM
* **Lint/Formatação:** Biome (`@biomejs/biome`)
* **IA:** SDK do Google Gemini (`@google/genai`)
* **Upload de Arquivos:** `@fastify/multipart`

---

## ⚙️ Pré-requisitos

Certifique-se de ter instalado em sua máquina:
* **Node.js** (versão 22.x ou superior recomendada para suporte nativo ao TypeScript)
* **Docker** e **Docker Compose**

---

## 🚀 Como iniciar o projeto

### 1. Instalação das dependências

Clone o repositório e instale as dependências executando:

```bash
npm install
```

Nota: Crie um arquivo .env na raiz do projeto com as suas variáveis de ambiente (credenciais do banco de dados, GEMINI_API_KEY, etc).

### 2. Configuração do Banco de Dados (Docker)

O projeto utiliza um arquivo docker-compose.yml para orquestrar o banco de dados. Para iniciar o serviço, rode:

```bash
docker compose up -d
```
  **Comandos úteis do Docker:**
  - `docker ps -a`: Lista todos os containers ativos.
  - `docker compose stop`: Pausa os serviços do banco de dados sem deletá-los.

### 3. Gerenciamento do Banco (Drizzle ORM)

Com o container do Postgres rodando, prepare as tabelas e popule o banco de dados com os seguintes comandos:

```bash
# Gera os arquivos SQL baseados no schema do projeto
npx drizzle-kit generate

# Aplica as alterações (migrations) no banco de dados
npx drizzle-kit migrate

# Popula o banco de dados com informações iniciais (Seed)
npm run db:seed
```

### 4. Executando a Aplicação

O projeto está configurado como um ES Module (`"type": "module"`) no `package.json` e não necessita de compiladores externos (`tsc` ou `ts-node`), pois utiliza o próprio Node para ler os arquivos TypeScript.

##### Modo de Desenvolvimento (Watch Mode):
```bash
npm run dev
```

##### Modo de Produção:
```bash
npm run start
```

### 🗄️ Drizzle Studio

Para inspecionar, editar e visualizar os dados salvos no seu banco de dados diretamente pelo navegador, utilize a interface visual nativa do Drizzle:

```bash
npx drizzle-kit studio
```
