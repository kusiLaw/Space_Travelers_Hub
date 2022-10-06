/* eslint-disable no-undef */
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MyProfile from '../Components/Pages/myProfile';
import store from '../Redux/configureStore';

it('Testing my profile component:', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <MyProfile />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
