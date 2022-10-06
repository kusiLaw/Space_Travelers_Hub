/* eslint-disable no-undef */
const ReactTestRenderer = require('react-test-renderer');
import Missions from '../Components/Pages/Missions.js';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
 
it('Testing missions component:', () => {
  const tree = ReactTestRenderer.create(
    <Provider store={store}>
      <Missions />
    </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});