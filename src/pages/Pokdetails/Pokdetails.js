import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Loadingb from '../../components/Loading/Loadingb';
import stylesh from './Pokdetails.module.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




///////////////////////////////////////////////////////////////
//   Use some material ui codes                              //
///////////////////////////////////////////////////////////////



  const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      width:'50px'
    },
    body: {
      fontSize: '10px',
   
    },
 
  }))(TableCell);
      
  const styles = theme => ({
    root: {
      width: '360px',
      marginTop: theme.spacing.unit * 1,
      overflowX: 'auto',
    },
    table: {
      minWidth: '50px',
      width:'360px'
    },
    row: 
    {
      backgroundColor: theme.palette.background.black,
      height:10,
    },
  });



class Pokdetails extends Component{

///////////////////////////////////////////////////////////////
//   init the arrays  for api call                           //
///////////////////////////////////////////////////////////////

state ={
    testlist:[],
    testlistL2:[],
    listSprites:[],
    listStats:[],
    loading: true,
    pk_error: null,  
}





///////////////////////////////////////////////////////////////
//   Api call chck if there is any failure                   //
///////////////////////////////////////////////////////////////


componentDidMount(){
    var urlApi='https://pokeapi.co/api/v2/pokemon/'+ this.props.match.params.req +'/'

    axios.get(urlApi)
    .then (res => { 
        console.log(res); // some console log to check if value are well pass
        console.log(res.data);
        console.log(res.data.species);
        console.log(res.data.stats);
        this.setState({
            loading: true,
            error: null,   
            testlist : res.data,
            listStats:res.data.stats,
            listSprites:res.data.sprites,
            listSpecies:res.data.species
        }       
      )
      const loadingTimer = setTimeout(() => {
        clearTimeout(loadingTimer);
        this.setState({
            loading: false,
        });
    }, 1500);
    }).catch(() => {
    const loadingTimer = setTimeout(() => {
        clearTimeout(loadingTimer);
        this.setState({
            loading: false,
            pk_error: true,
        });
    }, 2500);
}); 
}

///////////////////////////////////////////////////////////////
//   Render  use mamterial ui + override some of the css     //
///////////////////////////////////////////////////////////////
render(){
 

    const { classes } = this.props;
    const { loading } = this.state;


    return (                  
        <div className={stylesh.details}> 
              {loading ? (
                <Loadingb />
            ) : (
            <React.Fragment>
                <Card className={stylesh.Card}>           
                    <CardContent className={stylesh.CardContent}>                
                        <h3>{this.state.testlist.name}</h3>   <br/>    

                        <h4>                        
                          <img src={this.state.listSprites.front_default}        /> 
                          <img src={this.state.listSprites.back_default}         /> 
                          <img src={this.state.listSprites.front_shiny}          />                      
                        </h4>

                        <Paper className={classes.root}>
                          <Table className={classes.table}>
                            <TableHead>
                              <TableRow className={classes.row} >
                                <CustomTableCell >name</CustomTableCell> 
                                <CustomTableCell align="center">effort</CustomTableCell>
                                <CustomTableCell align="center">base_stat</CustomTableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody> 


                        {this.state.listStats.map((pkstat,i)=>{
                          return (
                                    
                                      <TableRow className={classes.row}    key={i}>
                                        <CustomTableCell align="left" >{pkstat.stat.name}</CustomTableCell>
                                        <CustomTableCell align="center">{pkstat.base_stat}</CustomTableCell>
                                        <CustomTableCell align="center">{pkstat.effort}</CustomTableCell>                          
                                      </TableRow> 
                                  
                                  )
                                }
                            )}                   
                                
                      </TableBody>
                    </Table>
                  </Paper>     
                  <CardActions className={stylesh.CardActions}>
                    <h2><NavLink to="/" >Back to Catalogue</NavLink></h2>
                  </CardActions>                           
                </CardContent>  
            </Card>                        
        </React.Fragment>
      )}
    </div>
  )
}
}


Pokdetails.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

export default withStyles(styles)(Pokdetails);