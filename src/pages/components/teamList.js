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

function TeamList() {
    return (
      <Box className="teamBox">
        <List>
          <ListItemText className='teamText' primary="Options" />
          <ListItemText className='teamText' primary="Options" />
          <ListItemText className='teamText' primary="Options" />
          <ListItemText className='teamText' primary="Options" />
          <ListItemText className='teamText' primary="Options" />
          <ListItemText className='teamText' primary="Options" />
          <ListItemText className='teamText' primary="Options" />
          <ListItemText className='teamText' primary="Options" />
          <ListItemText className='teamText' primary="Options" />
          <ListItemText className='teamText' primary="Options" />
          <ListItemText className='teamText' primary="Options" />
          <ListItemText className='teamText' primary="Options" />
        </List>
      </Box>
    );
  }
  
  export default TeamList;
  