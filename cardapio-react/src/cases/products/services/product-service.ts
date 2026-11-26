import {api} from "../../../lib/axios";
import type { Product } from "../dtos/product";

const ENDPOINT = "/Products?key=f0b5fa10";

export const ProductService = {
async listAll(): Promise<Product[]> {
    const result = await api.get<Product[]>(ENDPOINT);
    return result.data;
  }
}
