import NextFetchService from "@/shared/services/next.fetch.service";
import { IConversionDiagnosticFormRequest, IConversionDiagnosticFormResponse } from "@/entities/conversionDiagnostic/Model/type";

export const sendConversionDiagnosticData = (
    data: IConversionDiagnosticFormRequest
): Promise<IConversionDiagnosticFormResponse> => {
    return NextFetchService.post<IConversionDiagnosticFormResponse>(
        '/audit',
        data
    );
};