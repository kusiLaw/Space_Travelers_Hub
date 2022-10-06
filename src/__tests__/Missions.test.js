/* eslint-disable no-undef */
import { Provider } from 'react-redux';
import Missions from '../Components/Pages/Missions';
import store from '../Redux/configureStore';

const ReactTestRenderer = require('react-test-renderer');

it('Testing missions component:', () => {
  const tree = ReactTestRenderer.create(
    <Provider store={store}>
      <Missions />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
