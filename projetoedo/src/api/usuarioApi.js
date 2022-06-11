import axios from "axios";
const api = axios.create({
    baseURL:'http://localhost:5000'
})



export async function login(nome,senha) {
    const r = await api.post('/usuario/login', {
        nome: nome,
        senha: senha
        });

        return r.data;
}