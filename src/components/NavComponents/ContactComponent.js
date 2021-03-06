import * as React from 'react';
import Header from './../common/Header';
import TopHeader from './../common/TopHeader';
import AnimationComponent from './../Animation/AnimationComponent'

export default class ContactComponent extends React.Component {
  render() {
    console.log('contact component');
    return (
      <div>
        <TopHeader />
        <Header active="contact" />
        This is Contact Component
        <AnimationComponent/>
      </div>
    );
  }
}
