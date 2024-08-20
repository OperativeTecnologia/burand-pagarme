import { Plan } from '../models/Plan.js';
import { PagarmeAbstract } from './PagarmeAbstract.js';
export declare class PagarmePlanRepository extends PagarmeAbstract {
    getById(id: string): Promise<Plan>;
    getAll(): Promise<Plan[]>;
}
