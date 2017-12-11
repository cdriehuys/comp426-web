import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { fetchTeams } from '../actionCreators';
import { TeamList } from '../components';
import { getCurrentUser, getUserTeams } from '../selectors';


class UserTeams extends React.Component {
  static defaultProps = {
    teams: [],
  };

  static propTypes = {
    canEdit: PropTypes.bool.isRequired,
    loadTeams: PropTypes.func.isRequired,
    teams: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }))
  };

  componentDidMount() {
    this.props.loadTeams();
  }

  render() {
    return (
      <div>
        <h1 className="text-center">My Teams</h1>
        <TeamList teams={this.props.teams} />
      </div>
    );
  }
}


const mapStateToProps = state => {
  const user = getCurrentUser(state);

  return {
    teams: user ? getUserTeams(state, user) : [],
  }
};


const mapDispatchToProps = dispatch => ({
  loadTeams: () => dispatch(fetchTeams()),
});


export default connect(mapStateToProps, mapDispatchToProps)(UserTeams);
