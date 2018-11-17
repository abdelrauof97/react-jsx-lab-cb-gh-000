import React, {Component} from 'react';
import FillerText from './FillerText';

export class WebPage extends Component {
  render() {
    return(
      <div>
        <h1>The world's coolest webpage</h1>
        <FillerText />
        <FillerText />
      </div>
    )
  }
}
