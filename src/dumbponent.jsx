import React from 'react'; 
import Dumbposite from './dumbposite.jsx';
import Smartponent from './smartponent.jsx';

class Dumbponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Blabbahahbabbahahaaba....</h1>
        <Dumbposite />
        <Smartponent aValue={2} bValue={5} operation="+" />
      </div>
    );
  }

}

export default Dumbponent;