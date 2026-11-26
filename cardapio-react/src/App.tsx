import { ProductCard } from "./cases/products/components/product-card";
import { useProducts } from "./cases/products/hooks/use-product";
import { Footer } from "./components/layout/footer";
import {Header} from "./components/layout/header";
import { Nav } from "./components/layout/Nav";
import { categories } from  "./data/categories";
import { useState } from "react";
function App() {
  
  const [activeCategory, setActiveCategory] = useState<string>('todos');
   const { products, loading, error

   } = useProducts();

   const visibleProducts = activeCategory === 'todos' 
   ? products :
    products.filter(product => product.category === activeCategory);
  
  function handleSelectCategory(alias: string) {
    setActiveCategory(alias);
  }
  return (
    <>
     <Header />

     <Nav categories={categories} activeCategory={activeCategory} onSelectCategory={handleSelectCategory} />

      <main>
        <section>
          <header>
            <h2>Produtos</h2>
            <p>Categoria <span id="selected-category">{activeCategory}</span> - {visibleProducts.length} itens</p>
          </header>


                      {loading && <p>Carregando produtos...</p>}

          {error && <p>Erro ao carregar produtos: {error}</p>
          }



          
         {visibleProducts.map(product => (
  <ProductCard product={product} />
))}
        

      
          
        </section>

        <aside>
          <h2>Seu Pedido</h2>
          <div className="cart-empty">
            <img src="./assets/img/cart.svg" alt="Carrinho vazio" />
            <p>Seu carrinho está vazio</p>
            <p>Escolha um item do cardápio para começar.</p>
          </div>
        </aside>
      </main>
      <Footer />
      <Footer />
      <script src="assets/js/script.js"></script>
    </>
  )
}

export default App