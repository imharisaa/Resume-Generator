import React from 'react';
import PropTypes from 'prop-types';

// Dot component
const Dot = ({ color, shape, size }) => {
  const dotStyle = {
    backgroundColor: color,
    borderRadius: shape === 'square' ? '0' : '50%',
    width: `${size}px`,
    height: `${size}px`,
    display: 'inline-block',
    margin: '0 5px',
  };

  return <span style={dotStyle}></span>;
};

Dot.propTypes = {
  color: PropTypes.string.isRequired,
  shape: PropTypes.oneOf(['circle', 'square']),
  size: PropTypes.number.isRequired,
};

Dot.defaultProps = {
  shape: 'circle',
};

// Stepper component
const Stepper = ({ steps, activeStep, barColor, dotColor, dotShape, dotSize }) => {
  const barStyle = {
    backgroundColor: barColor,
    height: '4px',
    width: `${100 / (steps.length - 1) * activeStep}%`,
    transition: 'width 0.3s ease-in-out',
  };

  return (
    <div>
      <div style={barStyle}></div>
      {steps.map((step, index) => (
        <Dot
          key={index}
          color={index === activeStep ? dotColor : '#ccc'}
          shape={dotShape}
          size={dotSize}
        />
      ))}
    </div>
  );
};

Stepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeStep: PropTypes.number.isRequired,
  barColor: PropTypes.string.isRequired,
  dotColor: PropTypes.string.isRequired,
  dotShape: PropTypes.oneOf(['circle', 'square']),
  dotSize: PropTypes.number.isRequired,
};

Stepper.defaultProps = {
  dotShape: 'circle',
};

export default Stepper;
