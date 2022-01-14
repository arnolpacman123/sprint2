import { Schema } from 'mongoose';

export const EncuestaSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    descripcion: String,
    estado: {
      type: Boolean,
      default: true,
    },
    secciones: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Seccion'
      }
    ],
    aplicaciones_encuestas: [
      {
        type: Schema.Types.ObjectId,
        ref: 'AplicacionEncuesta'
      }
    ],
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);
