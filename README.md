# Back-end com Node.js

 Desafio do módulo de conceitos do Node.js do bootcamp GoStack, onde desenvolvi o back-end com os conhecimentos adquiridos durante as aulas do primeiro módulo.

Utilizado:
- yarn para instalação de pacotes do node.
- express: para definir as rotas e suas funcionalidades.
- nodemon: para manter o servidor sempre rodando e monitorar as alterações realizadas no código.
- uuidv4 para gerar ID's aleatórios para cada repositório.
- middlewares para validações.

Para utilizar em sua máquina basta clonar o projeto:
```
git clone https://github.com/90sRehem/desafio-conceitos-nodejs

Entrar na pasta raíz:
```
cd desafio-conceitos-nodejs
```

Então executar yarn para instalar as dependências do projeto:
```
yarn
```

Agora execute:
```
yarn start
```

Pronto! Back-end estará rodando em sua máquina. (http://localhost:3333)

Você pode usar Insominia ou Postman para utilizar as rotas.

Métodos HTTP e sua rotas:
- <b>POST</b>: para adicionar um novo repositório estático. (title, url, techs) (http://localhost:3333/repositories)
- <b>GET</b>: para visualizar todos os repositórios adicionados. (http://localhost:3333/repositories)
- <b>PUT</b>: Alterar dados de um respositório. (http://localhost:3333/repositories/id)
- <b>DELETE</b>: Remover um repositório. (http://localhost:3333/repositories/id)
- <b>POST</b>: Para adicionar um novo like a determinado repositório. (http://localhost:3333/repositories/id/like)

<b>Lembrando que 'id' nas rotas devem ser alterados para cada ID de repositório adicionado.</b>
