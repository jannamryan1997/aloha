export interface UserAddress {
    id: string,
    billing: boolean,
    main: boolean,
    country: string,
    zip: number,
    address: string,
}
export interface UserAddressData {
    id?: string;
    billing: boolean;
    main: boolean;
    country: string;
    zip: number;
    address: string;
}