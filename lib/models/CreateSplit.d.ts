import { CreateSplitOptions } from './CreateSplitOptions.js';
export interface CreateSplit {
    amount: number;
    options?: CreateSplitOptions;
    recipient_id: string;
    split_rule_id?: string;
    type: 'percentage' | 'flat';
}
