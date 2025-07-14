import React, { useEffect, useState } from 'react'
import AddNav from './AddNav'
import axios from 'axios'

const ViewPost = () => {
    const [Post, setPost] = useState(
        []
    )
    const fetchData=()=>{
        axios.get(" https://jsonplaceholder.typicode.com/posts").then(
            (response)=>{
                setPost(response.data)
            }
        ).catch()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <AddNav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            {Post.map(
                                (value, index) => {
                                    return (

                                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.title}</h5>
                                                    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                                    <p class="card-text">{value.body}</p>
                                                    <a href="#" class="card-link">Click Here</a>
                                                </div>
                                            </div>

                                        </div>



                                    )

                                }
                            )


                            }









                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewPost
