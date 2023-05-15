module.exports = {
    transform: {
      '^.+\\.svelte$': ['svelte-jester', { preprocess: true }],
      '^.+\\.ts$': 'ts-jest',
      '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'ts', 'svelte'],
    testPathIgnorePatterns: ['node_modules'],
    bail: false,
    verbose: true,
  };
  