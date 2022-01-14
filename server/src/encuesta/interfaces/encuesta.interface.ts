import { Document } from 'mongoose';

export interface Encuesta extends Document {
  readonly titulo:      string;
  readonly descripcion: string;
  readonly estado:      boolean;
  readonly created_at:  Date;
  readonly updated_at:  Date;
}