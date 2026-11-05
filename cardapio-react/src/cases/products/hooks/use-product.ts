import { productService } from "../services/product-service";

export function useProducts() {
 return productService.listAll();
}