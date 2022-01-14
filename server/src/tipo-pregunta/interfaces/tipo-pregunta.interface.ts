import { Document } from 'mongoose';

export interface TipoPregunta extends Document {
    readonly nombre:        string;
    readonly estado:        boolean;
    readonly created_at:    Date;
    readonly updated_at:    Date;
}