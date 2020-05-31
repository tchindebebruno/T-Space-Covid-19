import * as React from 'react';
import styles from './External.module.scss';

export interface ExternalProtectedProps {
  readonly dumm?: boolean;
}

interface ExternalProtectedState {
  readonly dumm: boolean;
}

const ExternalProtectedComponent: React.FC<ExternalProtectedProps> = props => {

  return (
    <div className={styles.container} >
      External protected page
      </div>
  );
}

export {
  ExternalProtectedComponent as ExternalProtectedPage,
}
