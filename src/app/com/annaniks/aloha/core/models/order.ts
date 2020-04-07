export interface Order {
    id: string;
    parent: number;
    quantity: number;
    egg: string;
    name: string;
    unit: string;
    price: number;
    descr: string;
}

export interface OrderData {
    goods: number;
    count: number;
    action: string;
    message: string;
}