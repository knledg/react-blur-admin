import React from 'react';

export class Preloader extends React.Component {
  render() {
    return (
      <div ref='container' className='preloader-component-container'>
        <div ref='component' className="preloader-component">
          <div></div>
        </div>
      </div>
    );
  }
}
