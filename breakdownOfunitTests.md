# Breakdown of Unit Tests

## HomeScreen Tests

### Test 1: Renders a List of Dictionaries
**Purpose**: Verifies the list is displayed correctly using `FlatList`.

**Steps:**
1. Render `HomeScreen` with mock data.
2. Check if the dictionary name appears in the output.

**Code:**
```javascript
test('renders a list of dictionaries', () => {
  const navigation = { navigate: jest.fn() };
  const { getByText } = render(<HomeScreen data={mockData} navigation={navigation} />);
  expect(getByText('Test Dictionary')).toBeTruthy();
});
```

**Outcome**: Ensures correct rendering of the list.

---

### Test 2: Navigates to Details Screen on Item Press
**Purpose**: Validates navigation to `DetailsScreen` on item press.

**Steps:**
1. Simulate a tap on a dictionary item.
2. Check if `navigate` is called with the correct parameters.

**Code:**
```javascript
test('navigates to details screen on item press', () => {
  const navigation = { navigate: jest.fn() };
  const { getByText } = render(<HomeScreen data={mockData} navigation={navigation} />);
  fireEvent.press(getByText('Test Dictionary'));
  expect(navigation.navigate).toHaveBeenCalledWith('Details', { dictionary: mockData[0] });
});
```

**Outcome**: Confirms navigation logic works as expected.

---

## DetailsScreen Tests

### Test: Renders Dictionary Details
**Purpose**: Verifies that `DetailsScreen` correctly displays dictionary details.

**Steps:**
1. Render `DetailsScreen` with mock data.
2. Check for fields like name, author, and publication year in the output.

**Code:**
```javascript
test('renders dictionary details', () => {
  const route = { params: { dictionary: mockDictionary } };
  const { getByText } = render(<DetailsScreen route={route} />);
  expect(getByText('Test Dictionary')).toBeTruthy();
  expect(getByText('Test Author')).toBeTruthy();
  expect(getByText('2023')).toBeTruthy();
});
```

**Outcome**: Validates the correct display of dictionary details.