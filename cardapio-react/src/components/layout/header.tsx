export function Header() {
   return (
    <header>
        <div className="container">
          <div className="brand">
            <img src="./assets/img/logo_lanchonete.svg" alt="Logotipo da lanchonete" />
            <div>
              <h1>Cardápio Digital</h1>
              <p>Faça seu pedido pelo nosso cardápio digital</p>
            </div>
          </div>

          <div className="cart-buttom">
            <img src="./assets/img/cart.svg" alt="Carrinho de compras" />
          </div>
        </div>
      </header>
   )
}