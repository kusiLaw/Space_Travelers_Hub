/* eslint-disable no-undef */
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import store from '../Redux/configureStore';
import Rocket from '../Components/Pages/Rocket';

it('Testing rockets component, should match snapshot:', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <Rocket />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
