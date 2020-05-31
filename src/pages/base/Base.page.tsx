import * as React from 'react';
import styles from './base.module.scss';

export interface BaseProps {
  readonly dumm?: boolean;
}

interface BaseState {
  readonly dumm: boolean;
}

const BaseComponent: React.FC<BaseProps> = props => {


  return (
    <div className={styles.container} >
      hello world
      </div>
  );
}

export {
  BaseComponent as BasePage,
}
