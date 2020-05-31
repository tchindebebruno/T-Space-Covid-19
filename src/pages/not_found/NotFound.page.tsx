import * as React from 'react';
import styles from './NotFound.module.scss';
import { RouteComponentProps } from 'react-router';

export interface NotFoundProps extends RouteComponentProps {
  readonly dumm?: boolean;
}

interface NotFoundState {
  readonly dumm: boolean;
}

const NotFoundComponent: React.FC<NotFoundProps> = props => {

  return (
    <div className={styles.container} >
      404 not found here
      </div>
  );
}

export {
  NotFoundComponent as NotFoundPage,
}
