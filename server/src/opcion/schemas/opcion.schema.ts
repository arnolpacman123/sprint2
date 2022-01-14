import { Schema } from 'mongoose';

export const OpcionSchema = new Schema(
  {
    valor: {
      type: String,
      required: true,
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
