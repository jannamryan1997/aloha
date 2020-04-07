export interface User {
    id: string;
    email: string;
    contract: number;
    phone: number;
    country: string;
    name: string;
    details: string;
    promocode: string;
}

export interface CountryResponse {
    name: string;
    code: string;

}