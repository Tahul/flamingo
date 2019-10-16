import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ELEVATIONS = [0, 1, 2];
const SIZES = { S: 's', M: 'm' };

const sizes = Object.values(SIZES);

const Card = ({ className, elevation, isSelected, size, ...props }) => (
  <div
    className={cx('Card', `Card--${size}`, className, {
      'is-selected': isSelected,
      [`is-elevated--${elevation}`]: elevation,
    })}
    {...props}
  />
);

Card.propTypes = {
  className: PropTypes.string,
  elevation: PropTypes.oneOf(ELEVATIONS),
  isSelected: PropTypes.bool,
  size: PropTypes.oneOf(sizes),
};

Card.defaultProps = {
  className: undefined,
  elevation: 0,
  isSelected: false,
  size: SIZES.M,
};

Card.ELEVATIONS = ELEVATIONS;
Card.SIZES = SIZES;

export default Card;
