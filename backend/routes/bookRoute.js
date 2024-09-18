import express from 'express';
import { 
    addBook, 
    listBook, 
    detailsBook, 
    editBook, 
    updateStatus, 
    removeBook, 
    updatePromotion 
} from '../controllers/bookController.js';
import multer from 'multer';

const bookRouter = express.Router();

// Configuração do multer para upload de arquivos
const storage = multer.diskStorage({
    destination: 'uploads', // Diretório de destino para os arquivos
    filename: (req, file, cb) => {
        // Nome do arquivo inclui a data/hora atual para evitar conflitos de nome
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// Rotas da aplicação de livros
bookRouter.get("/list", listBook); // Rota para listar todos os livros
bookRouter.get("/get/:id", detailsBook); // Rota para pegar os detalhes de um livro por ID
bookRouter.post("/add", upload.single('image'), addBook); // Rota para adicionar um novo livro com upload de imagem
bookRouter.put("/edit/:id", upload.single('image'), editBook); // Rota para editar um livro por ID, com opção de atualizar a imagem
bookRouter.put("/updateStatus/:id", updateStatus); // Rota para atualizar o status do livro (disponível/indisponível)
bookRouter.put("/updatePromotion/:id", updatePromotion); // Rota para atualizar a promoção do livro
bookRouter.delete("/remove/:id", removeBook); // Rota para remover um livro por ID

export default bookRouter;
