import api from "../../services/api";

export const httpCalls={
    getProducts: ()=>  api.get("/products")
}

