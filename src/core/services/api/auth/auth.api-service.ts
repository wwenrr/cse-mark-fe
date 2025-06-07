import type { ReqModel, ResModel } from '@/core/models/authenticate.model';
import { mockResModel } from '@/core/data/_mock/auth.res-model';
import { handleApiResponse } from '@/core/helpers/api.helper';
import Route from './auth.api-route'

export const mockVerifyCode: {
    authenticate: (code: ReqModel) => Promise<ResModel>
} = {
    authenticate: (code: ReqModel) => {
        return Promise.resolve(mockResModel)
    }
}

export const verifyCode = async (code: ReqModel): Promise<ResModel> => {
    const response = await fetch(Route.verifyCode, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(code)
    });

    return await handleApiResponse(response);
};