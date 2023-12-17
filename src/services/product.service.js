import axios from 'axios'

export const ProductService = {
    async getAll() {
        const response = await axios.get('http://localhost:3000/products')

        return response.data
    },
    async getById(id) {
        const response = await axios.get(`http://localhost:3000/products?id=${id}`)

        return response.data[0]
    },

}

