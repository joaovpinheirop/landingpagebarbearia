
# Landing Page de Barbearia para Estudos

### -----------------Em Desenvolvimento-----------------
Este repositório contém o código-fonte de uma Landing Page de Barbearia criada para fins de estudo. A página tem o objetivo de fornecer informações sobre a barbearia, seu proprietário e permitir que os visitantes agendem horários para cortes de cabelo e barba.

![image](https://github.com/joaovpinheirop/landingpagebarbearia/assets/56880604/3ab6189e-0c2e-455e-9510-ed1363975fb3)
## Visão Geral

A Landing Page de Barbearia foi desenvolvida como um projeto de estudo e demonstração. Ela inclui os seguintes recursos:

- **Apresentação da Barbearia**: Informações sobre a barbearia, sua história e missão.
- **Proprietário**: Detalhes sobre o dono da barbearia e sua experiência.
- **Agendamento Online**: Uma funcionalidade de agendamento que permite aos visitantes marcar horários para serviços de corte de cabelo e barba.


## Navegação

Uma experiência completa é essencial para os visitantes da Landing Page da Barbearia. Por isso, implementamos uma barra de navegação intuitiva para ajudar os usuários a entenderem o conteúdo e se localizarem na página.

![Barra de Navegação](https://github.com/joaovpinheirop/landingpagebarbearia/blob/master/assest/img/nav.png?raw=true)

A barra de navegação inclui links para as principais seções da Landing Page, permitindo que os usuários acessem facilmente informações sobre a barbearia, o proprietário e também agendem horários para os serviços de corte de cabelo e barba. Esta funcionalidade torna a experiência do usuário mais agradável e eficiente.

# Estrutura da Navegação

Este é um exemplo básico da estrutura de uma navegação em HTML, com ênfase na semântica e na interatividade JavaScript.

```html
<nav>
  <ol>
    <li id="nav-sobre" onclick="handleNavigation('sobre')">
      Sobre
    </li>
  </ol>
</nav>
````

## Funcionalidade em JavaScript

Neste exemplo, utilizamos JavaScript para adicionar funcionalidade à nossa navegação. A funcionalidade permite que a página role suavemente para a seção correspondente quando o item "Sobre" é clicado.

```javascript
const navSobre = document.getElementById('nav-Sobre');
const screenSobre = document.getElementById('pag-Sobre');

navSobre.addEventListener('click', () => {
  screenSobre.scrollIntoView({ behavior: 'smooth' });
});
```

## Contribuição

Este projeto é destinado apenas para fins de estudo e demonstração. Contribuições não são aceitas.

## Autor

- Nome: Joao Vitor
- Email: joaovpinheiros@gmail.com
- GitHub: [[joaovpinheirop](https://github.com/joaovpinheirop)]
