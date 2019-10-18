import PropTypes from 'prop-types';

export const INPUT_TYPES = {
  EMAIL: 'email',
  NUMBER: 'number',
  PASSWORD: 'password',
  SEARCH: 'search',
  TEL: 'tel',
  TEXT: 'text',
};

export const INTENTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
};

export const INLINE_ALERT_TYPES = {
  INFORMATION: 'information',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const LIST_ITEM_SIZES = {
  NORMAL: 'normal',
  SUB: 'sub',
  MINI: 'mini',
};

export const LIST_ITEM_VALUES_TYPES = {
  DARK: 'dark',
  SUB_DARK: 'subDark',
  ERROR: 'error',
  SUCCESS: 'success',
};

export const UI_TYPES = {
  h1: 'heading-1',
  h2: 'heading-2',
  h3: 'heading-3',
  h4: 'heading-4',
  h5: 'heading-5',
  h6: 'heading-6',
  content: 'content',
  contentBold: 'contentBold',
  subContent: 'subContent',
  subContentBold: 'subContentBold',
};

export const POPOVER_PLACEMENTS = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
};

export const refShapes = [
  PropTypes.func,
  PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
];
