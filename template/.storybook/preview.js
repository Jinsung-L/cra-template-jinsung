import '../src/index.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    defaultViewport: 'sm',
    viewports: {
      sm: {
        name: 'sm',
        styles: {
          width: '640px',
          height: '1000px',
        },
      },
      md: {
        name: 'md',
        styles: {
          width: '768px',
          height: '1000px',
        },
      },
      lg: {
        name: 'lg',
        styles: {
          width: '1024px',
          height: '1000px',
        },
      },
      xl: {
        name: 'xl',
        styles: {
          width: '1280px',
          height: '1000px',
        },
      },
    }
  }
}
