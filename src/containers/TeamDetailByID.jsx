import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { fetchTeam } from '../actionCreators';
import { TeamDetail } from '../components';
import { getTeam } from '../selectors';


class TeamDetailByID extends React.Component {
  static defaultProps = {
    team: null,
  };

  static propTypes = {
    loadTeam: PropTypes.func.isRequired,
    team: PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string,
      name: PropTypes.string.isRequired,
    }),
  };

  componentDidMount() {
    this.props.loadTeam(this.props.match.id);
  }

  render() {
    return this.props.team ? (
      <TeamDetail team={this.props.team} />
    ) : (
      <h3 className="text-center">Loading...</h3>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  team: getTeam(state, ownProps.match.params.id),
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  loadTeam: () => dispatch(fetchTeam(ownProps.match.params.id)),
});


const ConnectedTeamDetailByID = connect(mapStateToProps, mapDispatchToProps)(TeamDetailByID);

ConnectedTeamDetailByID.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};


export default ConnectedTeamDetailByID;
