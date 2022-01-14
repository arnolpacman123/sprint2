import { Document } from 'mongoose';

export interface Opcion extends Document {
    readonly valor:         string;
    readonly estado:        boolean;
    readonly created_at:    Date;
    readonly updated_at:    Date;
}