// App.test.jsx
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('renders main component correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
}); 