import React, { useContext } from 'react';

import { Context } from '../../context/Context';
import { Link } from 'react-router-dom';

import FormModal from '../modal/ModalContainer';

const Dashboard = (props) => {
    const {
        handleShow
    } = useContext(Context);

    const categoryList = [
        {
            category_id: '1',
            title: 'Google',
            description: 'google'
        },
        {
            category_id: '2',
            title: 'Facebook',
            description: 'facebook'
        },
        {
            category_id: '3',
            title: 'Github',
            description: 'github'
        },
        {
            category_id: '4',
            title: 'Yahoo',
            description: 'yahoo'
        }
    ];
    const handleCategory = (id) => {
        console.log(id);
        props.history.push({
            pathname: '/account-list',
            state: { category_id: id }
        });
    }

    return(
        <section className="container">
            <h1 className="large text-primary">
                Dashboard
            </h1>
            <p className="lead text-light"><i className="fas fa-user"></i> Welcome <span className="text-success"><Link to='profile'>Jerald Dela Cruz</Link></span></p>
            <div className="dash-buttons">
                <button onClick={handleShow} className="btn btn-light"
                ><i className="fab fa-black-tie text-primary"></i> Add Category</button>
            </div>

            <h2 className="my-2 text-light">Categories</h2>
            <div className="flex-container">
                {
                    categoryList.map((item, index)=>{
                        return(
                            <div key={index} onClick={() => handleCategory(item.category_id)}>{item.title}</div>
                        );
                        
                    })
                }
                
            </div>
            <FormModal 
                form="category"
                title="Add Category"
            />
        </section>
        
    )
    
}
  
export default Dashboard;
