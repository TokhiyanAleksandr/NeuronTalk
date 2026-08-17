export interface IConversionDiagnosticFormRequest {
    name: string;
    email: string;
    phone: string;
    improve: string;
    message: string;
}


export interface IConversionDiagnosticFormResponse {
    success: boolean;
    message: string;
    data: IConversionDiagnosticFormData;
}

export interface IConversionDiagnosticFormData {
    id: number;
    name: string;
    email: string;
    phone: string;
    improve: string;
    message: string;
    created_at: string;
    updated_at: string;
}