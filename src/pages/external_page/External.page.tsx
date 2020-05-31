import * as React from 'react';
import styles from './External.module.scss';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom'

export interface ExternalProps extends RouteComponentProps {
  readonly dumm?: boolean;
}

const ExternalComponent: React.FC<ExternalProps> = props => {
  return (
    <div>
      <div className={styles.container} >
        External page
      </div>
      <Link to='/external_protected' className={styles.container} >
        go to external protected route page
      </Link>
    </div>
  );
}

export {
  ExternalComponent as ExternalPage,
}
