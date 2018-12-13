// rollup -c

  // export default {
  //   input: './ts/rollup/report.js',
  //   output: {
  //     name: 'reportengine',
  //     file: 'X://reports/js/reportengine.js',
  //     format: 'iife',
  //     sourcemap: true
  //   }
  // };

// export default {
//   input: './ts/rollup/jquery_ext_sample.js',
//   output: {
//     name: 'reportengine',
//     file: 'X://reports/js/jquery_ext_sample.js',
//     format: 'iife',
//     sourcemap: false
//   }
// };

export default {
  input: './ts/rollup/jb-flashcards.js',
  output: {
    name: 'reportengine',
    file: './js/jb-flashcards.js',
    format: 'iife',
    sourcemap: false
  }
};
