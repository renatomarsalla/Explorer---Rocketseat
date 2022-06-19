import { Router } from "./route.js";

// cria uma instancia de Router
const router = new Router();

// adiciona as rotas
router.add('/','./pages/home.html');
router.add('/universe','./pages/universe.html');
router.add('/exploration','./pages/exploration.html');

// renderiza na tela as informacoes
router.handle();

//habilita a funcao handle() para funcionar quando navegar pelas setas na pagina
window.onpopstate = function(){router.handle()}

// window.router se referencia ao onclick que esta no html e recebe a funcao que esta no onclick
window.route = function(){router.route()}