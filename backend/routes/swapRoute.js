import express from 'express';
import { addSwap, listSwap, removeSwap } from '../controllers/swapController.js';
import multer from 'multer';
const swapRouter = express.Router();


const storage = multer.diskStorage({
    destination: 'uploads', // Diretório de destino para os arquivos
    filename: (req, file, cb) => {
        // Nome do arquivo inclui a data/hora atual e o nome original do arquivo (para não haverem repetições de nomes)
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage})

swapRouter.get("/list",listSwap);
swapRouter.post("/add",upload.single('image'),addSwap);
swapRouter.delete("/remove/:id",removeSwap);
export default swapRouter;