import { CreatePaymentScheme } from '../models/CreatePaymentScheme.js';
import { CreateSplit } from '../models/CreateSplit.js';
import { PaymentMethod } from './PaymentMethod.js';
export type CreatePayment<T extends PaymentMethod> = {
    payment_method: T;
    split?: CreateSplit[];
} & {
    [key in string & T]: CreatePaymentScheme[T];
};
