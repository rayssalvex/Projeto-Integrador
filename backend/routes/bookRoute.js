import express from 'express';
import { addBook, listBook, editBook, updateStatus, removeBook, updatePromotion } from '../controllers/bookController.js';
import multer from 'multer';
const bookRouter = express.Router();


const storage = multer.diskStorage({
    destination: 'uploads', // Diretório de destino para os arquivos
    filename: (req, file, cb) => {
        // Nome do arquivo inclui a data/hora atual e o nome original do arquivo (para não haverem repetições de nomes)
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage})

bookRouter.get("/list",listBook);
bookRouter.post("/add",upload.single('image'),addBook);
bookRouter.put("/edit/:id", upload.single('image'), editBook);
bookRouter.put("/updateStatus/:id", updateStatus);
bookRouter.put("/updatePromotion/:id", updatePromotion);
bookRouter.delete("/remove/:id",removeBook);
export default bookRouter;