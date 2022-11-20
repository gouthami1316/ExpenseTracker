
import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import unicornbikeImg from './../assets/images/unicorncoin.jpg'
import { Link } from 'react-router-dom'
import auth from '../auth/auth-helper'
import ExpenseOverview from './../expense/ExpenseOverview'
import { urlencoded } from 'body-parser'

import { render } from '@hot-loader/react-dom/cjs/react-dom.production.min'
import './Home.css'


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 800,
    margin: 'auto',
    // marginTop: theme.spacing(5),
    // marginBottom: theme.spacing(5),

  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle,
   
  },
  media: {
    minHeight: 440
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a':{
      color: '#4f83cc'
    } 
  },



}))

export default function Home(){
  const classes = useStyles()
  return (
        <>
          { auth.isAuthenticated() && 
            <ExpenseOverview/> 
          } 
          { !auth.isAuthenticated() && typeof window !== "undefined" && 
            ( <div style={{backgroundColor:"#D9D8F8"}}>
            <Card className={classes.card}>
              <Typography variant="h2" className={classes.title}>
                Home 
              </Typography>
              <CardMedia className={classes.media} image={unicornbikeImg} title="Unicorn Bicycle"/>
              <Typography variant="body2" component="p" className={classes.credit} color="textSecondary"> <a href="https://unsplash.com/@anniespratt" target="_blank" rel="noopener noreferrer"></a></Typography>
              <CardContent>
                <Typography variant="body1" component="p">
                  Welcome to the Expense Tracker. <Link to='/signup'>Sign Up</Link> or <Link to='/signin'>Sign In</Link> to get started.
                </Typography>
              </CardContent>
            </Card>
            </div>
            )
          }
        </>
    )
}

