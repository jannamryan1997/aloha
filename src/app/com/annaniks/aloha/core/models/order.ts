export interface Order {
    id: string;
    parent: number;
    quantity: number;
    egg: string;
    name: string;
    unit: string;
    price: number;
    descr: string;
    goods: string;
}

export interface OrderData {
    goods: string;
    count: number;
    action: string;
    message: string;
}