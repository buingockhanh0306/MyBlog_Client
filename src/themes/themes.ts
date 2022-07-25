import { extendTheme, withDefaultColorScheme, withDefaultSize } from '@chakra-ui/react';

import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { fontSizes } from './font_sizes';
import { fontWeights } from './font_weights';
import { letterSpacings } from './letter_spacings';
import { lineHeights } from './line_heights';
import { radii } from './radii';
import { sizes } from './sizes';
import { space } from './space';

const fonts = {
  body: '"Noto Sans JP", sans-serif',
};

export const themes = extendTheme({
  fonts,
  breakpoints,
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  space,
  sizes,
  radii,
},
withDefaultColorScheme({
  colorScheme: 'blue',
  components: ['Button', 'Badge'],
}),
withDefaultSize({
  size: 'lg',
  components: ['Button', 'Badge'],
}));
