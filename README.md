# 🌐 Site Institucional da Neurostack

# NeuroStack — Site Institucional

**TL;DR:** Site institucional e vitrine de serviços da NeuroStack, focado em performance, SEO e experiência do usuário.

| **Demo** | **Repositório** |
|----------|---|
| 🌐 [neurostack.com.br](https://www.neurostack.com.br) | 🔗 [DevBielCastro/neurostack-site-pessoal](https://github.com/DevBielCastro/neurostack-site-pessoal) |

---

## 🛠️ Stack de Tecnologias

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Internacionalização (i18n):** `next-intl`
- **Deploy:** Vercel

---

## 🎯 O Problema Resolvido

A NeuroStack precisava de uma vitrine corporativa digital que fosse capaz de:
1.  Comunicar claramente seus serviços, portfólio e proposta de valor.
2.  Manter um altíssimo padrão de performance e SEO para garantir boa visibilidade orgânica.
3.  Oferecer suporte a múltiplos idiomas (Português e Inglês) de forma nativa.
4.  Ser facilmente escalável para futuras adições, como um blog.

---

## ✨ A Solução Implementada

Para atender a esses requisitos, o site foi construído com uma arquitetura moderna e focada em componentes.

- **Arquitetura:** O projeto utiliza o App Router do Next.js, facilitando a organização de rotas e o uso de Server Components para performance.
- **Internacionalização:** A biblioteca `next-intl` foi integrada para gerenciar as traduções, permitindo que todo o conteúdo seja exibido dinamicamente no idioma escolhido pelo usuário.
- **Microinterações:** Animações sutis foram adicionadas com `framer-motion` para melhorar a experiência do usuário sem penalizar o tempo de carregamento da página.
- **CI/CD:** O deploy é automatizado através da integração nativa do repositório com a Vercel, garantindo que cada `push` para a branch `main` atualize o site em produção de forma segura e eficiente.

---

## 🚀 Rodando o Projeto Localmente

Siga os passos abaixo para executar o projeto em seu ambiente de desenvolvimento.

**1. Clone o repositório:**
```bash
git clone [https://github.com/DevBielCastro/neurostack-site-pessoal.git](https://github.com/DevBielCastro/neurostack-site-pessoal.git)
cd neurostack-site-pessoal
2. Instale as dependências:

Bash

npm install
# ou
pnpm install
3. Crie o arquivo de variáveis de ambiente:
Copie o arquivo .env.example para um novo arquivo chamado .env.local e preencha as variáveis, se necessário.

4. Execute o servidor de desenvolvimento:

Bash

npm run dev
# ou
pnpm dev
Abra http://localhost:3000 no seu navegador para ver o resultado.

Scripts Úteis
npm run dev: Inicia o servidor em modo de desenvolvimento.

npm run build: Compila o projeto para produção.

npm run start: Inicia um servidor de produção após o build.

npm run lint: Executa o linter para verificar a qualidade do código.

🗺️ Roadmap de Melhorias
[ ] Implementar SEO avançado com structured data (JSON-LD).

[ ] Adicionar um blog integrado com um CMS Headless (ex: Strapi, Sanity).

[ ] Escrever testes End-to-End (E2E) com Cypress para garantir a estabilidade das funcionalidades críticas.

📫 Contato
Gabriel Castro

Email: gabriel.castrogt10@gmail.com

LinkedIn: linkedin.com/in/gabriel-castro-9a9745209
