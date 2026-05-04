export interface IContactFormRequest {
    name: string;
    email: string;
    phone: string;
    message: string;
}


export interface IContactFormResponse {
    success: boolean;
    message: string;
    data: IContactFormData;
}

export interface IContactFormData {
    id: number;
    name: string;
    email: string;
    phone: string;
    message: string;
    created_at: string;
    updated_at: string;
}