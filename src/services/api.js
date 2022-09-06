import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-dev-burguer.herokuapp.com/",
});

export const getProdutos = async () => {
    const response = await api.get("/produtos");
    return response.data;
};
