import React from 'react'
import Header from './Header'
import Banner from '../banner/Bannerlogo'
import Subscription from '../subscription/Sub'
import Joinprep from '../joinprep/index'
import Prepyoutube from '../prepyoutube/index'
import Classes from '../classes/index'
import Subplans from '../subplans/index'
import Doyohaveanyquestion from '../components/doyouhavequestion/index'
import Benefits from '../benefits/index'
import Formlast from '../formlast/index'
import WhystudyWithus from '../components/whystudywithus/WhystudyWithus'
import Classroom from '../components/classroom/Classroom'
import Faculty from '../components/faculty/Faculty'
import { Route, Routes, useLocation } from 'react-router-dom'
import Formsecond from '../components/formsecond'
import Footer from '../layout/Footer'
import reactGA from 'react-ga'

function LandingPage() {



  return (
    <div>
        <Header/>
        <Banner/>
        <Subscription/>
        <WhystudyWithus/>
        <Formsecond/>
        <Classroom/>
        <Joinprep/>
        <Prepyoutube/>
        <Classes/>
        <Subplans/>
        <Faculty/>
        <Doyohaveanyquestion/>
        <Benefits/>
        <Formlast/>
        <Footer/>
    </div>
  )
}

export default LandingPage