export interface Payment {
    id: string;
    purchase_date:string;
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