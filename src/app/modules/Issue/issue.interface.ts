import { ObjectId } from 'mongoose';

export interface IIssue {
  title: string;
  description: string;
  status:
    | 'pending'
    | 'received'
    | 'in-progress'
    | 'resolved'
    | 'failed'
    | 'delivered';
  device: string;
  userId: ObjectId;
  serviceId: ObjectId;
}
