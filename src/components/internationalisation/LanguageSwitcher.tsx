import * as React from 'react';
import { JSXElement } from '@babel/types';
import { useLanguageData } from 'hooks'
import { AppStore } from 'stores'
import { FormattedMessage } from 'react-intl';


export interface ComponentSwitcherProps {
  readonly render?: (toggleEn, toggleFr) => JSXElement;
}

export const LanguageSwitcherComponent: React.FC<ComponentSwitcherProps> = props => {
  const { language } = useLanguageData()
  const { toggleLanguage } = AppStore

  const defaultRender = (toggleEn, toggleFr) => (
    <div>
      language&nbsp; &nbsp; <FormattedMessage id={language} /> <br />
      <button onClick={toggleEn}>Toggle En</button> <br />
      <button onClick={toggleFr}>Toggle Fr</button>
    </div>
  )

  const {
    render = defaultRender,
  } = props

  return (
    <div >
      {render(
        e => toggleLanguage('en'),
        e => toggleLanguage('fr')
      )}
    </div>
  );
}


export {
  LanguageSwitcherComponent as LanguageSwitcher
}