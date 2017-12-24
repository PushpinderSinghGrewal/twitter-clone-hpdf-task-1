import React from 'react';
import {TabsExampleIconText} from './TabsExampleControlled'

import {Feed} from './feed.js';
import {ExtraInfo} from './ExtraInfo.js'
import {WhoToFollow} from './WhoToFollow.js';
import {TrendsForYou} from './TrendsForYou.js';

export class HomePage extends React.Component{

  render()
  { return(
    <div>
      <TabsExampleIconText />
      <div style={{marginTop:-50}} >
        <WhoToFollow/>
      </div>

      <div style={{marginLeft:-52,marginTop:100  }}>
        <TrendsForYou />
      </div>
      <div  style={{marginLeft:130,marginTop:30  }}>
        <ExtraInfo/>
      </div>
      <Feed />
    </div>
);
}}
