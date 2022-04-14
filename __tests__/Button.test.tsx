import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {Button} from '../App/components/Button';
import {mockComponent} from '../__mocks__/componentMock';

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity',
  () => {
    return mockComponent(
      'react-native/Libraries/Components/Touchable/TouchableOpacity',
      (props: any) => {
        return {
          onPress: props.disabled ? () => {} : props.onPress,
        };
      },
    );
  },
);

test('can press the button', () => {
  const onPressMock = jest.fn();

  const {getByText} = render(<Button text="Testing" onPress={onPressMock} />);

  fireEvent.press(getByText('Testing'));
  expect(onPressMock).toHaveBeenCalled();
  expect(onPressMock.mock.calls.length).toBe(1);

  fireEvent.press(getByText('Testing'));
  expect(onPressMock.mock.calls.length).toBe(2);
});

test('onPress is not called when button is disabled', () => {
  const onPressMock = jest.fn();
  const {getByText} = render(
    <Button text="Testing" onPress={onPressMock} disabled />,
  );

  fireEvent.press(getByText('Testing'));
  expect(onPressMock).not.toHaveBeenCalled();
});
