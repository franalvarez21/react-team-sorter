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
          {teams.map((team) => {
            const labelId = `checkbox-list-label-${team.getMembers()[0].alias}`;

            return (
              <ListItemText className='teamText' primary={team.getMembers()[0].alias} />
            );
          })}
        </List>
      </Box>
    );
  }
  
  export default TeamList;
  