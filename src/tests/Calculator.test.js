import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })


  it("should be able to correctly add two numbers", () => {
    const button1 = container.getByTestId("number1")
    const button4 = container.getByTestId("number4")
    const addButton = container.getByTestId("operator_add")
    const equalsButton = container.getByTestId("operator-equals")
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button1)
    fireEvent.click(addButton)
    fireEvent.click(button4)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual("5")
  })

  it("should be able to correctly subtract", () => {
    const button7 = container.getByTestId("number7")
    const button4 = container.getByTestId("number4")
    const subtractButton = container.getByTestId("operator-subtract")
    const equalsButton = container.getByTestId("operator-equals")
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button7)
    fireEvent.click(subtractButton)
    fireEvent.click(button4)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual("3")
  })

  it("should be able to correctly multiply two numbers", () => {
    const button3 = container.getByTestId("number3")
    const button5 = container.getByTestId("number5")
    const multiplyButton = container.getByTestId("operator-multiply")
    const equalsButton = container.getByTestId("operator-equals")
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button3)
    fireEvent.click(multiplyButton)
    fireEvent.click(button5)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual("15")
  })

  it("should be able to correctly divide one number by another", () => {
    const button3 = container.getByTestId("number3")
    const button5 = container.getByTestId("number5")
    const multiplyButton = container.getByTestId("operator-multiply")
    const equalsButton = container.getByTestId("operator-equals")
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button3)
    fireEvent.click(multiplyButton)
    fireEvent.click(button5)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual("15")
  })

  it("should be able to concatenate multiple numbers on keypad clicks", () => {
    const button4 = container.getByTestId("number4")
    const button3 = container.getByTestId("number3")
    const button2 = container.getByTestId("number2")
    const button1 = container.getByTestId("number1")
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button4)
    fireEvent.click(button3)
    fireEvent.click(button2)
    fireEvent.click(button1)
    expect(runningTotal.textContent).toEqual("4321")
  })

  it("should be able to correctly use multiple operators on one sum", () => {
    const button6 = container.getByTestId("number6")
    const button2 = container.getByTestId("number2")
    const button4 = container.getByTestId("number4")
    const button1 = container.getByTestId("number1")
    const multiplyButton = container.getByTestId("operator-multiply")
    const divideButton = container.getByTestId("operator-divide")
    const addButton = container.getByTestId("operator_add")
    const runningTotal = container.getByTestId('running-total')
    const equalsButton = container.getByTestId("operator-equals")
    fireEvent.click(button6)
    fireEvent.click(multiplyButton)
    fireEvent.click(button2)
    fireEvent.click(divideButton)
    fireEvent.click(button4)
    fireEvent.click(addButton)
    fireEvent.click(button1)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual("4")
})

it("should be able to clear the running total without affecting the calculation", () => {
  const button2 = container.getByTestId("number2")
  const button4 = container.getByTestId("number4")
  const button1 = container.getByTestId("number1")
  const addButton = container.getByTestId("operator_add")
  const equalsButton = container.getByTestId("operator-equals")
  const runningTotal = container.getByTestId("running-total")
  const clearButton = container.getByTestId("clear")
  fireEvent.click(button1)
  fireEvent.click(addButton)
  fireEvent.click(button4)
  fireEvent.click(addButton)
  fireEvent.click(button2)
  fireEvent.click(clearButton)
  expect(runningTotal.textContent).toEqual("0")
  fireEvent.click(addButton)
  fireEvent.click(button2)
  fireEvent.click(equalsButton)
  expect(runningTotal.textContent).toEqual("7")
})


})

