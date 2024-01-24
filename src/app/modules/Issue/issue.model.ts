// models/Issue.ts
import mongoose, { Schema } from 'mongoose';
import { IIssue } from './issue.interface';

const issueSchema: Schema<IIssue> = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  device: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: [
      'pending',
      'received',
      'in-progress',
      'resolved',
      'failed',
      'delivered',
    ],
    default: 'pending',
  },
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  serviceId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

export const Issue = mongoose.model<IIssue>('Issue', issueSchema);
