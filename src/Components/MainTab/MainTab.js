import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderAll from '../HeaderAll/HeaderAll';
import BodyMaket from '../BodyMaket/BodyMaket';
function MainTab() {
  return (
    <div>
      <HeaderAll name="Приемы" />
        <BodyMaket>
          
        </BodyMaket>
    </div>
      
  );
}

export default MainTab;
