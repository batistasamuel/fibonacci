# Aprendendo a usar o GIT usando como exemplo o desafio Fibonacci
Adicionando o teste do git diff
Para desfazer mudanças antes do "git add" usamos "git checkout arquivo"
Aprendendo a desfazer mudanças após o git add, para isso usamos o comando
"git reset HEAD arquivo" esse comando desfaz a açao do git add
para de fato desfazer a mudança feita antes do git add, use o "git checkout arquivo"
Outra opçao muito interessante é poder retornar arquivos já commitados, isso pode ser feito com o comando "git reset --parametro" temos 3 parametros diferentes (soft, mixed, hard), no comando "git reset --soft sfsdfsdfsdfsdf" onde sfsdfsdfsdfsdf é o hash do commit anterior ao que queremos desfazer (esse hash pode ser obtido com o git log) o parametro soft vai voltar à etapa que aguarda o commit, ou seja a fase em que o arquivo alterado foi adicionado com o "git add arquivo" e é possível ver o que foi alterado com o "git diff".
já usando o parametro mixed "git reset --mixed sfsdfsdfsdfsdf" a fase que será retornada é o arquivo alterado antes de rodar o comando "git add arquivo" sendo possível rodar o comando "git checkout" caso deseje desfazer a alteraçao após verificar com calma ou apenas adicionar mais alguma coisa que você gostaria que estivesse no mesmo commit e nao estava.
já o ultimo parâmetro "git reset --hard sfsdfsdfsdfsdf" elimina o commit e as fases anteriores, é como se ele fizesse com os parametros soft e mixed e na sequência fizesse também o checkout, eliminiando completamente a alteraçao do ultimo commit. 

# Desafio Fibonacci

Faça um método fibonacci que retorne um Array com os primeiro números de série de Fibonacci até passar de 350.

A série de Fibonacci é a seguinte: 0, 1, 1, 2, 3, 5, 8, 13, etc…

Faça um segundo método "isFibonnaci" que recebe um Number como parâmetro e retorne Boolean. Caso o número recebido por parâmetro esteja entre os números da sequência de Fibonnaci do "fibonnaci" retorne true, senão, false.

# Tópicos

Neste desafio você aprenderá:

- Variáveis e métodos
- Operadores matemáticos
- Controle de fluxo
- Listas

# Requisitos

Para este desafio você precisará:

- NodeJS LTS (8.12.0+)

Obs.: Tente usar o mínimo de bibliotecas possível
