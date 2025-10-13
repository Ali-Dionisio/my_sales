import { AppDataSource } from "@shared/typeorm/data-source";
import { Product } from "../entities/Product";


export const productsRepositories = AppDataSource.getRepository(Product).extend(
{
   async findByName(name: string): Promise<Product | null> {
     const product = this.findOneBy({
       name,
      });
      console.log("tst3", product);
      return product;
  },
  async findById(id: string): Promise<Product | null>{
    return this.findOneBy({ id });
  },
})

