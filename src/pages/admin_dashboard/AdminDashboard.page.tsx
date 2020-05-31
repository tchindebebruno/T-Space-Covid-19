import * as React from 'react';
import styles from './AdminDashboard.module.scss';
import { Link } from 'react-router-dom'
import { useUserInfoData } from 'hooks'
import { LanguageSwitcher } from 'components'
export interface AdminDashboardProps {
  readonly dumm?: boolean;
}

const AdminDashboardComponent: React.FC<AdminDashboardProps> = props => {
  const { userInfo } = useUserInfoData()

  return (
    <div>
      <div className={styles.container} >
        Admin Dashboard component
      </div>
      <Link to='/external_protected' className={styles.container} >
        go to external protected route page
      </Link>
      <div>
        <Link to='/external' className={styles.container} >
          go to external route page
      </Link>
      </div>
      <div><LanguageSwitcher /></div>
      <div style={{ width: 300, display: 'flex', flexWrap: 'wrap' }}>
        <span>
          {
            JSON.stringify(userInfo)
          }
        </span>
      </div>
    </div>
  );

}

export {
  AdminDashboardComponent as AdminDashboardPage,
}
