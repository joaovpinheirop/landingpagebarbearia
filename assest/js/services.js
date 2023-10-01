

const listPagServices = document.getElementById('pag-services')

const listServices =
  [{
    title: 'Cortes de Cabelo',
    descrip: 'Nossos barbeiros experientes oferecem cortes de cabelo modernos e clássicos para todos os estilos.',
    photo: 'corte'
  }, {
    title: 'Barba e Bigode',
    descrip: 'Aperfeiçoe seu visual com nossos serviços de barba e bigode. Do design à manutenção, cuidamos de você',
    photo: 'barba'
  }, {
    title: 'Tratamentos Capilares',
    descrip: ' Mime-se com tratamentos capilares de alta qualidade para manter seu cabelo saudável e brilhante',
    photo: 'tratamento'
  },
  ]

listServices.forEach((value, i, listRef) => {
  if (i % 2 === 0) {
    listPagServices.innerHTML += `
  <article class="service-iten">
    <img class="service-img" src="./assest/img/${listRef[i].photo}.jpg" alt="">

    <div class="divisor">
      <div class="divisor-quadrado"></div>
      <div class="divisor-bar"></div>
    </div>

    <div class="description">

      <h3>${listRef[i].title}</h3>
      <h5>${listRef[i].descrip}</h5>
    </div>
  </article> `
  }
  else {
    listPagServices.innerHTML += `
  <article class="service-iten-reverse">
    <img class="service-img-reverse" src="./assest/img/${listRef[i].photo}.jpg" alt="">

    <div class="divisor">
      <div class="divisor-quadrado"></div>
      <div class="divisor-bar"></div>
    </div>

    <div class="description">
    <h3>${listRef[i].title}</h3>
    <h5>${listRef[i].descrip}</h5>
    </div>
  </article> `
  }
})


