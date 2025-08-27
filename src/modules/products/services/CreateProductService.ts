import AppError from "@shared/errors/AppError";
import { Product } from "../database/entities/Product";
import { productsRepositories } from "../database/repositories/ProductsRepositories";

interface ICreateProducts{
  name: string,
  price: number,
  quantity: number
}

export default class CreateProductService{
  async execute({name, price, quantity}: ICreateProducts): Promise<Product> {
    const productsExists = await productsRepositories.findByName(name);

    if(productsExists){
      throw new AppError('There is already one product with this name', 409);
    }

    const product = productsRepositories.create({
      name,
      price,
      quantity
    });

    await productsRepositories.save(product);

    return product;
  }
}
