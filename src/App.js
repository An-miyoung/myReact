import React from 'react';
import 'App.css';
// import PropTypes from "prop-types";
import Counter from "Counter";
// import ThemedButton from 'ThemedButton';
// import { Button } from 'antd';

// class PostDetail extends React.Component {
//   static propTypes = {
//     postId: PropTypes.number.isRequired,
//   }
//   state = {
//     postDetail: null,
//   }
//   componentDidMount() {
//     const { postId } = this.props;
//     this.requestPost(postId);
//   }
//   componentDidUpdate(prevProps) {
//     const { postId } = this.props;
//     if ( postId !== prevProps.postId ) {
//       this.requestPost(postId);
//     }
//   }
//   requestPost(postId) {
//     console.log(`request post #${postId}`);
//     this.setState({
//       postDetail: null,
//     });
//     setTimeout(() => {
//       this.setState({
//         postDetail:`로딩된 post #${postId}` 
//       })
//     }, 3000);
//   }

//   render() {
//     const { postId } = this.props; 
//     const { postDetail } = this.state;
//     return (
//       <div>
//         포스팅 #{ postId }
//         <hr/>
//         {!postDetail && "로딩중..."}
//         {postDetail}
//       </div>
//     )
//   }
// }

class App extends React.Component {
  // state = {
  //   postId: 10
  // }
  
  // render() {
  //   return (
  //     <div>
  //       <ThemedButton theme="success" label="Say Hello"/>
  //       <PostDetail postId={this.state.postId} />
  //       <button onClick={() => this.setState({postId:20})}>
  //         postId 변경
  //       </button>
  //     </div>
  //   )
  // }
  render() {
    return(
      <Counter onClick={() => console.log("clicked")}/>
    );
  }
}

export default App;
