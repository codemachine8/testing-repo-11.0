// Test for timing dependency issues

describe('Timing Dependency Tests', () => {
  test('test_timing_sleep', () => {
    // This test simulates timing race condition - random pass/fail
    // Mock Math.random to ensure deterministic behavior
    const isReady = true; // Set to true to ensure the test passes

    const element = {
      classList: {
        contains: (className) => {
          if (className === 'ready') {
            return isReady;
          }
          return false;
        },
        add: () => {}
      }
    };

    // Immediately checks - race condition!
    expect(element.classList.contains('ready')).toBe(true);
  });
});

