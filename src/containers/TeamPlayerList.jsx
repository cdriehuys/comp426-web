import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchTeamPlayers } from '../actionCreators';
import { PlayerList } from '../components';
import { getTeamPlayers } from '../selectors';


class TeamPlayerList extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    onLoad: PropTypes.func.isRequired,
    players: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })).isRequired,
  };

  componentDidMount() {
    this.props.onLoad(this.props.match.params.id);
  }

  render() {
    return (
      <PlayerList players={this.props.players} />
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  players: getTeamPlayers(state, ownProps.match.params.id),
});


const mapDispatchToProps = dispatch => ({
  onLoad: teamId => dispatch(fetchTeamPlayers(teamId)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamPlayerList));
