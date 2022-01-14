import { Schema } from 'mongoose';

export const TipoPreguntaSchema = new Schema(
  {
    nombre: String,
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
