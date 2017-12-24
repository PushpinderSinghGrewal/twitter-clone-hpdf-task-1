import React from 'react';
import {List, ListItem,ListItemSecondaryAction} from 'material-ui/List';

export class TrendsForYou extends React.Component{
render(){

return(

<List style={{backgroundColor:'white',height:'620px',width:'300px',marginLeft:'185px',marginTop:'-610px'}}>
  <h4 style={{marginLeft:'10px'}}><b> Trends For You</b> <a style={{ fontSize:'12px'}} href="#"> &nbsp;&nbsp;Change</a></h4>
  <ListItem  style={{color:'#00aced',size:'20px'}} primaryText="#ElClassico" secondaryText="100k tweets"/>

  <ListItem  style={{color:'#00aced'}} primaryText="#BeAGeek" secondaryText="100k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#RealMadrid" secondaryText="98.3k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#CristianoRonaldo" secondaryText="101k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#ZlatanIbrahimovic" secondaryText="60.7k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#SteveWozniak" secondaryText="50.4k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#LinusTorvalds" secondaryText="43.5k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#TanmaiGopal" secondaryText="29.9k tweets"/>


</List>



)


}



}
