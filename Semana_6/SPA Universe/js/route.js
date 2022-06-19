class Router{

  // objeto que ira conter as rotas
  routes = {}

  // funcao que adiciona no obj routes o nome da rota e a pagina.html
  add(nameRoute, page){
    this.routes[nameRoute] = page;
  }

  /* -funcao que desabilita qualquer padrao existente em algum objeto;
     -salva no historico qual elemento disparou um evento e qual o evento. Altera a url sem recarregar a página;
     -chama a funcao handle() para mostrar os elemntos html na pagina*/
  route(event){
    event = event || window.event
    event.preventDefault();
    
    window.history.pushState({},"",event.target.href);

    console.log(`event ${event.target}`);

    this.handle();
  }

  /* -faz um destructor e pega o nome do caminho e adiciona em uma variavel;
     -fetch() serve para pegar algo na internet, recebe uma rota como argumento, depois que busca, retorna os dados em formato de texto;
     -depois que retornou como texto pega os elemtos html e coloca na div app onde aparecera as informacoes*/ 
  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
    console.log(`pathname ${pathname}`)

    fetch(route)
      .then(function (data) {
        return data.text()
      })
      .then(function (html) {
        document.querySelector('.app').innerHTML = html
      })
  }
}

export {Router}