// this class makes the logics
class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
  }
}



// this class makes the html
class Views extends Favorites {
  constructor(roots) {
    super(roots)
    // console.log(this.root);

  }

  update() {
    this.removeAllTr();


  }

  removeAllTr() {
    const tbody = this.root.querySelector('table tbody');
    tbody.querySelectAll('tr').forEach((tr) => {
      tr.remove();
    })
  }

  createRow() {

    const tr = document.createElement('tr');
    tr.innerHTML = `
      
        <td class="user">
          <img src="https://github.com/renatomarsalla.png" alt="" />
          <a href="https://github.com/renatomarsalla" target="_blank">
            <p>Renato Marsalla</p>
            <span>Renato Marsalla</span>
          </a>
        </td>
        <td class="repositories">76</td>
        <td class="followers">9589</td>
        <td><button class="remove">remover</button></td>  
  `
    return tr;
  }
}

export { Views }