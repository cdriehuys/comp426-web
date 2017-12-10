import React from 'react';

import { TeamDetail } from '../components';


const team = {
  id: 1,
  name: 'Darkside',
  school: 'UNC',
  level: 'College'
};


const TeamDetailByID = () => <TeamDetail team={team} />;


export default TeamDetailByID;
