export interface PaymentResponse {
    id: string;
    action: string;
    goods: number;
    quantity: number;
    amount: number;
    paid: string;
    done: string;
    cancel: string;
    accepted: string;
    descr: string;
}