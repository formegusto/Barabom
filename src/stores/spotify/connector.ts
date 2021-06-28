import { connect } from 'react-redux';
import { SpotifyStore } from '.';
import * as SpotifyActions from './actions';

const mapState = (spotifyStore: SpotifyStore) => ({
  ...spotifyStore,
});

const SpotifyConnector = connect(mapState, SpotifyActions);
export default SpotifyConnector;
