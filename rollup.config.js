// rollup -c

export default {
  input: 'ts/rollup/jb-flashcards.js',
  output: {
    name: 'flashcards',
    file: 'public/js/jb-flashcards.js',
    format: 'iife',
    sourcemap: false
  }
};
