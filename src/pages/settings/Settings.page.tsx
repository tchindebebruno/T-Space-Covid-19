import * as React from 'react';
import styles from './Settings.module.scss';

export interface SettingsProps {
  readonly dumm?: boolean;
}

const SettingsComponent: React.FC<SettingsProps> = props => {
  return (
    <div className={styles.container} >
      settings page here
      </div>
  );
}

export {
  SettingsComponent as SettingsPage,
}
