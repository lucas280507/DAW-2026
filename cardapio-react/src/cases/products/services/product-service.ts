import {products} from "../dtos/product";

export const productService = {
  listAll() {
    return products;
  }
}
