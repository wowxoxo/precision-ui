import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';
import postcssReplace from 'postcss-replace';
import tailwindcss from 'tailwindcss';

export default {
  syntax: 'postcss-scss',
  plugins: [
    postcssImport,
    tailwindcss,
    autoprefixer,
    postcssReplace({
      pattern: /(--tw|\*, ::before, ::after)/g,
      data: {
        '--tw': '--precision-ui-tw', // Prefixing
        '*, ::before, ::after': ':root', // So variables do not pollute every element
      },
    }),
  ],
};
