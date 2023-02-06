// const ImgComponent = (props) => {
//   return (
//     <>
//       <img src={props.link} alt={props.alt} />
//     </>
//   );
// };

// export default ImgComponent;

import React from "react";

class ImgComponent extends React.Component {
  render() {
    return <img src={this.props.link} alt={this.props.alt} />;
  }
}

export default ImgComponent;
