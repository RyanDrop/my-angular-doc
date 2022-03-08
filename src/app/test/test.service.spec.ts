import { TestService } from './test.service';

const service = new TestService();

describe('TestService', () => {
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct value', () => {
    expect(service.sendData('test')).toBe('test');
  });
});
