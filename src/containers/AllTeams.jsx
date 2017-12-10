import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { fetchTeams } from '../actionCreators';
import { TeamList } from '../components';
import { getAllTeams } from '../selectors';


class AllTeams extends React.Component {
  static defaultProps = {
    teams: [],
  };

  static propTypes = {
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
        <h1 className="text-center">All Teams</h1>
        <TeamList teams={this.props.teams} />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  teams: getAllTeams(state),
});


const mapDispatchToProps = dispatch => ({
  loadTeams: () => dispatch(fetchTeams()),
});


export default connect(mapStateToProps, mapDispatchToProps)(AllTeams);
