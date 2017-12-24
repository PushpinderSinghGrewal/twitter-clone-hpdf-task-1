import React from 'react';
import MobileTearSheet from './MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import {List, ListItem,ListItemSecondaryAction} from 'material-ui/List';
//import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import CommentIcon from 'material-ui-icons/Comment';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

export class WhoToFollow extends React.Component{
render()
{
return (<div style={{marginLeft:'1050px',marginTop:'99px'}} >





  <List style={{height:'470px',backgroundColor:'white',width:'300px'}}>
    <h5 style={{marginLeft:'25px'}}>    <b> Who to follow </b>
      <a style={{ fontSize:'12px'}} href="#"> Refresh</a>
      <a style={{ fontSize:'12px'}} href="#">  View all </a>
    </h5>


    <ListItem
      primaryText=" Cristiano Ronaldo " secondaryText="@Cristiano"
      leftAvatar={<Avatar src="https://wallpapercave.com/wp/wp1827100.jpg" />}
    />

    <RaisedButton
      href=""
      target="_blank"
      style={{marginLeft:'80px'}}
      label="Follow"
      primary={true}  labelStyle={{textTransform: "none"}} buttonStyle={{borderRadius:'30px'}}
    />
    <ListItem
      primaryText="Zlatan Ibrahimovic" secondaryText="@ibraofficial"
      leftAvatar={<Avatar src="http://e2.365dm.com/17/01/16-9/20/skysports-zlatan-ibrahimovic-man-utd-premier-league_3871030.jpg?20170115182531" />}

    />
    <RaisedButton
      href=""
      target="_blank"
      style={{marginLeft:'80px'}}
      label="Follow"
      primary={true}  labelStyle={{textTransform: "none"}} buttonStyle={{borderRadius:'30px'}}
    />
    <ListItem
      primaryText="Eden Hazard" secondaryText="@Hazardeden10"
      leftAvatar={<Avatar style={{height:50}}src="https://i.ytimg.com/vi/B8RS-wB9QsM/maxresdefault.jpg" />}

    />
    <RaisedButton
      href=""
      target="_blank"
      style={{marginLeft:'80px'}}
      label="Follow"
      primary={true}  labelStyle={{textTransform: "none"}} buttonStyle={{borderRadius:'30px'}}
    />
    <br/><br/>
    <Divider />
    <br/>
    <a href="#"><i  style={{color:'#00aced',marginLeft:'20px'}} class="fa fa-users"></i > We can't find people you know</a>
      <br/>
      <br/>
      <Divider />
      <div style={{backgroundColor:'rgb(210, 220, 237)',height:'30px'}}></div>
    </List>




  </div>)

}
// rightIconButton={<FontIcon  color='blue' className ="material-icons">home</FontIcon>}




}
