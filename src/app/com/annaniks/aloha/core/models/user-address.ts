export interface UserAddressResponse {
    id: string,
    billing: boolean,
    main: boolean,
    country: string,
    zip: number,
    address: string,
}
export interface UserAddressData{
    billing: boolean,
    main: boolean,
    country: string,
    zip: number,
    address: string,
}