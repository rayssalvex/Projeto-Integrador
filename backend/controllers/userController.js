import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../models/userModel.js";

// Função para criar um token JWT usando o ID do usuário
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

// Função para login do usuário
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Busca o usuário pelo email fornecido
        const user = await userModel.findOne({ email });

        // Se o usuário não existir, responde com uma mensagem de erro
        if (!user) {
            return res.json({ success: false, message: "Usuário não existe" });
        }

        // Compara a senha fornecida com a senha armazenada no banco de dados
        const isMatch = await bcrypt.compare(password, user.password);

        // Se a senha não for correspondente, responde com uma mensagem de erro
        if (!isMatch) {
            return res.json({ success: false, message: "Credenciais inválidas" });
        }

        // Cria um token JWT para o usuário autenticado
        const token = createToken(user._id);
        // Responde com sucesso e o token gerado
        res.json({ success: true, token });
    } catch (error) {
        // Em caso de erro, loga o erro no console
        console.log(error);
        // Responde com um JSON indicando falha e uma mensagem de erro
        res.json({ success: false, message: "Erro" });
    }
}

// Função para registrar um novo usuário
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Verifica se o usuário já existe
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "Usuário já existe" });
        }

        // Valida o formato do email e a força da senha
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Por favor, insira um email válido" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Por favor, insira uma senha forte" });
        }

        // Gera um salt para o hash da senha
        const salt = await bcrypt.genSalt(10);
        // Hasheia a senha do usuário
        const hashedPassword = await bcrypt.hash(password, salt);

        // Cria um novo usuário com os dados fornecidos e a senha hasheada
        const newUser = new userModel({ name, email, password: hashedPassword });
        // Salva o novo usuário no banco de dados
        const user = await newUser.save();
        // Cria um token JWT para o usuário registrado
        const token = createToken(user._id);
        // Responde com sucesso e o token gerado
        res.json({ success: true, token });
    } catch (error) {
        // Em caso de erro, loga o erro no console
        console.log(error);
        // Responde com um JSON indicando falha e uma mensagem de erro
        res.json({ success: false, message: "Erro" });
    }
}

// Adicionar um item aos favoritos do usuário
// const addFavorite = async (req, res) => {
//     const userId = req.user.id; 
//     const itemId = req.body.itemId; 
//     try {
//         const user = await userModel.findById(userId);
//         if (!user.favorites.includes(itemId)) {
//             user.favorites.push(itemId); 
//             await user.save(); 
//         }

//         res.json({ success: true, message: 'Item adicionado aos favoritos!' });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: 'Erro ao adicionar aos favoritos' });
//     }
// }

// Remover um item dos favoritos do usuário
// const removeFavorite = async (req, res) => {
//     const userId = req.user.id;
//     const itemId = req.body.itemId;

//     try {
//         const user = await userModel.findById(userId);
//         user.favorites = user.favorites.filter(fav => fav.toString() !== itemId);
//         await user.save();

//         res.json({ success: true, message: 'Item removido dos favoritos!' });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: 'Erro ao remover dos favoritos' });
//     }
// }

// Obter a lista de favoritos do usuário
// const getFavorites = async (req, res) => {
//     const userId = req.user.id;

//     try {
//         const user = await userModel.findById(userId).populate('favorites');
//         res.json(user.favorites); // Retorna os favoritos do usuário
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: 'Erro ao buscar favoritos' });
//     }
// }

export { loginUser, registerUser };

// addFavorite, removeFavorite, getFavorites