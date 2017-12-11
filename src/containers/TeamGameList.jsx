import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchTeamGames } from '../actionCreators';
import { GamesList } from '../components';
import { getTeamGames } from '../selectors';


class TeamGameList extends React.Component {
  static propTypes = {
    canEdit: PropTypes.bool.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    onLoad: PropTypes.func.isRequired,
    games: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      opponent: PropTypes.string.isRequired,
    })).isRequired,
  }

  componentDidMount() {
    this.props.onLoad(this.props.match.params.id);
  }

  render() {
    return (
      <GamesList canEdit={this.props.canEdit} games={this.props.games} />
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  canEdit: ownProps.canEdit,
  games: getTeamGames(state, ownProps.match.params.id),
});


const mapDispatchToProps = dispatch => ({
  onLoad: teamId => dispatch(fetchTeamGames(teamId)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamGameList));
