import * as React from 'react';
import { Component } from 'react';
import Members from './components/members';
import TeamList  from './components/teamList';
import HeaderOptions  from './components/headerOptions';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';

import Sorter from 'team-sorter/src/sorter';
import createMember from 'team-sorter/src/entities/member';

import logo from './logo.svg';

class Teams extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      member : '',
      sorter : new Sorter(3, []),
      members : [],
      teams : [],
      teamSize : 3
    }
    
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(event){
    this.setState({ member : event.target.value })
  }

  handleSubmit(){
    if(this.state.member != '')
    { 
      this.state.sorter.addMember(createMember(this.state.member, 1));
      this.state.members = this.state.sorter.getMembers();
      this.state.sorter.executeSorting();
      this.state.teams = this.state.sorter.getTeams();
      this.setState({ state: this.state });
    }
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
              <Button variant="contained" onClick={this.handleSubmit}>Add</Button>
            </Box>
            <Members members={this.state.members} />
          </div>
          <div style={{width: 50, height: 50}} />
          <div className='Component-normal Table-content'>
            <TeamList teams={this.state.teams} />
          </div>
        </div>
      </header>
    </div>
    )
  }
 }

export default Teams;
