// import necessary react testing library helpers here
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
// import the Counter component here
import Counter from '../components/Counter';

test('renders counter message', () => {
  render(<Counter />);
  const counterMsg = screen.getByText(/Counter/i);
  expect(counterMsg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  const countVal = screen.getByTestId('count');
  expect(countVal.textContent).toBe('0');
});

test('clicking + increments the count', async () => {
  //const user = userEvent.setup();
  render(<Counter/>);
  const incrementButton = screen.getByText('+');
  const countVal = screen.getByTestId('count');
  
  await userEvent.click(incrementButton);
  expect(countVal.textContent).toBe('1');
  
  await userEvent.click(incrementButton);
  expect(countVal.textContent).toBe('2');
});

test('clicking - decrements the count', async () => {
  render(<Counter />);

  //need to be able to interact with counter button and the count var - get them
  const decrementButton = screen.getByText('-');
  const countVal = screen.getByTestId('count');
  
  await userEvent.click(decrementButton);
  expect(countVal.textContent).toBe('-1');
  
  await userEvent.click(decrementButton);
  expect(countVal.textContent).toBe('-2');
});