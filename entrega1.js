// clase "productManager"
class ProductManager {
    constructor(){
        this.products= []
    }


//metodos
addProduct(objeto){
    // busco si el objeto ingresado esta en el array 'this.products'
    let findTitle = this.products.find(e => e.title=== objeto.title)
    if(findTitle === undefined){
        // si "result" es undefined(el producto no existe en el array "products") agregarlo
        this.products.push(objeto);
}else {
    // arrojar un error cuando se ingresa el mismo producto
    console.log("el producto ya existe en el array");
}
console.log("mostrar array")
console.log(this.products);
}

getProduct(){
    // condicional(si el array "products" esta vacio)
    if(this.products.length===0){
        console.log("el array de productos esta vacio")
    }else{
        // mostrar todos los productos del array
        console.log("mostrar todos los productos almacenados en el array products");
        for ( const key in this.products){
            console.log(this.products[key])
        }
    }
}

    getProductById (codeId){
        let findCode =this.products.find(e=> e.code=== codeId)
            if(findCode === undefined || typeof codeId !== "number"){
                console.log("Error : not found");
                    }else{
                        console.log(findCode)
            }

        }   
}

//clase porducto

class Product{
    constructor(title, description, price, thumbnail, code, stock){
        this.title=title,
        this.description=description,
        this.price=price,
        this.thumbnail=thumbnail,
        this.code=code,
        this.stock=stock
        }
        /* getId() {
        return this.code;
    } */
}

// 1 - instancia clase 

const newProduct = new ProductManager ();

// 2- mostrar el array de productos vacio

newProduct.getProduct() /* el array de productos esta vacio! */

// 3- agrego 2 productos al array "products"

newProduct.addProduct(new Product("tarugo" , 'lorem lorem lore lorem', 150, 'sin imagen', 0, 10));
newProduct.addProduct(new Product("tornillo" , 'lorem lorem lore lorem', 200 , 'sin imagen', 0, 10));

// 4- mostrar todos los productos cargados en el array

newProduct.getProduct()/* 2 productos en el array */

// 5- volver a ingresar un producto que este en el array

newProduct.addProduct(new Product("tarugo",'lorem lorem lore lorem', 200 , 'sin imagen', 0, 10)) /* el producto ya existe en el array */

// 6- consultar por el id de un producto.

console.log("buscar un producto por su id");
newProduct.getProductById(0);
console.log("ingreso un id que no existe");
newProduct.getProductById(5)
console.log('ingreso de texto');
newProduct.getProductById('hola');