import { connect } from 'react-redux';
import { RootStore } from '..';
import * as SpotifyActions from './actions';

const mapState = ({ SpotifyReducer }: RootStore) => ({
  ...SpotifyReducer,
});

const SpotifyConnector = connect(mapState, SpotifyActions);
export default SpotifyConnector;
