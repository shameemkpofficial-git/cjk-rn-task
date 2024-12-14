import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '..';

const mockData = [
  {
    name: 'Test Dictionary',
    image: 'http://example.com/image.jpg',
    isbn: '123456789',
  },
];

test('renders a list of dictionaries', () => {
  const navigation = { navigate: jest.fn() };
  const { getByText } = render(<HomeScreen data={mockData} navigation={navigation} />);

  expect(getByText('Test Dictionary')).toBeTruthy();
});

test('navigates to details screen on item press', () => {
  const navigation = { navigate: jest.fn() };
  const { getByText } = render(<HomeScreen data={mockData} navigation={navigation} />);

  fireEvent.press(getByText('Test Dictionary'));
  expect(navigation.navigate).toHaveBeenCalledWith('Details', { dictionary: mockData[0] });
});
