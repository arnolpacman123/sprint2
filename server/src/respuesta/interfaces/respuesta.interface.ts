import { Document } from 'mongoose';
export interface Respuesta extends Document {
    readonly estado: boolean;
    readonly created_at: Date;
    readonly updated_at: Date;
}