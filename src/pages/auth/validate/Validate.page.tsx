import * as React from 'react';
import styles from './Validate.module.scss'
import {RouteComponentProps} from "react-router"

export interface ValidateProps extends RouteComponentProps{
  readonly dumm?: boolean;
}

const ValidateComponent : React.FC<ValidateProps>  = props => {


    return (
      <div className={styles.container} >
        validate component here
      </div>
    );
}

export{
  ValidateComponent as ValidatePage
}