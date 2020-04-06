export interface ServerResponse {
    status: number;
    msg?: string;
}
interface Error {
    code: number,
    message: string
}