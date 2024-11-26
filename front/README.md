Nesse projeto você deve criar uma aplicação para gerenciar tarefas
pessoais. A aplicação deve ter as seguintes funcionalidades:
API
● POST api/categoria/cadastrar - Já está pronto
● GET api/categoria/listar - Já está pronto
● POST api/tarefa/cadastrar - Já está pronto
● GET api/tarefa/listar - Já está pronto
● PATCH api/tarefa/alterar
● GET api/tarefa/naoconcluidas
● GET api/tarefa/concluidas
FRONT
● Listar Tarefas pages/tarefa/listar
● Cadastrar Tarefa pages/tarefa/cadastrar
● Alterar Tarefa pages/tarefa/alterar
● Listar Concluídas pages/tarefa/listarconcluidas
● Listar Não Concluídas pages/tarefa/listarnaoconcluidas

PATCH api/tarefa/alterar
Ao requisitar essa funcionalidade, a aplicação deve receber uma tarefa e
alterar o seu status para “Em andamento” e ao receber novamente uma
requisição da mesma tarefa alterar o status para “Concluído”.
GET api/tarefa/naoconcluidas
Ao requisitar essa funcionalidade, a aplicação deve retornar JSON com
todas as tarefas que estão com o status de “Não iniciada” e “Em andamento”.
GET api/tarefa/concluidas
Ao requisitar essa funcionalidade, a aplicação deve retornar JSON com
todas as tarefas que estão com o status de “Concluída”.
Listar Tarefas pages/tarefa/listar
Ao abrir este componente a aplicação deve listar todas as tarefas em
uma tabela no navegador.
Cadastrar Tarefa pages/tarefa/cadastrar
Ao abrir este componente, a aplicação deve disponibilizar todos os
campos para cadastrar uma tarefa, selecionando uma categoria já existente.
Não é necessário nenhum tipo de validação e toda nova tarefa deve começar
automaticamente com o status de “Não iniciada”.

Alterar Tarefa pages/tarefa/alterar
Da maneira que você julgar adequado, a aplicação deve realizar uma
requisição para que a API possa realizar a alteração do seu status. Quando a
tarefa estiver como “Não iniciada”, deve-se alterar para “Em andamento”, e
quando estiver como “Em andamento”, deve-se alterar para “Concluída”.
Listar Concluídas pages/tarefa/listarconcluidas
Ao abrir este componente a aplicação deve listar todas as tarefas em
uma tabela no navegador com o status de “Concluída”.
Listar Não Concluídas pages/tarefa/listarnaoconcluidas
Ao abrir este componente a aplicação deve listar todas as tarefas em
uma tabela no navegador com o status de “Não iniciada” e “Em andamento”.
Demais especificações
● O arquivo de banco de dados da sua aplicação deve conter o seu nome;
● O arquivo de testes .http deve estar dentro do projeto;
● Não é necessário utilizar o Angular Material;
● Não é necessário desenvolver nada relacionado ao modelo de categoria no
FRONT;
● Não é necessário realizar nenhuma validação no cadastro da tarefa;
● Não é necessário realizar nenhuma validação na alteração da tarefa;
● CONFIRMAR O RECEBIMENTO DO E-MAIL AO SAIR DA SALA.

Critérios de Avaliação
Total – 5,0 pontos
PATCH api/tarefa/alterar 1,00 ponto
GET api/tarefa/naoconcluidas 0,25 ponto
GET api/tarefa/concluidas 0,25 ponto
Listar Tarefas pages/tarefa/listar 0,25 ponto
Cadastrar Tarefa pages/tarefa/cadastrar 1,00 ponto
Alterar Tarefa pages/tarefa/alterar 1,25 ponto
Listar Concluídas pages/tarefa/listarconcluidas 0,25 ponto
Listar Não Concluídas pages/tarefa/listarnaoconcluidas 0,25 ponto
Github 0,50 ponto