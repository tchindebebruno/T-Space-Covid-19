import * as React from 'react'
import styles from './Container.module.scss'
import { Role } from 'constants/roles';
import { ToolBarMenu } from 'components/';
import { EntryPageRoute } from 'routes';
import { parseRoles } from 'utilities';

export interface containerPageProps {
  readonly url: string;
  readonly roles: Role[];
}

const ContainerComponent: React.FC<containerPageProps> = props => {

  const {
    url,
    roles,
  } = props
  return (
    <div className={styles.container}>
      <ToolBarMenu
        url={url}
        roles={parseRoles(roles)}
      />
      <EntryPageRoute
        url={url}
        roles={roles}
      />
    </div>
  )
}

export {
  ContainerComponent as ContainerPage
}