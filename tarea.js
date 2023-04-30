class ProductManager {
    constructor(){
        this.products = [];
    }

    getProducts() {
        console.log(this.products);
        return this.products;
    }

    buscarProductos(id) {
        const found = this.products.find((prod) => prod.id == id);
        if (found) {
            return found;
        }else {
            return undefined;
        }
    }
    addProduct(title, description, price, thumbnail, code, stock){
        nombre

    }
}
