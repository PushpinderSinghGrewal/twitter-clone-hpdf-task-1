import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

export class Buttons extends React.Component{
render()

{return(
  <div style={{marginTop:-10,marginLeft:'400px'}}>

    <IconButton style={{marginLeft:-350,marginTop:20}}>
      <FontIcon  ><i class="fa  fa-comment"></i>
      </FontIcon> </IconButton>

    <IconButton style={{marginLeft:'50px',marginTop:20}}>
      <FontIcon style={{color:'#00aced'}} iconStyle={{color:'black'}} >
        <i class="fa  fa-retweet"></i>
      </FontIcon> </IconButton>

    <IconButton style={{marginLeft:50,marginTop:20}}>
      <FontIcon style={{color:'#00aced'}} iconStyle={{color:'black'}} >
        <i class="fa  fa-heart"></i>
      </FontIcon> </IconButton>
    <IconButton style={{marginLeft:50,marginTop:20}}>
      <FontIcon style={{color:'#00aced'}} iconStyle={{color:'black'}} >
        <i class="fa  fa-envelope"></i>
      </FontIcon> </IconButton>
  </div>



);}


}
