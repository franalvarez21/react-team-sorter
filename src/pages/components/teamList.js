import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ListChildComponentProps } from 'react-window';

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

function TeamList({teams}) {
    return (
      <Box className="teamBox">
        <List>
          {
            teams.map((team, index) => {
              if(team.getMembers().length > 0)
              {
                const labelId = `checkbox-list-label-${index}`;
                const users = team.getMembers().map(a => a.alias).toString(", ");

                return (
                  <ListItemText className='teamText' primary={`Team ${index}: ${users}`}>
                  </ListItemText>
                );
              }
            })
          }
        </List>
      </Box>
    );
  }
  
  export default TeamList;
  