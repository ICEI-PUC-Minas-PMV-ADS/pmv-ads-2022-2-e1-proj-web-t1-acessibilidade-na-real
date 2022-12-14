# Registro de Testes de Software

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Testes Realizados

CASO DE TESTE 	CT - 01 - Fazer cadastro - SIGN UP (CASO DE SUCESSO)

REQUISITOS ASSOCIADOS 	RF-10 - Permitir o usuário realizar cadastro para acessar sua lista de favoritos.

OBJETIVO DE TESTE 	Observar se os dados do usuário ficaram salvos.

PASSOS	1) Acessei a página pelo arquivo sendo direcionado para a página do site 2) Inseri os dados nome, sobrenome, endereço, cidade, selecionei estado, inseri email e senha.

CRITÉRIOS DE ÊXITO	Ao realizar o cadastro, o site deve retornar uma mensagem de "sua conta foi criada com sucesso".

![image](https://user-images.githubusercontent.com/111437215/204108431-34af89eb-4cf3-4c4a-880b-3c138bb6d44d.png)




CASO DE TESTE 	CT - 02 Permite o usuário Outrora cadastrado, acessar as demais telas do site. Sendo necessário apenas informar o email e senha cadastrados.  - SIGN IN (CASO DE SUCESSO)

REQUISITOS ASSOCIADOS 	RF-09 - A aplicação deve solicitar login para postagem de um comentário ou avaliação.

OBJETIVO DE TESTE 	Observar se os dados estão ficando armazenados em storage.

PASSOS	Foram inseridos email e senha cadastrados anteriomente na tela "entre na sua conta".

CRITÉRIOS DE ÊXITO	Ao inserir os dados corretos, aparece uma tela "login realizado com sucesso" e você é direcionado para "home".

![image](https://user-images.githubusercontent.com/111437215/204108486-f2e1ac8b-e683-4c42-a473-64fd951b1115.png)


CASO DE TESTE 	CT - 02 - SIGN IN (CASO DE INSUCESSO)

Fazer login (com senha incorreta)


REQUISITOS ASSOCIADOS 	RF-10 - Permitir o usuário realizar cadastro para acessar sua lista de favoritos.


OBJETIVO DE TESTE 	Observar se não será dado acesso aos favoritos ao usuário.


PASSOS	Acessei a página, cliquei em entrar, digitei o email cadastrado anteriormente, contudo com uma senha incorreta.


CRITÉRIOS DE ÊXITO	Apareceu uma mensagem "Senha incorreta" e desta forma o site não permitiu o usuário o acesso a página dos favoritos.


![image](https://user-images.githubusercontent.com/111437215/204110619-195cf443-f34c-42fd-801c-50141882fef1.png)



CASO DE TESTE CT - 02 - SIGN IN (CASO DE INSUCESSO)

Fazer login (com email não cadastrado)

REQUISITOS ASSOCIADOS 	RF-10 - Permitir o usuário realizar cadastro para acessar sua lista de favoritos.


OBJETIVO DE TESTE 	Observar se não será dado acesso aos favoritos ao usuário.


PASSOS	Acessei a página, cliquei em entrar, digitei um email sem cadastro anterior.


CRITÉRIOS DE ÊXITO	Apareceu uma mensagem "usuário não encontrado" e desta forma o site não permitiu o usuário o acesso a página dos favoritos.


![image](https://user-images.githubusercontent.com/111437215/204110685-81db57ef-d4e7-4af3-8b47-8de86699ace1.png)





CASO DE TESTE CT - 03 Funcionalidade possibilita ao usuário registrar comentários a avaliações acerca da experiência proporcionada pelas adaptações do estabelecimento. - PERMITIR AO USUÁRIO REGISTRAR AVALIAÇÕES E COMENTÁRIOS DE ACORDO COM A PRÓPRIA EXPERIÊNCIA (CASO DE SUCESSO)

REQUISITOS ASSOCIADOS RF-05 Permitir o usuário deixar avaliações e comentários seguindo sua experiência.

OBJETIVO DE TESTE Registrar comentários e avaliação acerca do estabelecimento em função das adaptações disponibilizadas.

PASSOS Registro de texto teste como avaliação, e registro de nota entre 0 e 5 de acordo com as adaptações oferecidas pelo estabelecimento.

CRITÉRIOS DE ÊXITO Ao inserir comentários e avaliação, aparece uma mensagem "avalliação enviada com sucesso".

![RF05](https://user-images.githubusercontent.com/111434777/204109628-3ead95a3-bb0d-4393-a501-e66c73a6b8ca.jpg)

CASO DE TESTE CT - 03 Funcionalidade possibilita ao usuário registrar comentários a avaliações acerca da experiência proporcionada pelas adaptações do estabelecimento. - PERMITIR AO USUÁRIO REGISTRAR AVALIAÇÕES E COMENTÁRIOS DE ACORDO COM A PRÓPRIA EXPERIÊNCIA (CASO DE INSUCESSO)

REQUISITOS ASSOCIADOS RF-05 Permitir o usuário deixar avaliações e comentários seguindo sua experiência.

OBJETIVO DE TESTE Registrar comentário sem preencher corretamente os campos.

PASSOS Enviar avalização com campos obrigatórios em branco.

CRITÉRIOS DE ÊXITO Ao inserir comentários e avaliação, aparece uma mensagem "Selecione uma nota".

![RF05a](https://user-images.githubusercontent.com/111434777/204152606-0ae41f25-775a-44dc-b395-636651982b21.jpg)


CASO DE TESTE CT - 04 Funcionalidade permita ao usuário relatar quais as adaptações o estabelecimento dispõe. - HABILITAR A SELEÇÃO DE ADAPTAÇÕES DISPONIBILIZADAS PELO ESTABELECIMENTO AO USUÁRIO.

REQUISITOS ASSOCIADOS RF-02 A aplicação deve informar de maneira detalhada e fidedigna, quais as formas de acessibilidade disponíveis no estabelecimento, sendo elas relatadas pelos usuários ou pelo dono do local

OBJETIVO DE TESTE Permitir ao usuário registrar quais adaptações o estabelecimento oferece.

PASSOS Assinalar quais as adaptações disponibilizadas pelo estabelecimento.

CRITÉRIOS DE ÊXITO Selecção de adaptações disponibilizadas no estabelecimento.

![RF02](https://user-images.githubusercontent.com/111434777/204109895-8f13aa94-3cfb-4afe-811b-98616b8b3a40.jpg)


CASO DE TESTE CT - 05 Aplicação web permite ao usuário cadastrar estabelecimentos, informando as adaptações disponibilizadas. - CADASTRO DE ESTABELECIMENTO (CASO DE SUCESSO)

REQUISITOS ASSOCIADOS RF-02 A aplicação deve informar de maneira detalhada e fidedigna, quais as formas de acessibilidade disponíveis no estabelecimento, sendo elas relatadas pelos usuários ou pelo dono do local

OBJETIVO DE TESTE Cadastrar novo estabelecimento.

PASSOS Inserir as informações do estabelecimento, incluindo as adaptações disponibilizadas, e concluir o cadastro.

CRITÉRIOS DE ÊXITO Ao cadastrar o estabelecimento, aparece uma mensagem de "Local cadastrado com sucesso". Na sequência, o usuário é direcionado para a página do estabelecimento cadastrado.

![RF 02 b](https://user-images.githubusercontent.com/111434777/204151913-edbf7549-e70e-4d9b-9501-08f1cc7cafa8.jpg)

![RF 02 c](https://user-images.githubusercontent.com/111434777/204151783-80fa40a8-7378-4ace-9dbe-c1ead626148a.jpg)


CASO DE TESTE CT - 05 Aplicação web permite ao usuário cadastrar estabelecimentos, informando as adaptações disponibilizadas. - CADASTRO DE ESTABELECIMENTO (CASO DE INSUCESSO)

REQUISITOS ASSOCIADOS RF-02 A aplicação deve informar de maneira detalhada e fidedigna, quais as formas de acessibilidade disponíveis no estabelecimento, sendo elas relatadas pelos usuários ou pelo dono do local

OBJETIVO DE TESTE Cadastrar novo estabelecimento sem preencher todos os campos obrigatórios.

PASSOS Concluir cadastro de estabelecimento sem preencher todos os campos obrigatórios.

CRITÉRIOS DE ÊXITO Ao cadastrar o estabelecimento sem preencher os campos obrigatórios, aparece uma mensagem de "Preencha todos os campos".

![RF 02 d](https://user-images.githubusercontent.com/111434777/204152293-5c9037c0-a96d-4c38-a7f9-fc7c7f0b7fb2.jpg)


CASO DE TESTE CT - 06 Aplicação web permite ao usuário salvar seus locais favoritos em uma lista. - FAVORITAR UM LOCAL (CASO DE SUCESSO)

REQUISITOS ASSOCIADOS RF-03 Permitir ao usuário salvar seus locais favoritos em uma lista.

OBJETIVO DE TESTE Clicar no ícone que representa a ação de favoritar (nesse caso, um coração) e visualizar o item na lista de destino.
PASSOS 01) Clicar no ícone de favoritar; 2) Entrar na página de favoritos da barra superior.

CRITÉRIOS DE ÊXITO Ao favoritar um item, o mesmo deve estar visível na página de relação de favoritos.

![local-1](https://user-images.githubusercontent.com/99608391/204153647-eb1299c2-4088-4fad-bf82-74c7e9c700a0.png)

![local-2](https://user-images.githubusercontent.com/99608391/204153642-f25df00f-5533-4983-86d8-7ca215af0fe9.png)



