import { Footer } from './components/layout/footer'
import { Header } from './components/layout/header'
import { NavigationBar } from './components/layout/navegationBar'
import { categories } from './data/categories'

function App() {

  function handleSelectCategory(alias: string) {
    alert('Categoria selecionada: ' + alias)
  }

  return (
    <>
      <Header />
    
      <NavigationBar categories={categories} activeCategory="todos" onSelectCategory={handleSelectCategory} />

      <main>
    <section>
      <header>
        <h2>Produtos</h2>
        <div>
          <p>10 itens</p>
          <p>Categoria: <span id="selected-category">Todos</span></p>
        </div>
      </header>

      <article>
        <figure>
          <img src="./assets/img/burger.png"
            alt="Hambúrguer com queijo derretido em pão brioche e molho ao lado" />
          <figcaption>Lanches</figcaption>
        </figure>
        <h3>Burger</h3>
        <p>Pão brioche, hambúrguer 160g, queijo prato e molho da casa.</p>
        <p><strong>R$ 22,00</strong></p>
        <button type="button">Adicionar</button>
      </article>

      <article>
        <figure>
          <img src="./assets/img/burger-bacon.png"
            alt="Hambúrguer com bacon crocante e queijo cheddar em pão brioche" />
          <figcaption>Lanches</figcaption>
        </figure>
        <h3>Bacon Burger</h3>
        <p>Pão brioche, hambúrguer 160g, bacon, queijo cheddar e molho da casa.</p>
        <p><strong>R$ 25,00</strong></p>
        <button type="button">Adicionar</button>
      </article>

      <article>
        <figure>
          <img src="./assets/img/burger-double.png"
            alt="Hambúrguer duplo com cheddar, bacon e cebola caramelizada" />
          <figcaption>Lanches</figcaption>
        </figure>
        <h3>Duplo Burguer</h3>
        <p>Dois hambúrgueres de 160g cada, cheddar, bacon e cebola caramelizada.</p>
        <p><strong>R$ 29,00</strong></p>
        <button type="button">Adicionar</button>
      </article>

      <article>
        <figure>
          <img src="./assets/img/batata-rustica.png"
            alt="Porção de batatas rústicas douradas acompanhadas de molho verde" />
          <figcaption>Porções</figcaption>
        </figure>
        <h3>Batata Rústica</h3>
        <p>Porção de batata com alecrim, parmesao e maionese verde.</p>
        <p><strong>R$ 18,00</strong></p>
        <button type="button">Adicionar</button>
      </article>

      <article>
        <figure>
          <img src="./assets/img/batata-tradicional.png"
            alt="Porção de batata frita tradicional acompanhada de molho verde" />
          <figcaption>Porções</figcaption>
        </figure>
        <h3>Batata Tradicional</h3>
        <p>Porção de batata e maionese verde.</p>
        <p><strong>R$ 15,00</strong></p>
        <button type="button">Adicionar</button>
      </article>

      <article>
        <figure>
          <img src="./assets/img/agua.png"
            alt="Garrafa descartável de água mineral sem gás de 500 ml" />
          <figcaption>Bebida</figcaption>
        </figure>
        <h3>Água Sem Gás</h3>
        <p>Garrafa descartável de água sem gás com 500 ml.</p>
        <p><strong>R$ 8,00</strong></p>
        <button type="button">Adicionar</button>
      </article>

      <article>
        <figure>
          <img src="./assets/img/refri.png"
            alt="Copo de refrigerante com gelo" />
          <figcaption>Bebida</figcaption>
        </figure>
        <h3>Refrigerante 300 ml</h3>
        <p>Copo de refrigerante de 300 ml.</p>
        <p><strong>R$ 10,00</strong></p>
        <button type="button">Adicionar</button>
      </article>

      <article>
        <figure>
          <img src="./assets/img/chopp.png"
            alt="Caneca de chopp pilsen gelado com colarinho de espuma" />
          <figcaption>Bebida</figcaption>
        </figure>
        <h3>Chopp 300 ml</h3>
        <p>Caneca de 300 ml do nosso chopp pilsen geladíssimo.</p>
        <p><strong>R$ 15,00</strong></p>
        <button type="button">Adicionar</button>
      </article>

      <article>
        <figure>
          <img src="./assets/img/petit-gateau.png"
            alt="Petit gateau de chocolate acompanhado de uma bola de sorvete de creme" />
          <figcaption>Sobremesa</figcaption>
        </figure>
        <h3>Petit Gateau</h3>
        <p>Petit Gateau com uma bola de sorvete de creme.</p>
        <p><strong>R$ 25,00</strong></p>
        <button type="button">Adicionar</button>
      </article>

      <article>
        <figure>
          <img src="./assets/img/mousse-maracuja.png"
            alt="Pote de mousse de maracujá com sementes da fruta por cima" />
          <figcaption>Sobremesa</figcaption>
        </figure>
        <h3>Mousse de Maracujá</h3>
        <p>Mousse de maracujá feito com a fruta de verdade.</p>
        <p><strong>R$ 18,00</strong></p>
        <button type="button">Adicionar</button>
      </article>
    </section>

    <aside aria-label="Resumo do pedido">
  <h2>Seu pedido</h2>

<div className="cart-empty">
    <img src="./assets/img/cart.svg" alt="Carrinho de compras" />
    <p>Seu carrinho está vazio</p>
    <p>Escolha um item do cardápio para começar</p>
  </div>
</aside>
      </main>

      <Footer />
   </>
  )
}

export default App
