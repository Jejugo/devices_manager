import { css, SimpleInterpolation } from 'styled-components';

type Media = {
  [key: string]: (styles: typeof SimpleInterpolation) => ReturnType<typeof css>;
};

export default {
  sm: (styles) => css`
    @media (max-width: 576px) {
      ${styles}
    }
  `,
  md: (styles) => css`
    @media (max-width: 768px) {
      ${styles}
    }
  `,
  lg: (styles) => css`
    @media (max-width: 992px) {
      ${styles}
    }
  `,
  xl: (styles) => css`
    @media (max-width: 1200px) {
      ${styles}
    }
  `,
} as Media;
