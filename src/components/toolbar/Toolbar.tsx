import * as React from 'react';
import styles from './Toolbar.module.scss';
import {
    entryPageRoutes
} from 'routes'
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './../menu_actions/MenuAction';
import {Chart, AllCasesCard, CountriesTables} from 'components';
import Covid19Service from 'services/Covid19Service';

export interface BaseProps {
    readonly dumm?: boolean;
    readonly open?: boolean;
    readonly url: string;
    readonly roles: string[];
}

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit">
          T-Space Covid-2019
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const drawerWidth = 240;
  
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      position: 'fixed'
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'fixed',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      //height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  }));

const ToolBarMenuComponent: React.FC<BaseProps> = props => {
    //Les parametres recuperé du props
    const {
        url,
        roles,
        //classes
    } = props;
    const classes = useStyles();
    console.log({classes})
    //Param pour Ouvrir/Fermer le menu
    const [open, setOpen] = React.useState(false);
    const [AllCountries, setCountries] = React.useState([]);
    const [GlobalInfo, setGlobal] = React.useState( {
      "NewConfirmed": 0,
      "TotalConfirmed": 0,
      "NewDeaths": 0,
      "TotalDeaths": 0,
      "NewRecovered": 0,
      "TotalRecovered": 0
    });
    const [lastUpdate, setlastUpdate] = React.useState();
    //Fonction gestion menu
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    React.useEffect(() => {
      getSumarry();
    },[]);

    const getSumarry = () => {
      Covid19Service.getSumarry().then(async response =>{
        if(response.status === 200){
          let { Countries, Global, Date} = await response.json();
          console.log({Countries});
          setCountries(Countries);
          setGlobal(Global);
          setlastUpdate(Date);
        }else if ([500,503,400,401,409].includes(response.status)){

        }
      })
    }

    return (
        <React.Fragment>
          {console.log({lastUpdate})}
            {false && <div className={styles.container}>
                <div className={styles.links}>
                    {entryPageRoutes(url, roles).map(route => (
                        <>
                            {route.title_type ? (
                                <FormattedMessage
                                    id={route.title!}
                                />
                            ) : (
                                    <NavLink
                                        activeClassName={styles.menu_item_active}
                                        to={route.to!}
                                        className={styles.menu_item}
                                    >
                                        <span className={styles.menu_text}>
                                            <FormattedMessage
                                                id={route.title!}
                                            />
                                        </span>
                                    </NavLink>
                                )}
                        </>
                    ))}
                </div>
            </div>}
            <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            T-Space Covid 19
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <AllCasesCard GlobalInfo={GlobalInfo} />
              </Paper>
            </Grid>
            {/* Recent CountriesTables */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <CountriesTables AllCountries={AllCountries} />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
        </React.Fragment>
    );
}
const ToolBarMenu = (ToolBarMenuComponent);

export {ToolBarMenu};