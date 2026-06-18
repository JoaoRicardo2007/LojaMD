# Projeto LojaMD - Gestão de Assistência Técnica e Bijuterias

Este projeto é um sistema de gestão desenvolvido para fins de aprendizado, utilizando tecnologias modernas de desenvolvimento Web.

## 🛠️ Tecnologias
- **Backend:** .NET 10 (ASP.NET Core Web API)
- **Banco de Dados:** SQLite (Fluxo Code-First com EF Core)
- **Frontend:** React + TypeScript (Planejado)
- **Arquitetura:** Princípios de Clean Architecture e MVC

## 📝 Histórico de Etapas Concluídas

### 1. Setup Inicial e Planejamento
- [x] Criação do projeto ASP.NET Core.
- [x] Seleção do Banco de Dados (**SQLite**).
- [x] Definição do uso de **Entity Framework Core (Code-First)**.

### 2. Domínio e Infraestrutura de Dados
- [x] Criação da entidade `Cliente` (Modelo de dados).
- [x] Instalação dos pacotes NuGet (EF Core, Sqlite, Tools).
- [x] Criação da pasta `Data` e implementação do `AppDbContext`.
- [x] Configuração da string de conexão em `Program.cs`.

### 3. Persistência e Banco de Dados
- [x] Criação da primeira **Migration** (`CriacaoTabelaCliente`).
- [x] Execução do `database update` para gerar o arquivo físico `loja.db`.
- [x] Implementação do `ClientesController` com métodos `GET` e `POST`.
- [x] Configuração e ativação do **Scalar** para testes de interface.
- [x] Configuração de segurança de repositório com `.gitignore`.

### 4. Evolução da API de Clientes
- [x] Implementação do `GET` por `id` para buscar um cliente específico.
- [x] Validação do fluxo de criação no `POST` com JSON sem o campo `Id`.
- [x] Identificação e correção do erro de banco `no such table: Clientes`.
- [x] Entendimento prático do `model binding` no ASP.NET Core para receber o JSON no body.
- [x] Implementação do `PUT` para atualização de cliente por `id`.

## 🚧 Status Atual

O backend já está funcionando como uma API de clientes com SQLite e Entity Framework Core. Hoje o projeto expõe:
- `POST /api/clientes` para criar cliente;
- `GET /api/clientes` para listar todos os clientes;
- `GET /api/clientes/{id}` para buscar um cliente específico.
- `PUT /api/clientes/{id}` para atualizar um cliente existente.

Durante os testes foi identificado que o corpo do `POST` não deve enviar `Id`, porque esse valor é gerado pelo banco automaticamente. Também foi necessário corrigir o banco de dados para que a tabela `Clientes` existisse de fato antes das inserções.

## 🎯 Próximo Passo

- Refinar a documentação dos endpoints no Scalar.
- Continuar a evolução do CRUD e preparar a base para novas entidades do sistema.

---
*Documentação em constante atualização conforme o progresso do mentorado.*
