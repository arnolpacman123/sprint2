import { Document } from 'mongoose';

export interface Encuestador extends Document {
    readonly nombres:       string;
    readonly apellidos:     string;
    readonly correo:        string;
    readonly contrasena:    string;
    readonly estado:        boolean;
    readonly created_at:    Date;
    readonly updated_at:    Date;
}