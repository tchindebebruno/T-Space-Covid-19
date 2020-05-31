import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Title } from 'components';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export interface AllCountriesType  {
  "Country": String,
  "CountryCode": String,
  "Slug": String,
  "NewConfirmed": number,
  "TotalConfirmed": number,
  "NewDeaths": number,
  "TotalDeaths": number,
  "NewRecovered": number,
  "TotalRecovered": number,
  "Date": String
}
export interface BaseProps {
  readonly AllCountries: AllCountriesType[];
  readonly all?: boolean;
}

const CountriesTables: React.FC<BaseProps> = props => {
  const classes = useStyles();
  const { AllCountries=[], all=false} = props;
  const Countries  = AllCountries.filter((k,i)=>i<7);
  /**
   * {
      "Country": "ALA Aland Islands",
      "CountryCode": "AX",
      "Slug": "ala-aland-islands",
      "NewConfirmed": 0,
      "TotalConfirmed": 0,
      "NewDeaths": 0,
      "TotalDeaths": 0,
      "NewRecovered": 0,
      "TotalRecovered": 0,
      "Date": "2020-04-05T06:37:00Z"
    }
   */
  return (
    <React.Fragment>
      <Title>Listes des pays</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Pays</TableCell>
            <TableCell>Nouveau cas</TableCell>
            <TableCell>Total confirmé</TableCell>
            <TableCell>Nouveau décés</TableCell>
            <TableCell>Total décés</TableCell>
            <TableCell>Npuveau guéris</TableCell>
            <TableCell align="right">Totals guéris</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(all ? AllCountries : Countries).map((row,i) => (
            <TableRow key={i}>
              <TableCell>{row.Country}</TableCell>
              <TableCell>{row.NewConfirmed}</TableCell>
              <TableCell>{row.TotalConfirmed}</TableCell>
              <TableCell>{row.NewDeaths}</TableCell>
              <TableCell>{row.TotalDeaths}</TableCell>
              <TableCell>{row.NewRecovered}</TableCell>
              <TableCell>{row.TotalRecovered}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Voir tous les pays
        </Link>
      </div>
    </React.Fragment>
  );
}
export { CountriesTables }