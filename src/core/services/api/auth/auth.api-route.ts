import {API_BASE_URL, API_VERSION} from '@/core/constants/settings.constants';

const API_BASE_PATH = `${API_BASE_URL}/${API_VERSION}/auth`;

export default {
    verifyCode: `${API_BASE_PATH}/verify-code`,
    refreshToken: `${API_BASE_PATH}/refresh-token`,
}