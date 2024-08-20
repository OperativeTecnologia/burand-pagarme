import { CreateSplit } from './CreateSplit.js';

export interface CreateSubscriptionSplit {
  enabled: boolean;
  rules: CreateSplit[];
}
