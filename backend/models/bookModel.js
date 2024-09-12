import mongoose from "mongoose";

// Define o esquema para o modelo de produto
const bookSchema = new mongoose.Schema({
    // Nome do livro (obrigatório)
    name: { type: String, required: true },
    
    // Nome do autor do livro (obrigatório)
    author: { type: String, required: true },

    // Descrição do produto (obrigatório)
    description: { type: String, required: true },

    // Promoção do produto (se estará visível ou não na parte de promoções, com desconto. Padrão é falso)
    promotion: { type: Boolean, required: true, default: false },

    // Status do produto (se estará visível ou não no site, padrão é falso)
    status: { type: Boolean, required: true, default: false },

    // Preço do produto (obrigatório)
    price: { type: Number, required: true },

    // Imagem do produto (obrigatório)
    image: { type: String, required: true },

    // Categoria do produto (obrigatório)
    category: { type: String, required: true }
})

// Cria o modelo "book" baseado no esquema definido ou utiliza o já existente
const bookModel = mongoose.models.book || mongoose.model("book", bookSchema);

// Exporta o modelo "book" para ser utilizado em outras partes do aplicativo
export default bookModel;
