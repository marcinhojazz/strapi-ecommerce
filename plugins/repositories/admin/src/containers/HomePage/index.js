/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { Header } from '@buffetjs/custom';


const HomePage = () => {
  return (
    <div>
      <Header 
        title={{ label: 'restaurant de Paris' }}
        content="Restaurant description"
      />
      
        
    </div>
  );
};

export default memo(HomePage);
