import { hasNumbers } from '../src/hasNumbers'

test("should return true", () => {
    let result = hasNumbers();
    expect(result).toBe(true);
});