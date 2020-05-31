import * as React from 'react';
import { RouteComponentProps } from "react-router"
import styles from './Login.module.scss'
import { AuthStore } from 'stores';
import { Subscription } from 'rxjs'
import { ILoginInfo } from 'stores/auth.store';

export interface LoginProps extends RouteComponentProps {
  readonly dumm?: boolean;
}

interface LoginState {
  readonly dumm: boolean;
}

const LoginComponent: React.FC<LoginProps> = props => {
  const [userInfo, setUserInfo] = React.useState<ILoginInfo | {} | null>(null)


  React.useEffect(() => {
    let sub: Subscription;
    sub = AuthStore.stateChanged.subscribe(({ userInfo }) => {
      setUserInfo(userInfo)
      //console.log({ userInfo })
    })
    return () => {
      sub.unsubscribe()
      console.log({status:'unsubscribe'})
    }
  }, [userInfo])

  const duration = 5000

  setTimeout(() => {
    AuthStore.saveUserInfo({
      access_token: 'lksdiowepoqw',
      expires_in: Math.random(),
      token_type: 'lksdiowepoqw',
      username: 'lksdiowepoqw',
      firstName: 'lksdiowepoqw',
      lastName: 'lksdiowepoqw',
      email: 'you@me.com',
      is_candidate: false,
      is_admin: true,
      is_technicien: true,
      is_publique: false,
      is_contact: false,
      roles: ['peter'],

    })
  }, duration)

  setTimeout(() =>{
    props.history.push('/dashboard')
  }, duration * 2)


  return (
    <div className={styles.container}>
      {JSON.stringify(userInfo)}
    </div>
  );
}

export {
  LoginComponent as LoginPage,
}
