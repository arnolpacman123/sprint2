import { Document } from 'mongoose';
export interface AplicacionEncuesta extends Document {
    readonly encuestado: string;
    readonly created_at: Date;
    readonly updated_at: Date;
}