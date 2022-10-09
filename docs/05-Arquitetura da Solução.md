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

Ilustramos a seguir o fluxo do usuário em nossa aplicação. Ao acessar a plataforma, a tela inicial (Landing Page) oferece ao usuário as opções login em uma conta existente, ou criar uma nova conta. Nessa tela, o usuário também pode acessar as páginas de acesso irrestrito ("FAQ", "CONHEÇA OS DIREITOS", "FALE CONOSCO"). O login libera ao usuário o acesso às telas sinalizadas em verde. 

![Landing page](https://user-images.githubusercontent.com/111434777/194611818-ca7f616c-79e6-4731-8f79-1da8809f7556.png)

O acesso do usuário logado viabiliza acessar a lista de estabelecimentos marcados como 'favoritos', listagem de estabelecimentos cadastrados na aplicação web, e ainda cadastrar novos estabelecimentos na plataforma.

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

O site será hospedado no GitHub Pages no link [exemplo.github.io](https://example.github.io)[^1], e será atualizado através de pushes com o git no repositório do Grupo 4 - [Acessibilidade na Real](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t1-acessibilidade-na-real).

[^1]: O link ainda está para ser definido.
