import * as React from 'react';
import { RouteComponentProps } from "react-router"

export interface SignUpProps extends RouteComponentProps{
  readonly dumm?: boolean;
}

const SignUpComponent : React.FC<SignUpProps>  = props => {


    return (
      <div >
        Sign up component here
      </div>
    );
}

export {
  SignUpComponent as SignUpPage
}
