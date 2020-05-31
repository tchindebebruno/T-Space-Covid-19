import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Title} from 'components';
import { formatMoney } from 'utilities';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export interface GlobalInfoType  {
  "NewConfirmed": number,
  "TotalConfirmed": number,
  "NewDeaths": number,
  "TotalDeaths": number,
  "NewRecovered": number,
  "TotalRecovered": number
}

export interface BaseProps {
  readonly GlobalInfo: GlobalInfoType;
}

const AllCasesCard: React.FC<BaseProps> = props => {
  const classes = useStyles();
  const { GlobalInfo } = props;
  return (
    <React.Fragment>
      <Title>Nombres de contaminées</Title>
      <Typography component="p" variant="h4">
        {formatMoney(GlobalInfo.TotalConfirmed,1,","," ")}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Dans le monde
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Voir par pays
        </Link>
      </div>
    </React.Fragment>
  );
}
export { AllCasesCard }