import PropTypes from 'prop-types';
import React from 'react';
import { Alert } from 'react-bootstrap';
import { PieChart } from 'react-easy-chart';
import { connect } from 'react-redux';

import { getPlayer } from '../selectors';


const PlayerStatistics = ({ player }) => (
  <div>
    <h3>{player.name} <small>#{player.number}</small></h3>
    {player.num_throws > 0 ? (
      <div>
        <PieChart
          size={200}
          innerHoleSize={100}
          labels
          styles={{
              '.chart_lines': {
              strokeWidth: 0
            },
              '.chart_text': {
              fontFamily: 'serif',
              fontSize: '80px',
              fill: '#333'
            }
          }}
          data={[
            {key: (100 * player.completion_percentage).toFixed(2)+'%', value: player.num_completions, color: '#42f486 '},
            {key: (100 * (1 - player.completion_percentage)).toFixed(2)+'%', value: player.num_turns, color: '#f44165 '}
          ]}
        />
        <p>
          Green &mdash; Completions <br />
          Red &mdash; Turnovers
        </p>
      </div>
    ) : (
      <Alert bsStyle="warning">
        <h4>No Data</h4>
        <p>This player does not have any recorded throws.</p>
      </Alert>
    )}
  </div>
);

PlayerStatistics.defaultProps = {
  player: [],
};

PlayerStatistics.propTypes = {
  player: PropTypes.shape({
    completion_percentage: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    num_completions: PropTypes.number.isRequired,
    num_throws: PropTypes.number.isRequired,
    num_turns: PropTypes.number.isRequired,
  }),
};


const mapStateToProps = (state, ownProps) => ({
  player: getPlayer(state, ownProps.match.params.playerId),
});


export default connect(mapStateToProps)(PlayerStatistics);
