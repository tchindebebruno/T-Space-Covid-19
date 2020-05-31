import * as React from 'react';
import styles from './Administration.module.scss';

export interface AdministrationProps {
  readonly dumm?: boolean;
}

const AdministrationComponent: React.FC<AdministrationProps> = props => {


  return (
    <div className={styles.container} >
      Administration component here
      </div>
  );
}

export {
  AdministrationComponent as AdministrationPage,
}
