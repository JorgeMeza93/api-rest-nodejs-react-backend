import mongoose from "mongoose";

const Schema = mongoose.Schema;
const productoSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    precio: {
        type: Number
    },
    codigo: {
        type: String,
        trim: true
    },
    imagen: {
        type: String
    }
});
const Producto = mongoose.model("productos", productoSchema)
export default Producto;