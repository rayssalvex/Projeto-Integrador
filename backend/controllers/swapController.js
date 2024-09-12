import swapModel from "../models/swapModel.js";
import fs from 'fs';

// Lista todos os produtos
const listSwap = async (req, res) => {
    try {
        // Tenta encontrar todos os produtos no banco de dados
        const swaps = await swapModel.find({});
        // Responde com um JSON contendo sucesso e os dados dos produtos
        res.json({ success: true, data: books });
    } catch (error) {
        // Em caso de erro, loga o erro no console
        console.log(error);
        // Responde com um JSON indicando falha e uma mensagem de erro
        res.json({ success: false, message: "Erro" });
    }
};

// Adiciona um novo produto
const addSwap = async (req, res) => {
    try {
        // Obtém o nome do arquivo de imagem enviado
        let image_filename = `${req.file.filename}`;

        // Cria um novo modelo de produto com os dados fornecidos no corpo da requisição
        const swap = new swapModel({
            name: req.body.name,
            author: req.body.author,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename,
        });

        // Salva o novo produto no banco de dados
        await swap.save();
        // Responde com sucesso e uma mensagem de confirmação
        res.json({ success: true, message: "Produto adicionado" });
    } catch (error) {
        // Em caso de erro, loga o erro no console
        console.log(error);
        // Responde com um JSON indicando falha e uma mensagem de erro
        res.json({ success: false, message: "Erro ao adicionar produto" });
    }
};

// Remove um produto
const removeSwap = async (req, res) => {
    try {
        // Obtém o ID do produto a ser removido
        const swapId = req.params.id;
        // Tenta encontrar o produto no banco de dados
        const swap = await bookModel.findById(swapId);
        if (!swap) {
            // Se o produto não for encontrado, responde com falha
            return res.json({ success: false, message: "Produto não encontrado" });
        }
        // Remove o arquivo de imagem do produto
        fs.unlink(`uploads/${swap.image}`, () => {});

        // Remove o produto do banco de dados
        await swapModel.findByIdAndDelete(swapId);
        // Responde com sucesso e uma mensagem de confirmação
        res.json({ success: true, message: "Produto removido" });
    } catch (error) {
        // Em caso de erro, loga o erro no console
        console.log(error);
        // Responde com um JSON indicando falha e uma mensagem de erro
        res.json({ success: false, message: "Erro ao remover produto" });
    }
};

export { listSwap, addSwap, removeSwap};
