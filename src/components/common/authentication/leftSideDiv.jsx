import React from 'react';

import './leftSideDiv.scss';
import LOGO from '../../../assets/logo.png';

const SideBlueDiv = () => (
  <div className="sidebluediv">
    <div className="bg-color">
      <img src={LOGO} alt="logo" className="center-vertically" />
    </div>
  </div>
);

export default SideBlueDiv;
