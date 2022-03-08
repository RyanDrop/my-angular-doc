import { FormsModule } from '@angular/forms';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { TestService } from '../test.service';
import { ThirdTestComponent } from './third-test.component';

const getSubmitButton = () =>
  screen.getByTestId('submit-button') as HTMLButtonElement;
const getInput = () => screen.getByTestId('input') as HTMLInputElement;
const testServiceSpy = jasmine.createSpyObj('TestService', ['sendData']);

const setup = async (quoteText = '') => {
  await render(ThirdTestComponent, {
    imports: [FormsModule],
    providers: [{ provide: TestService, useValue: testServiceSpy }],
    componentProperties: {
      quoteText,
    },
  });
};

describe('ThirdTestComponent', () => {
  it('button should be enabled only when typing some text', async () => {
    await setup('value');
    expect(getSubmitButton().disabled).toBe(false);
    console.log(getInput().value);

    userEvent.clear(getInput());
    expect(getSubmitButton().disabled).toBe(true);
  });

  it('sends data with correct value', async () => {
    await setup();

    userEvent.type(getInput(), 'test');
    userEvent.click(getSubmitButton());

    expect(testServiceSpy.sendData).toHaveBeenCalledWith('test');
  });
});
