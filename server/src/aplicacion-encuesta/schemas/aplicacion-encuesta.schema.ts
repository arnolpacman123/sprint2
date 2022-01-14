import { Schema } from 'mongoose';

export const AplicacionEncuestaSchema = new Schema(
  {
    encuestado: String,
    estado: {
      type: Boolean,
      default: true,
    },
    encuestador: {
      type: Schema.Types.ObjectId,
      ref: 'Encuestador'
    },
    respuestas: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Respuesta'
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
