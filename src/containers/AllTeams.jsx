import React from 'react';

import { TeamList } from '../components';


const allTeams = [
  { id: 1, name: 'Darkside' },
  { id: 2, name: 'Triforce' },
  { id: 3, name: 'Flyers' },
  { id: 4, name: 'Phillips Middle' },
  { id: 5, name: 'Dallas Roughnecks' },
  { id: 6, name: 'Carrboro Clams' },
];


const AllTeams = () => (
  <div>
    <h1 className="text-center">All Teams</h1>
    <TeamList teams={allTeams} />
  </div>
);


export default AllTeams;
