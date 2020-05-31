import React from 'react';
import {
  ContainerPage,
} from 'pages';
import {
  ROLE_ADMINISTRATOR,
} from 'constants/roles';

interface ContainerPageRouteProps {
}

const ContainerPageRoute: React.FC<ContainerPageRouteProps> = (props) => {

  return (
    <ContainerPage
      roles={[
        ROLE_ADMINISTRATOR,
      ]}
      url='/dashboard'
    />
  );
}

export default ContainerPageRoute