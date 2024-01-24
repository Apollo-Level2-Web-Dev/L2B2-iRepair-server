// models/Service.ts
import mongoose, { Schema } from 'mongoose';
import { IService } from './service.interface';

const serviceSchema: Schema<IService> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  serviceImg: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  devices: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  // Add any other fields relevant to your Service model
});

export const Service = mongoose.model<IService>('Service', serviceSchema);
