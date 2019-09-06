import * as React from 'react'
import Header from './../common/Header'

export default class ContactComponent extends React.Component {
  render () {
    console.log("contact component")
    return <div >
      <Header active="contact"/>
          This is Contact Component
    </div>
  }
}
