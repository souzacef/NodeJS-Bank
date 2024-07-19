NodeJS Bank

NodeJS Bank é uma aplicação simples de sistema bancário desenvolvida em JavaScript utilizando NodeJS. Este projeto tem como objetivo aplicar os conceitos de herança em objetos para criar uma estrutura de contas bancárias que incluem uma conta genérica, uma conta corrente e uma conta poupança.
Funcionalidades

    Criar contas bancárias (Conta Corrente e Conta Poupança).
    Depositar valores nas contas.
    Sacar valores das contas.
    Aplicar juros em contas correntes.
    Aplicar rendimento em contas poupança.
    Consultar saldo das contas.

Requisitos do Sistema

    Node.js (versão 14 ou superior)

Instalação

1.    Clone o repositório:

        git clone https://github.com/souzacef/NodeJS-Bank.git


2.    Navegue até o diretório do projeto:

        cd NodeJS-Bank

3.    Instale as dependências necessárias:
        npm install prompt-sync

Uso

Para executar a aplicação, utilize o seguinte comando:
        node src/main.js

Siga as instruções no terminal para interagir com o sistema bancário.


Estrutura do Projeto

NodeJS-Bank/
├── src/
│   ├── classes/
│   │   ├── Conta.js
│   │   ├── ContaCorrente.js
│   │   └── ContaPoupanca.js
│   ├── funcoes/
│   │   ├── aplicarJurosOuRendimento.js
│   │   ├── consultarSaldo.js
│   │   ├── criarConta.js
│   │   ├── depositar.js
│   │   └── sacar.js
│   ├── utils/
│   │   └── prompt.js
│   └── main.js
├── .gitignore
├── package.json
└── README.md


Contribuição

Contribuições são bem-vindas! Se você quiser contribuir com este projeto, por favor, siga estas etapas:

 1.   Faça um fork do repositório.
 2.   Crie uma branch para sua feature (git checkout -b feature/MinhaFeature).
 3.   Commit suas alterações (git commit -m 'Adicionei MinhaFeature').
 4.   Faça um push para a branch (git push origin feature/MinhaFeature).
 5.   Abra um Pull Request.

 Licença

Este projeto está licenciado sob a GNU General Public License v3.0.

Autores e Agradecimentos

    Carlos Eduardo Freire de Souza - Desenvolvedor

Contatos e Links

    [Repositório do Projeto](https://github.com/souzacef/NodeJS-Bank.git)
    [Email](mailto:souzacef@gmail.com)
    [LinkedIn](https://linkedin.com/in/carlosefsouza)

