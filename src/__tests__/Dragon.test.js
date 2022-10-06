import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import store from '../Redux/configureStore';
import Dragons from '../Components/Pages/Dragons';

it('Testing Dragon component, should match snapshot:', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <Dragons />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
