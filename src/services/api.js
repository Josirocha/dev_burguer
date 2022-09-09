import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-dev-burguer.herokuapp.com/",
});

export const getProdutos = async () => {
    const response = await api.get("/produtos");
    return response.data;
};

export const deleteProduto = async (id) => {
    const response = await api.delete(`/produtos/${id}`)
    return response.data;
}

export const postProdutos = async (data) => {
    const response = await api.post("/produtos", data);
    return response.data;
};

export const atualizaProdutos = async (id, dados) => {
    await api.patch(`/produtos/${id}`, dados)
}
