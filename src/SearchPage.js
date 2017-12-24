import React from 'react';
import {TabsExampleIconText} from './TabsExampleControlled.js';
import {WhoToFollow} from './WhoToFollow.js';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import {TrendsForYou} from './TrendsForYou.js';
import {Feed} from './feed.js';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Image from 'material-ui-image';
import {Buttons} from './Buttons.js';
import Avatar from 'material-ui/Avatar';

export class SearchPage extends React.Component{
render()
{

return(<div>
  <TabsExampleIconText/>  {/*Renders the upper Navigation bar of Twitter*/}

  <div style={{marginTop:'-17px',backgroundColor:'#00aced',width:'100%',height:'65px'}} >

    <h3 style={{color:'white', paddingTop:'20px',textAlign:'right',paddingRight:'1150px'}}>
      <b >
      Cristiano  Ronaldo</b></h3>


  </div>
  <div style={{marginTop:'-1000',backgroundColor:'white',width:'100%',height:'48px'}} >
    <Tabs style={{ height:'18%',width:'45%',paddingLeft:'141px'

    }}tabItemContainerStyle={{backgroundColor:''}}
      inkBarStyle={{color:'blue',background: '#00aced'}}

    >
      <Tab  buttonStyle={{color:'black'}} label="Top" value="a"
        style={{textTransform: "none"}}>
      </Tab>
      <Tab  buttonStyle={{color:'black'}} label="Latest" value="b"
        style={{textTransform: "none"}}>
      </Tab>
      <Tab style={{textTransform: "none"}} buttonStyle={{color:'black'}} label="People" value="c">

      </Tab>
      <Tab style={{textTransform: "none"}} buttonStyle={{color:'black'}} label="Photos" value="d">

      </Tab><Tab style={{textTransform: "none"}} buttonStyle={{color:'black'}} label="Videos" value="e">

      </Tab>
      <Tab style={{textTransform: "none"}} buttonStyle={{color:'black'}} label="News" value="f">

      </Tab>
    </Tabs>
  </div>
  <Paper style={{width:300,height:60,marginLeft:141,marginTop:20,}} zDepth={3} rounded={false} >
    <h4 style={{marginLeft:20}}> <b> <br/>Search Filters</b><a style={{fontSize:'12px'}} href="#">&nbsp; Show</a></h4>
  </Paper>
  <Paper style={{width:300,height:200,marginLeft:141,marginTop:20}} zDepth={3} rounded={false} >
    <h4 style={{marginLeft:20}}> <b> <br/>Related Searches</b></h4>
    <div><a style={{marginLeft:20,fontSize:'17px'}} href="#"><b> the punjabi geek</b></a></div>
    <a style={{marginLeft:20,fontSize:'17px'}} href="#"><b> hala madrid</b></a>

    <div>  <a style={{marginLeft:20,fontSize:'17px'}} href="#"><b>  code for fun </b></a></div>
    <div><a style={{marginLeft:20,fontSize:'17px'}} href="#"><b> geek is the new sexy</b></a></div>

    <a style={{marginLeft:20,fontSize:'17px'}} href="#"><b> real madrid</b></a>

  </Paper>
  <div style={{marginTop:'-80px',marginLeft:'-910px'}}>
    <WhoToFollow/>   { /* Render's the WhoToFollow component*/}
  </div>

  <div style={{marginLeft:'-45px',marginTop:'620px'}}>
    <TrendsForYou />    { /*Render's the TrendsForYou component*/}
  </div>



  <Paper style={{marginTop:'-1410px',marginLeft:'450px',height:'1639px',width:'566px'}}>
    <h5 style={{paddingTop:10}}><b style={{paddingLeft:20,marginBottom:5}}>
      <Avatar src="http://www.alhudahomework.org/wp-content/uploads/2017/10/Football-HD-Wallpapers-Al34fh.jpg">

      </Avatar>&nbsp;
      Football for Life
    </b>
    </h5>
    <h5 style={{paddingBottom:-20,paddingLeft:20,paddingTop:'-5px '}}>Before you laugh at kids who believe in Santa, remember there are grown men
      who believe that Lionel Messi is a better footballer than Cristiano Ronaldo.

    </h5>
    <Buttons />  {/*Renders all the twitter buttons*/}
    <Divider style={{marginTop:10}}/>

    <div style={{marginLeft:20,marginTop:10}}>
      <Avatar src="https://i.ytimg.com/vi/r3dhlGvzhOM/maxresdefault.jpg">

      </Avatar>
      <b >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cristiano Ronaldo  </b> <i style={{color:'#00aced'}}class="fa fa-check"></i>
    </div>



    <h5 style={{marginLeft:5,paddingLeft:17}}>
      I just joined Real Madrid’s Final training session ahead of the Bernabéu El Clasico.
      <br/>
      <br/>
      <a href="#">#HalaMadrid #ElClasico</a>
    </h5>
    <Paper style={{height: 450,
      width: 565,
      marginLeft: 0,
      marginBottom:10,


    }}
      zDepth={3} rounded={false} >
      <Image loadingStyle={{color:'red'}} color='#00aced'  src="https://i.ytimg.com/vi/r3dhlGvzhOM/maxresdefault.jpg"/>
      <Buttons />  {/*Renders all the twitter buttons*/}
      <Divider />
    </Paper>
    <Paper style={{width:565,height:100,marginLeft:0,marginTop:180,textAlign:'left'}} zDepth={3} rounded={false} >
      <div style={{marginLeft:20,paddingTop:5}}><Avatar src="https://i.ytimg.com/vi/r3dhlGvzhOM/maxresdefault.jpg">

      </Avatar>
        <b style={{marginLeft:5,marginBottom:10}}>Fc Barcelona &nbsp;
          <i style={{color:'#00aced'}}class="fa fa-check"></i>
        </b></div>

      <h5 style={{marginLeft:5}}>We are not training ahead of the El Clasico because we know we can't beat madrid no matter how hard we try. <br/><br/>
        <a href="#">#NoForcaBarca #HalaMadrid #ElClasico</a>
      </h5></Paper>
    <Paper style={{height: 450,
      width: 565,

        backgroundImage:"url('')",
      marginBottom:121,
      textAlign: 'center',

    }}
      zDepth={3} rounded={false}  >
      <Image color='#00aced' src="https://i2-prod.mirror.co.uk/incoming/article8888120.ece/ALTERNATES/s615b/FC-Barcelona-v-Club-Atletico-de-Madrid-La-Liga.jpg"/>
    </Paper>
    <Buttons />
  </Paper>
</div>
  );


}


}

  //
