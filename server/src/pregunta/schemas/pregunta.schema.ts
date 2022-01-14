import { Schema } from 'mongoose';

export const PreguntaSchema = new Schema(
  {
    enunciado: {
      type: String,
      required: true,
    },
    estado: {
      type: Boolean,
      default: true,
    },
    tipo_pregunta: {
      type: Schema.Types.ObjectId,
      ref: 'TipoPregunta',
    },
    opciones: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Opcion'
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
