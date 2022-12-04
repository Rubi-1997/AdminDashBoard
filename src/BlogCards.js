import React from 'react';


const BlogCards=(props)=>{
    console.log(props)
    return(
        <div className="BlogCards">
            <h3>
              {props.title}
            </h3>
            <p>{props.description} 
             </p>
            <p>{` id:${props.id}`}</p>
            <p>Like Count:<span className='likeCount'>{props.likeCount}</span></p>
            <button onClick={props.onlikeBtnClick}>Like</button>
        </div>
    )
}
export default BlogCards;





// using class component

// class BlogCards extends Component{
//    state={
//     likecount:0
//    }
//    onLikebuttonClick=()=>{
//     this.setState((prevState,prevProps)=>{
//        return{ likecount:prevState.likecount+1}
        
//     }

//     );
//    }
//    render(){
//     return(
//                 <div className="BlogCards">
//                     <h3>
//                       {this.props.title}
//                     </h3>
//                     <p>{this.props.description} 
//                      </p>
//                     <p>{` id:${this.props.id}`}</p>
//                     <p>Like Count:<span className='likeCount'>{this.state.likecount}</span></p>
//                     <button onClick={ this.onLikebuttonClick}>Like</button>
//                 </div>
//             )

//    }

// }
// export default BlogCards