import * as React from 'react';
import styles from './General.module.scss';

export interface GeneralProps {
  readonly dumm?: boolean;
}

const GeneralComponent : React.FC<GeneralProps> = props => {

  return (
    <div className={styles.container} >
      General component works!
      </div>
  );
}

export {
  GeneralComponent as GeneralPage,
}
