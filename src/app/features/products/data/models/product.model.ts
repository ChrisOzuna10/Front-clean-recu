export class Product {
    id: number
    name: string
    price: GLfloat

    constructor(id: number, name: string, price: GLfloat) {
        this.id = id
        this.name = name
        this.price = price
    }
}