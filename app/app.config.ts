export default defineAppConfig({
  ui: {
    colors: {
      primary: 'fruit-salad',
      tertiary: 'teal'
    },
    button: {
      variants: {
        size: {
          // 'px-2.5 py-1.5 text-sm gap-1.5'
          //  Merges to this
          // 'px-3 py-3 text-sm gap-1.5'
          md: {
            base: 'px-3 py-3'
          },
        },
      },
      defaultVariants: {
        // color: 'error',
        // size: 'xs',
        // variant: 'soft'
      }
    },
  },
});
