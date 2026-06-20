# Projeto LojaMD - Gestão de Assistência Técnica e Bijuterias

Este projeto é um sistema de gestão desenvolvido para fins de aprendizado, utilizando tecnologias modernas de desenvolvimento Web.

## 🛠️ Tecnologias
- **Backend:** .NET 10 (ASP.NET Core Web API)
- **Banco de Dados:** SQLite (Fluxo Code-First com EF Core)
- **Frontend:** React + TypeScript (Planejado)
- **Arquitetura:** ASP.NET Core Web API com estrutura simples em `Controllers`, `Data` e `Models`

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
- [x] Implementação do `DELETE` por `id` para remover um cliente específico.
- [x] Implementação do `DELETE` geral para remover todos os clientes.
- [x] Criação de um DTO de entrada para `POST` e `PUT`, separando o contrato da API da entidade `Cliente`.

## 🚧 Status Atual

O backend já está funcionando como uma API de clientes com SQLite e Entity Framework Core. Hoje o projeto expõe:
- `POST /api/clientes` para criar cliente;
- `GET /api/clientes` para listar todos os clientes;
- `GET /api/clientes/{id}` para buscar um cliente específico.
- `PUT /api/clientes/{id}` para atualizar um cliente existente.
- `DELETE /api/clientes/{id}` para remover um cliente específico.
- `DELETE /api/clientes` para remover todos os clientes.

Durante os testes foi identificado que o corpo do `POST` não deve enviar `Id`, porque esse valor é gerado pelo banco automaticamente. Para deixar isso mais claro no contrato da API, o `POST` e o `PUT` passaram a receber um DTO de entrada com apenas os campos editáveis, como `Nome` e `Telefone`. Também foi necessário corrigir o banco de dados para que a tabela `Clientes` existisse de fato antes das inserções.

Estrutura atual de entrada:
- `Cliente` continua sendo a entidade persistida no banco.
- `ClienteCreateDto` representa o JSON enviado pelo cliente da API.
- O `Id` permanece na entidade, mas não faz parte do corpo do `POST`.

Observação: o projeto ainda está em evolução, então a documentação deve continuar refletindo o comportamento real do código à medida que novos campos, validações e melhorias forem adicionados.

## 🎯 Próximo Passo

- Refinar a documentação dos endpoints no Scalar.
- Adicionar validação de entrada mais explícita no DTO e tratamento melhor de erros.
- Continuar a evolução do CRUD e preparar a base para novas entidades do sistema.

---
*Documentação em constante atualização conforme o progresso do mentorado.*
