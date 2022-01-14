import { Schema } from 'mongoose';

export const RespuestaSchema = new Schema(
  {
    opciones: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Opcion',
      },
    ],
    pregunta: {
      type: Schema.Types.ObjectId,
      ref: 'Pregunta'
    },
    estado: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);
