import * as React from 'react';
import { IntlProvider } from 'react-intl';
import translations from 'translations/locales';

export interface BaseProps {
  readonly dumm?: boolean;
  readonly locale: string;
}

export const InternationalisationComponent = props => {

  const {
    locale
  } = props

  return (
    <IntlProvider
      locale={locale!}
      defaultLocale="en"
      key={locale}
      messages={translations[locale]}
    >
      {props.children}
    </IntlProvider>
  );
}


export {
  InternationalisationComponent as Internationalisation
}