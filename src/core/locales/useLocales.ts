import { LocaleEnum } from "@/core/constants/app-enum.constants";
import en_US from "./en_US";
import vi_VN from "./vi_VN";

type LocaleMessages = {
    [key: string]: any;
};

export const useLocales = () => {
    const locales: { code: LocaleEnum; callback: LocaleMessages }[] = [
        { code: LocaleEnum.en_US, callback: en_US },
        { code: LocaleEnum.vi_VN, callback: vi_VN }
    ];

    const getLocaleName = (code: LocaleEnum, msg: string) => {
        const locale = locales.find(l => l.code === code);

        return locale?.callback?.[msg] ?? locale?.callback?.['lang_not_found'];
    };

    return {
        locales,
        getLocaleName,
    };
};