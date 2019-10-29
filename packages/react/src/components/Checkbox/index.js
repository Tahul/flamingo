import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Helper from '../Helper';
import UiText from '../UiText';

const Checkbox = ({
  isUndefined,
  disabled,
  children,
  checked,
  helper,
  id,
  value,
  onChange,
}) => {
  const checkbox = (
    <input
      defaultChecked={checked}
      disabled={disabled}
      className={cx('Checkbox', { 'is-undefined': !checked && isUndefined })}
      type='checkbox'
      id={id}
      name={id}
      value={value}
      onChange={onChange}
    />
  );

  if (!children) {
    return checkbox;
  }

  return (
    <div className='FormEl-wrapper'>
      {checkbox}
      <UiText as='label' htmlFor={id} variant={UiText.VARIANTS.content}>
        {children}
        {helper && <Helper>{helper}</Helper>}
      </UiText>
    </div>
  );
};

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  isUndefined: PropTypes.bool,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  helper: PropTypes.string,
};

Checkbox.defaultProps = {
  isUndefined: false,
  checked: false,
  disabled: false,
  children: undefined,
  value: 'checked',
  helper: undefined,
};

export default Checkbox;
