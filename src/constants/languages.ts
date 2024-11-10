import { translate } from '@helpers/i18n';
import { LanguageItem } from '@interfaces/language.interface';

export const languages: LanguageItem[] = [
  { id: 'en', name: translate('placeholder.english') },
  { id: 'es', name: translate('placeholder.spanish') },
];