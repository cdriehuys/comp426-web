import React from 'react';

import { TeamList } from '../components';


const userTeams = [
  { id: 1, name: 'Darkside' },
  { id: 2, name: 'Triforce' },
  { id: 3, name: 'Flyers' },
];


const UserTeams = () => (
  <div>
    <h1 className="text-center">My Teams</h1>
    <TeamList teams={userTeams} />
  </div>
);


export default UserTeams;
