import bookModel from "../models/bookModel.js";
import fs from 'fs';

// Lista todos os produtos
const listBook = async (req, res) => {
    try {
        // Tenta encontrar todos os produtos no banco de dados
        const books = await bookModel.find({});
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
const addBook = async (req, res) => {
    try {
        // Obtém o nome do arquivo de imagem enviado
        let image_filename = `${req.file.filename}`;

        // Cria um novo modelo de produto com os dados fornecidos no corpo da requisição
        const book = new bookModel({
            name: req.body.name,
            author: req.body.author,
            page: req.body.page,
            description: req.body.description,
            status: req.body.status,
            price: req.body.price,
            category: req.body.category,
            image: image_filename,
        });

        // Salva o novo produto no banco de dados
        await book.save();
        // Responde com sucesso e uma mensagem de confirmação
        res.json({ success: true, message: "Produto adicionado" });
    } catch (error) {
        // Em caso de erro, loga o erro no console
        console.log(error);
        // Responde com um JSON indicando falha e uma mensagem de erro
        res.json({ success: false, message: "Erro ao adicionar produto" });
    }
};

const detailsBook = async (req, res) => {
    try {
        // Busca o livro no banco de dados pelo ID passado na rota
        const book = await bookModel.findById(req.params.id);

        // Verifica se o livro foi encontrado
        if (book) {
            // Retorna o livro encontrado
            res.json({ success: true, data: book });
        } else {
            // Se não encontrado, retorna uma mensagem de erro
            res.json({ success: false, message: 'Livro não encontrado' });
        }
    } catch (error) {
        // Em caso de erro, responde com uma mensagem e loga o erro no console
        console.log(error);
        res.json({ success: false, message: 'Erro no servidor' });
    }
};

// Edita um produto existente
const editBook = async (req, res) => {
    try {
        // Obtém o ID do produto a ser editado
        const { id } = req.params;
        // Obtém os dados atualizados do corpo da requisição
        const updatedData = req.body;

        // Se um novo arquivo de imagem for enviado, inclui-o na atualização
        if (req.file) {
            updatedData.image = `${req.file.filename}`;

            // Remove o arquivo de imagem antigo
            const oldBook = await bookModel.findById(id);
            if (oldBook && oldBook.image) {
                fs.unlink(`uploads/${oldBook.image}`, (err) => {
                    if (err) console.log(err);
                });
            }
        }

        // Atualiza o produto no banco de dados
        const book = await bookModel.findByIdAndUpdate(id, updatedData, { new: true });
        if (!book) {
            return res.json({ success: false, message: "Produto não encontrado" });
        }

        // Responde com sucesso e uma mensagem de confirmação
        res.json({ success: true, message: "Produto atualizado", data: book });
    } catch (error) {
        // Em caso de erro, loga o erro no console
        console.log(error);
        // Responde com um JSON indicando falha e uma mensagem de erro
        res.json({ success: false, message: "Erro ao atualizar produto" });
    }
};

// Atualiza o status de um produto
const updateStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        // Tenta encontrar o produto pelo ID
        const bookItem = await bookModel.findById(id);

        if (!bookItem) {
            // Se o produto não for encontrado, responde com falha
            return res.status(404).json({ success: false, message: 'Produto não encontrado' });
        }

        // Atualiza o status do produto
        bookItem.status = status;
        await bookItem.save();

        // Responde com sucesso e uma mensagem de confirmação
        res.json({ success: true, message: 'Status atualizado com sucesso' });
    } catch (error) {
        // Em caso de erro, responde com falha e uma mensagem de erro
        res.status(500).json({ success: false, message: 'Erro ao atualizar o status', error });
    }
};

// Atualiza o status de promoção de um produto
const updatePromotion = async (req, res) => {
    const { id } = req.params;
    const { promotion } = req.body;

    try {
        // Tenta encontrar o produto pelo ID
        const bookItem = await bookModel.findById(id);

        if (!bookItem) {
            // Se o produto não for encontrado, responde com falha
            return res.status(404).json({ success: false, message: 'Produto não encontrado' });
        }

        // Atualiza o status de promoção do produto
        bookItem.promotion = promotion;
        await bookItem.save();

        // Responde com sucesso e uma mensagem de confirmação
        res.json({ success: true, message: 'Promoção atualizada com sucesso' });
    } catch (error) {
        // Em caso de erro, responde com falha e uma mensagem de erro
        res.status(500).json({ success: false, message: 'Erro ao atualizar a promoção', error });
    }
};


// Remove um produto
const removeBook = async (req, res) => {
    try {
        // Obtém o ID do produto a ser removido
        const bookId = req.params.id;
        // Tenta encontrar o produto no banco de dados
        const book = await bookModel.findById(bookId);
        if (!book) {
            // Se o produto não for encontrado, responde com falha
            return res.json({ success: false, message: "Produto não encontrado" });
        }
        // Remove o arquivo de imagem do produto
        fs.unlink(`uploads/${book.image}`, () => {});

        // Remove o produto do banco de dados
        await bookModel.findByIdAndDelete(bookId);
        // Responde com sucesso e uma mensagem de confirmação
        res.json({ success: true, message: "Produto removido" });
    } catch (error) {
        // Em caso de erro, loga o erro no console
        console.log(error);
        // Responde com um JSON indicando falha e uma mensagem de erro
        res.json({ success: false, message: "Erro ao remover produto" });
    }
};

export { listBook, detailsBook, addBook, editBook, removeBook, updateStatus, updatePromotion};
