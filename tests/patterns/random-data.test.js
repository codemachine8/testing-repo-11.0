// Random data flaky tests - non-deterministic test data
describe('Random Data Tests', () => {
  test('test_random_number_flaky', () => {
    // Flaky: using random data without proper setup
    const randomValue = Math.random() * 100;

    // Fails ~50% of the time
    expect(randomValue).toBeGreaterThan(50);
  });

  test('test_random_array_flaky', () => {
    // Fix: Use deterministic shuffle
    const items = ['a', 'b', 'c', 'd', 'e'];
    const shuffled = items.sort((a, b) => a.localeCompare(b));

    // Now the order is deterministic
    expect(shuffled[0]).toBe('a');
  });

  test('test_seeded_random_stable', () => {
    // Stable: using deterministic seed
    let seed = 12345;
    const seededRandom = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    const value = seededRandom() * 100;
    expect(value).toBeGreaterThan(0);
  });
});
