import * as React from 'react';
import { RouteComponentProps } from "react-router"

export interface RecoverProps extends RouteComponentProps{
  readonly dumm?: boolean;
}

interface RecoverState {
  readonly dumm:boolean;
}

const RecoverComponent : React.FC<RecoverProps> = props => {
    return (
      <div >
        Recover component here
      </div>
    );
}

export{
  RecoverComponent as RecoverPage,
}