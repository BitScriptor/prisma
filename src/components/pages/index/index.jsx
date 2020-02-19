import React from "react";
import ServicesList from './../../generals/services/services';

class Index extends React.Component {

  componentDidMount(prevProps) {
		// eslint-disable-next-line no-undef
		AOS.init();
  }
  
  render() {
    return (
      <div>
        <ServicesList/>
      </div>
    );
  }
}

export default Index;
