import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import {Tabs, Tab} from 'material-ui/Tabs';
export class IconButtonExampleSimple extends React.Component{
  get home(){


  }
  get moments(){}
  get notifications(){}
  get messages(){}
  render ()
  {
  return (<div style={{paddingTop:'5px'}} >


    <IconButton><FontIcon onClick={this.moments} style={{marginLeft:'30px'}}class="material-icons" label="Moments"/>&#xE3E7; </IconButton>
    <i onClick={this.notifications} style={{marginLeft:'30px'}} class="material-icons">&#xE7F5;</i>Notifications
    <i onClick={this.messages} style={{marginLeft:'30px'}} class="material-icons orange600 ">&#xE0E1;</i>Messages
    <button style={{borderRadius:'280px',}}class="  btn btn-lg btn-responsive">
    </button>

    </div>
);
}}
//export default IconButtonExampleSimple;
