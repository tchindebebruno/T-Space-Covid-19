import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LayersIcon from '@material-ui/icons/Layers';
import {Timeline, Dashboard} from '@material-ui/icons';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Timeline />
      </ListItemIcon>
      <ListItemText primary="Statistiques" />
    </ListItem>
    
    <ListItem button>
      <ListItemIcon>
        <StoreMallDirectoryIcon />
      </ListItemIcon>
      <ListItemText primary="Zones à risque" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocalHospitalIcon />
      </ListItemIcon>
      <ListItemText primary="Test" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Autres informations" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>{/*
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  */}</div>
);