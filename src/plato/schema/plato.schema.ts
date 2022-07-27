
import { Schema } from "mongoose";

export const PlatoSchema = new Schema({
    nombre : {type: String, required: true},
    precio : {type: Number, required: true},
    imagen : {type: String, required: true}
});