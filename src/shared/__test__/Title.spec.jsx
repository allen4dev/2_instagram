import React from 'react';
import { shallow } from 'enzyme';

import Title from './../Title';

test('should render logo', () => {
  const logo = shallow(<Title>Dummie Test</Title>);
  expect(logo).toMatchSnapshot();
});
