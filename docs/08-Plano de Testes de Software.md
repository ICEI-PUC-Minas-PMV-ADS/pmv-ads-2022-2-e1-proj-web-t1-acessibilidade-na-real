# Plano de Testes de Software

## Cenários de testes

CASO DE TESTE CT - 01 - Fazer cadastro - SIGN UP (CASO DE SUCESSO)

REQUISITOS ASSOCIADOS RF-10 - Permitir o usuário realizar cadastro para acessar sua lista de favoritos.

OBJETIVO DE TESTE Observar se os dados do usuário ficaram salvos.

CRITÉRIOS DE ÊXITO Ao realizar o cadastro, o site deve retornar uma mensagem de "sua conta foi criada com sucesso".

---------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                            
CASO DE TESTE CT - 02 Permite o usuário Outrora cadastrado, acessar as demais telas do site. Sendo necessário apenas informar o email e senha cadastrados. - SIGN IN (CASO DE SUCESSO)

REQUISITOS ASSOCIADOS RF-09 - A aplicação deve solicitar login para postagem de um comentário ou avaliação.

OBJETIVO DE TESTE Observar se os dados estão ficando armazenados em storage.

CRITÉRIOS DE ÊXITO Ao inserir os dados corretos, aparece uma tela "login realizado com sucesso" e você é direcionado para "home".

---------------------------------------------------------------------------------------------------------------------------------------------------------

CASO DE TESTE CT - 02 - SIGN IN (CASO DE INSUCESSO)

Fazer login (com senha incorreta)

REQUISITOS ASSOCIADOS RF-10 - Permitir o usuário realizar cadastro para acessar sua lista de favoritos.

OBJETIVO DE TESTE Observar se não será dado acesso aos favoritos ao usuário.

CRITÉRIOS DE ÊXITO Apareceu uma mensagem "Senha incorreta" e desta forma o site não permitiu o usuário o acesso a página dos favoritos.

---------------------------------------------------------------------------------------------------------------------------------------------------------

CASO DE TESTE CT - 02 - SIGN IN (CASO DE INSUCESSO)

Fazer login (com email não cadastrado)

REQUISITOS ASSOCIADOS RF-10 - Permitir o usuário realizar cadastro para acessar sua lista de favoritos.

OBJETIVO DE TESTE Observar se não será dado acesso aos favoritos ao usuário.

CRITÉRIOS DE ÊXITO Apareceu uma mensagem "usuário não encontrado" e desta forma o site não permitiu o usuário o acesso a página dos favoritos.

---------------------------------------------------------------------------------------------------------------------------------------------------------

CASO DE TESTE CT - 03 Funcionalidade possibilita ao usuário registrar comentários a avaliações acerca da experiência proporcionada pelas adaptações do estabelecimento. - PERMITIR AO USUÁRIO REGISTRAR AVALIAÇÕES E COMENTÁRIOS DE ACORDO COM A PRÓPRIA EXPERIÊNCIA (CASO DE SUCESSO)

REQUISITOS ASSOCIADOS RF-05 Permitir o usuário deixar avaliações e comentários seguindo sua experiência.

OBJETIVO DE TESTE Registrar comentários e avaliação acerca do estabelecimento em função das adaptações disponibilizadas.

CRITÉRIOS DE ÊXITO Ao inserir comentários e avaliação, aparece uma mensagem "avalliação enviada com sucesso".

---------------------------------------------------------------------------------------------------------------------------------------------------------

CASO DE TESTE CT - 03 Funcionalidade possibilita ao usuário registrar comentários a avaliações acerca da experiência proporcionada pelas adaptações do estabelecimento. - PERMITIR AO USUÁRIO REGISTRAR AVALIAÇÕES E COMENTÁRIOS DE ACORDO COM A PRÓPRIA EXPERIÊNCIA (CASO DE INSUCESSO)

REQUISITOS ASSOCIADOS RF-05 Permitir o usuário deixar avaliações e comentários seguindo sua experiência.

OBJETIVO DE TESTE Registrar comentário sem preencher corretamente os campos.

CRITÉRIOS DE ÊXITO Ao inserir comentários e avaliação, aparece uma mensagem "Selecione uma nota".

---------------------------------------------------------------------------------------------------------------------------------------------------------

CASO DE TESTE CT - 04 Funcionalidade permita ao usuário relatar quais as adaptações o estabelecimento dispõe. - HABILITAR A SELEÇÃO DE ADAPTAÇÕES DISPONIBILIZADAS PELO ESTABELECIMENTO AO USUÁRIO.

REQUISITOS ASSOCIADOS RF-02 A aplicação deve informar de maneira detalhada e fidedigna, quais as formas de acessibilidade disponíveis no estabelecimento, sendo elas relatadas pelos usuários ou pelo dono do local

OBJETIVO DE TESTE Permitir ao usuário registrar quais adaptações o estabelecimento oferece.

CRITÉRIOS DE ÊXITO Selecção de adaptações disponibilizadas no estabelecimento.

---------------------------------------------------------------------------------------------------------------------------------------------------------

CASO DE TESTE CT - 05 Aplicação web permite ao usuário cadastrar estabelecimentos, informando as adaptações disponibilizadas. - CADASTRO DE ESTABELECIMENTO (CASO DE SUCESSO)

REQUISITOS ASSOCIADOS RF-02 A aplicação deve informar de maneira detalhada e fidedigna, quais as formas de acessibilidade disponíveis no estabelecimento, sendo elas relatadas pelos usuários ou pelo dono do local

OBJETIVO DE TESTE Cadastrar novo estabelecimento.

CRITÉRIOS DE ÊXITO Ao cadastrar o estabelecimento, aparece uma mensagem de "Local cadastrado com sucesso". Na sequência, o usuário é direcionado para a página do estabelecimento cadastrado.

---------------------------------------------------------------------------------------------------------------------------------------------------------

CASO DE TESTE CT - 05 Aplicação web permite ao usuário cadastrar estabelecimentos, informando as adaptações disponibilizadas. - CADASTRO DE ESTABELECIMENTO (CASO DE INSUCESSO)

REQUISITOS ASSOCIADOS RF-02 A aplicação deve informar de maneira detalhada e fidedigna, quais as formas de acessibilidade disponíveis no estabelecimento, sendo elas relatadas pelos usuários ou pelo dono do local

OBJETIVO DE TESTE Cadastrar novo estabelecimento sem preencher todos os campos obrigatórios.

CRITÉRIOS DE ÊXITO Ao cadastrar o estabelecimento sem preencher os campos obrigatórios, aparece uma mensagem de "Preencha todos os campos"

---------------------------------------------------------------------------------------------------------------------------------------------------------

CASO DE TESTE CT - 06 Aplicação web permite ao usuário salvar seus locais favoritos em uma lista. - FAVORITAR UM LOCAL (CASO DE SUCESSO)

REQUISITOS ASSOCIADOS RF-03 Permitir ao usuário salvar seus locais favoritos em uma lista.

OBJETIVO DE TESTE Clicar no ícone que representa a ação de favoritar (nesse caso, um coração) e visualizar o item na lista de destino. 

CRITÉRIOS DE ÊXITO Ao favoritar um item, o mesmo deve estar visível na página de relação de favoritos.
