import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//anchor tag, href attribute

const Photowall = (props) => {
    return (
        <>
            
            <Link className="addIcon" to="/AddPhoto"></Link>
            {/* <button onClick={props.onNavigate} className="addIcon"></button> */}
            <div className="photoGrid">
                {props.posts
                    .map((post, index) => <Photo key={index} post={post} {...props} index={index} />)}
            </div>
        </>
    )

}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired
}

export default Photowall;