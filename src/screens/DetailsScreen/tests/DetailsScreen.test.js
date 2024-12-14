import React from 'react';
import { render } from '@testing-library/react-native';
import DetailsScreen from '..';

const mockDictionary = {
  name: 'Test Dictionary',
  author: 'Test Author',
  image: 'http://example.com/image.jpg',
  isbn: '123456789',
  publication: '2023',
  description: 'This is a test dictionary.',
};

test('renders dictionary details', () => {
  const route = { params: { dictionary: mockDictionary } };
  const { getByText } = render(<DetailsScreen route={route} />);

  expect(getByText('Test Dictionary')).toBeTruthy();
  expect(getByText('By: Test Author')).toBeTruthy(); 
  expect(getByText('ISBN: 123456789')).toBeTruthy();
  expect(getByText('Publication Year: 2023')).toBeTruthy();
  expect(getByText('This is a test dictionary.')).toBeTruthy();
});
