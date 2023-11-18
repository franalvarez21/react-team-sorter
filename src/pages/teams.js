import * as React from 'react';
import { Component } from 'react';
import Members from './components/members';
import TeamList  from './components/teamList';
import HeaderOptions  from './components/headerOptions';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Sorter from 'node-team-sorter';

import logo from './logo.svg';

class Teams extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      member : '',
      sorter : Sorter(3, [])
    }
    
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(event){
    this.setState({member : event.target.value})
  }

  handleSubmit(){
    Sorter.addMember(this.state.member, 1);
  }

  render()
  {
    return (
      <div className="Main">
      <header className="Main-content">
        <img src={logo} className="Second-logo" alt="logo" />
        <div className='Component-normal'>
          <HeaderOptions />
        </div>
        <div className='rowColumn'>
          <div className='Component-normal'>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <AccountCircle sx={{ mr: 2 }} />
              <TextField id="input-with-sx" label="New member" variant="standard" onChange={this.updateInput} />
              <Button variant="contained" onClick={this.addMember} onClick={this.handleSubmit}>Add</Button>
            </Box>
            <Members />
          </div>
          <div className='Component-normal Table-content'>
            <TeamList />
          </div>
        </div>
      </header>
    </div>
    )
  }
 }

export default Teams;
