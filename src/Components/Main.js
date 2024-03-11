import React,{ useEffect, useState } from 'react';
import Photowall from './Photowall';
import { Route, Routes, Link } from 'react-router-dom';
import AddPhoto from './AddPhoto';
import Single from './Single'





const Main = (props) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        props.startLoadingPosts().then(()=>{
            setLoading(false);
        });
        props.startLoadingComments();
    }, [])
    
    return (
        
        <div>
            <h1>
                <Link to="/"> Photowall</Link>
            </h1>
            <Routes>

                <Route exact path="/" element={
                    <>
                        <Photowall {...props} />
                    </>
                } />
                <Route exact path="/AddPhoto" element={<AddPhoto {...props} />
                } />
                <Route path="/single/:id" element={
                    <Single loading={loading} {...props} />
                    
                }/>
            </Routes>
        </div>
    )




}



// url("https://image.flaticon.com/icons/svg/60/60740.svg") center no-repeat;


// const [posts, setPosts] = useState([{
//     id: 0,
//     description: "beautiful landscape",
//     imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
//         "3919321_1443393332_n.jpg"
// }, {
//     id: 1,
//     description: "Aliens???",
//     imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
// }, {
//     id: 2,
//     description: "On a vacation!",
//     imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
// }]);


// const removePhoto = (removedPost) => {
//     console.log(removedPost.description)
//     setPosts(
//         posts.filter(post => post !== removedPost)
//     )
// }

// const addPhoto = (submittedPost) => {
//     console.log("submittedPost", submittedPost)
//     setPosts(
//         posts.concat([submittedPost])
//     )

//     history('/');
// }




export default Main;