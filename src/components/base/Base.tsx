import * as React from 'react';

export interface BaseProps {
  readonly dumm?: boolean;
}

export const Base : React.FC<BaseProps> =props => {


    return (
      <div>
        Base component
      </div>
    );
}
