class ProductManager {
    constructor(){
        this.products = [];
    }

    getProducts() {
        console.log(this.products);
        return this.products;
    }

    getProductsById(id) {
        const found = this.products.find((prod) => prod.id == id);
        if (found){
            return found;
        } else {
            console.log("Not Found");
        }
        
        
    }
    #generateId () {
        let maxId = 0;
        for (let i = 0; i < this.products.length; i++){
            const prod = this.products[i];
            if (prod.id > maxId) {
                maxId = prod.id;
            }
        }
        return ++maxId;

    }
    addProduct(title, description, price, thumbnail, code, stock){
        
        let newProduct = { title, description, price, thumbnail, code, stock, id: this.#generateId() };
        this.products = [...this.products, newProduct];
        return true;
        


    }
    
}

const generator = new ProductManager();

generator.addProduct("Producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

const found = generator.getProductsById(1)
console.log(generator.products);
