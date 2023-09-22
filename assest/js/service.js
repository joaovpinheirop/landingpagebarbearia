const listServices = document.getElementById('list-servicos')


const arrayServices = [

  {
    title: 'Cortes de Cabelo',
    description: 'Nossos barbeiros experientes oferecem cortes de cabelo modernos e clássicos para todos os estilos.',
    photo: 'corte'
  }, {
    title: 'Barba e Bigode',
    description: 'Aperfeiçoe seu visual com nossos serviços de barba e bigode. Do design à manutenção, cuidamos de você',
    photo: 'barba'
  }, {
    title: 'Barba e Bigode',
    description: 'Aperfeiçoe seu visual com nossos serviços de barba e bigode. Do design à manutenção, cuidamos de você',
    photo: 'tratamento'
  }
]
arrayServices.forEach((value, i, listRef) => {
  if (i % 2 === 0) {
    listServices.innerHTML += ` <article class="item-servico" id="${i}">
  <img class="img-servico" src="./assest/img/${arrayServices[i].photo}.jpg" alt="">
  
  
  <div class="divisor">
    <div class="quadrado-div-servico"></div>
    <div class="barra-div-servico"></div>
  
  </div>
  <div class="servico-intro">
    <h3>${arrayServices[i].title}</h3>
    <h5>${arrayServices[i].description}</div>
  </article>`
  }
  else {
    listServices.innerHTML += ` <article class="item-servico-reverse" id="${i}">
  <img class="img-servico" src="./assest/img/${arrayServices[i].photo}.jpg" alt="">
  
  
  <div class="divisor">
    <div class="quadrado-div-servico"></div>
    <div class="barra-div-servico"></div>
  
  </div>
  <div class="servico-intro">
    <h3>${arrayServices[i].title}</h3>
    <h5>${arrayServices[i].description}</div>
  </article>`
  }
})

