import { connect } from 'react-redux';
import { RootStore } from '..';
import * as actions from './actions';

const mapState = ({ UserReducer }: RootStore) => ({
  ...UserReducer,
});

const UserConnector = connect(mapState, actions);
export default UserConnector;
