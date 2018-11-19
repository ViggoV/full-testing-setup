import React from 'react';

const Smartponent = (props) => {
  const {
    aValue,
    bValue,
    operation
  } = props;

  console.log(typeof operation, operation);

  if (typeof operation != 'string') return <div>fail : wrong operation type</div>;
  if (['+','-','*','/'].indexOf(operation) < 0) return <div>fail : invalid operation</div>;
  if (isNaN(aValue) || isNaN(bValue)) return <div>fail : invalid input</div>;

  let res = eval(`${aValue}${operation}${bValue}`);

  return (
    <div>
      {`${aValue} ${operation} ${bValue} = ${res}`}  
    </div>
  );
};

export default Smartponent;