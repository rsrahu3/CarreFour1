import * as React from 'react'
import Header from './../common/Header'
import constants from './../common/constant'
import TopHeader from './../common/TopHeader'

const AboutComponent = ()=>{
  return (<div><TopHeader/><Header active="about"/>{constants.aboutData}</div>)
}
export default AboutComponent

