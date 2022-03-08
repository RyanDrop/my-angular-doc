import { FormsModule } from '@angular/forms';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { TestService } from '../test.service';
import { SecondTestComponent } from './second-test.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';

const getSubmitButton = () =>
  screen.getByTestId('submit-button') as HTMLButtonElement;
const getInput = () => screen.getByTestId('input') as HTMLInputElement;
const testServiceSpy = jasmine.createSpyObj('TestService', ['sendData']);

describe('SecondTestComponent', () => {
  it('button should be enabled only when typing some text', async () => {
    await render(SecondTestComponent, {
      declarations: [SubmitButtonComponent],
      providers: [TestService],
      imports: [FormsModule],
      componentProperties: {
        quoteText: 'value',
      },
    });
    expect(getSubmitButton().disabled).toBe(false);

    userEvent.clear(getInput());
    expect(getSubmitButton().disabled).toBe(true);
  });

  it('sends data with correct value', async () => {
    await render(SecondTestComponent, {
      declarations: [SubmitButtonComponent],
      providers: [{ provide: TestService, useValue: testServiceSpy }],
      imports: [FormsModule],
      componentProperties: {
        quoteText: '',
      },
    });

    userEvent.type(getInput(), 'test');
    userEvent.click(getSubmitButton());

    expect(testServiceSpy.sendData).toHaveBeenCalledWith('test');
  });
});
