import { connect } from 'react-redux';
import { RootStore } from '..';
import * as SpotifyActions from './actions';

const mapState = ({ SpotifyReducer, LoadingReducer }: RootStore) => ({
  ...SpotifyReducer,
  loading: LoadingReducer,
});

const SpotifyConnector = connect(mapState, SpotifyActions);
export default SpotifyConnector;
