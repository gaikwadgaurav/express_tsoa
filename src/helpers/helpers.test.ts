import { capitalizeString } from './helpers';

describe('capitalizeString', () => {
  it('should capitalize the first letter of a string', () => {
    const result = capitalizeString('test');
    expect(result).toBe('Test');
  });

  it('should handle empty string', () => {
    const result = capitalizeString('');
    expect(result).toBe('');
  });
});