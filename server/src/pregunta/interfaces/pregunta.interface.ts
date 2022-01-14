import { Document } from 'mongoose';

export interface Pregunta extends Document {
    readonly enunciado:     string;
    readonly estado:        boolean;
    readonly created_at:    Date;
    readonly updated_at:    Date;
}