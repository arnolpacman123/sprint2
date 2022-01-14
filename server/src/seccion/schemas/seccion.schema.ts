import { Schema } from 'mongoose';

export const SeccionSchema = new Schema(
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
    preguntas: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Pregunta'
      }
    ]
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);
