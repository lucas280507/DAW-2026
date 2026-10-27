import type { Category } from "../../data/categories"

type NavigationBarProps = {
    categories: Category[]
    activeCategory: string
    onSelectCategory: (categoryAlias: string) => void
  }
export function NavigationBar({ 

      categories,
      activeCategory,
      onSelectCategory

  }: NavigationBarProps) {
    return (
        <nav aria-label="Categorias">
          <ul className="Container">
            {categories.map((category) => (
            <li key={category.alias}>
              <button 
                type="button"
                className={category.alias == activeCategory ? 'active' : ''}
                onClick={() => onSelectCategory(category.alias)}
                >
                {category.label}
              </button>
            </li>
            ))}
          </ul>    
        </nav>
    )}  
