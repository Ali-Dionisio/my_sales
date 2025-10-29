import { AppDataSource } from "@shared/typeorm/data-source"; // Importe a fonte de dados
import { Product } from "../database/entities/Product";

export default class ListProductService {
  async execute(): Promise<Product[]>{
    // 1. OBTENHA o repositório DA CONEXÃO ATIVA
    const productsRepository = AppDataSource.getRepository(Product);

    // 2. Tente um console.log extra para ver se o código anterior chegou aqui
    console.log("Tentando acessar o BD com repositório ativo...");

    const products = await productsRepository.find(); // Linha de travamento

    console.log("Consulta BD sucedida!");
    return products
  }
}
