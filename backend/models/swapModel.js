import mongoose from "mongoose";

// Define o esquema para o modelo de produto
const swapSchema = new mongoose.Schema({
    // Nome do livro (obrigatório)
    name: { type: String, required: true },
    
    // Nome do autor do livro (obrigatório)
    author: { type: String, required: true },

    // Descrição do produto (obrigatório)
    description: { type: String, required: true },

    // Preço do produto (obrigatório)
    price: { type: Number, required: true },

    // Imagem do produto (obrigatório)
    image: { type: String, required: true },

})

// Cria o modelo "swap" baseado no esquema definido ou utiliza o já existente
const swapModel = mongoose.models.swap || mongoose.model("swap", swapSchema);

// Exporta o modelo "swap" para ser utilizado em outras partes do aplicativo
export default swapModel;