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
- [x] Criação da primeira **Migration** (`InistialCreate`).
- [x] Execução do `database update` para gerar o arquivo físico `loja.db`.
- [x] Implementação do `ClientesController` com métodos `GET` e `POST`.
- [x] Configuração e ativação do **Scalar** para testes de interface.
- [x] Configuração de segurança de repositório com `.gitignore`.

---
*Documentação em constante atualização conforme o progresso do mentorado.*
