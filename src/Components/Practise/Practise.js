import React from 'react'
import BlogCards from '../../BlogCards'
import './Practise.css'
import { Component } from 'react';


// class Practise extends Component {
//     constructor() {
//         super();
//         this.state = {
//             obj: [
//                 {
//                     id: 1,
//                     title: "title1 ",
//                     description: "there are many person"
//                 },
//                 {
//                     id: 2,
//                     title: "title2 ",
//                     description: "there are many person"
//                 },
//                 {
//                     id: 3,
//                     title: "title3",
//                     description: "there are many person"
//                 }
//             ]
//         }

//     }



//     HideBlog = () => {


//         const blogCards = this.state.obj.map((item, pos) => {
//             console.log(item)

//             return (
//                 <div className='BlogCard' key={pos} >
//                     <BlogCards className='BlogCards' title={item.title} description={item.description} about='hii Dosto' id={item.id} />
//                     {/* <div className='Blog' key={item.id}
//                   >
//                  <h3>{item.title}</h3>
//                     <p>{item.description}</p>    
//                  </div> */}

//                 </div>
//             )
//         })
//     }

//     render() {
// console.log(this.state)

//         return (
//             <div className='Pract' >
//                 <button onClick={this.HideBlog}>Hide Blog</button>
//                 <br></br>
//                 {/* {this.blogCards} */}

//                 {/* 
//             <div >
//                 <h3>{obj.title}</h3>
//                 <p>{obj.description}</p>
//             </div>
//             <hr></hr>
//             <div>
//                 <h3>{obj.title}</h3>
//                 <p>{obj.description}</p>
//             </div> */}

//             </div>

//         );
//     }
// }


class Practise extends Component {
    state = {
        showBlogs: true
    }
    blogArray = [
        {
            id: 1,
            title: "title1 ",
            description: "there are many person",
            likeCount: 0
        },
        {
            id: 2,
            title: "title2 ",
            description: "there are many person",
            likeCount: 0
        },
        {
            id: 3,
            title: "title3",
            description: "there are many person",
            likeCount: 0
        }
    ]
    onlikeBtnClick = (pos) => {
        alert('like button has clicked at pos=>' + pos)

    }

    blogCards = this.blogArray.map((item, pos) => {

        return (

            <div className='BlogCard' key={pos} >
                <BlogCards className='BlogCards' title={item.title} description={item.description} onlikeBtnClick={() => this.onlikeBtnClick(pos)} likeCount={item.likeCount} about='hii Dosto' id={item.id} />
            </div>
        )
    })

    onHide = () => {
        // let updateState=!this.state.showBlogs;
        // console.log(updateState);

        //below code is use for updateState function
        this.setState((prevState, prevProps) => {
            console.log(prevState)
            return {
                showBlogs: !prevState.showBlogs


            }

        });

    }

    render() {
        // console.log('render method is called')
        return (
            <div className='Pract'>
                <button onClick={this.onHide}>{this.state.showBlogs ? 'Hide Blog' : 'show Blog'}</button>
                <br></br>
                {this.state.showBlogs ? this.blogCards : null}
                {/* {this.state.showBlogs?this.blogCards:null} */}
            </div>
        );
    }
}

export default Practise;