# Arquitetura da Solução

Nesta seção são apresentados os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem da mesma.

## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na Figura abaixo.


![Diagrama de Componentes](img/diagram.png)
<div style="text-align: center;">Figura 01 - Arquitetura da Solução</div>

A solução implementada conta com os seguintes módulos:
- **Navegador** — interface básica com sistema (Client)  
- **Páginas Web** — conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
- **Github Pages** — serviço de nuvem que permite o acesso às páginas _‘web’_ através do navegador.
Ele será utilizado na hospedagem por ser um serviço do Github que permite hospedagem de arquivos de HTML, CSS e Javascript sem cobrança pela disponibilização de tais serviços, além da facilidade na disponibilização de **entrega contínua** sem necessidade de configuração adicional.

A imagem a seguir ilustra o fluxo do usuário em nossa solução. Assim
que o usuário entra na plataforma, ele é apresentado à tela inicial
(Tela 1) onde ele é confrontado com as opões de criar uma conta ou
fazer o login em uma conta existente.

Caso ele opte por seguir pelo primeiro caminho (Criar conta), ele é
redirecionado para a tela de formulário de criação de conta (Tela 2), onde pode
inserir seus dados cadastrais. Nessa tela, o usuário também pode
acessar as páginas de acesso irrestrito ("FAQ", "CONTATO", "FALE CONOSCO"). 

Caso o usuário opte seguir pelo segundo caminho (Visualizar Galeria) ele
é redirecionado para a Tela 5 com todas as fotos que o usuário possui. O
usuário pode clicar em um post qualquer para visualizar os detalhes do
post (Tela 6). Nessa tela, ele pode então escolher editar o post, sendo
redirecionado para a Tela 7. Ao editar as informações, o usuário pode
escolher salvar ou deletar o post. Em ambos os casos o status é
notificado para o usuário (Tela 8) e em seguida ele é redirecionado
para a Tela 2.

*MFLM*

Ilustramos a seguir o fluxo do usuário em nossa aplicação. Ao acessar a plataforma, a tela inicial (Landing Page) oferece ao usuário as opções login em uma conta existente, ou criar uma nova conta.

![Landing page](https://user-images.githubusercontent.com/111434777/194768078-faedef1b-94ce-4aff-93e8-f9126d79ac43.png)

Para a opção criar nova conta, o usuário é direcionado para a tela de formulário de criação de conta (Tela 2). É nesta tela onde são inseridos os dados cadastrais do usuário, e também são disponibilizadas as páginas de acesso irrestrito ("FAQ", "CONHEÇA OS DIREITOS", "FALE CONOSCO").

Ao efetuar login na plataforma, o usuário é direcionado a Tela 5 (Visualizar Galeria). Nesta página são apresentadas as imagens de estabelecimantos salvas pelo usuário, e ao clicar nessas imagens são apresentados os detalhes do post (Tela 6). A partir desta tela de detalhes do post, o usuário tem a opção de editar as informações cadastradas, sendo então direcionado para a Tela 7. Após eventuais edições ou deleções das informações dos estabelecimentos, o usuário é notificado pela Tela 8, e então é direcionado para a Tela 2.

## Tecnologias Utilizadas

Serão utilizadas as seguintes tecnologias no desenvolvimento:

### IDE:
 - Visual Studio Code

### Linguagens utilizadas:
 - HTML
 - CSS
 - JavaScript

### Ferramentas de Modelagem:
 - MarvelApp
 - Whimsical

## Hospedagem
, e  
O site será hospedado no GitHub Pages no link [exemplo.github.io](https://example.github.io)[^1], e será atualizado através de pushes com o git no repositório do Grupo 4 - [Acessibilidade na Real](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t1-acessibilidade-na-real).

[^1]: O link ainda está para ser definido.
