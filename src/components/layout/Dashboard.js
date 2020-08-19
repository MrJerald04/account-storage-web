import React, { useContext, useEffect, useState } from 'react';

import { Context } from '../../context/Context';
import { Link } from 'react-router-dom';
import FormModal from '../modal/ModalContainer';
import Navbar from './Navbar';
import api from '../../api/api';

const Dashboard = (props) => {
    const {
        handleShow,
    } = useContext(Context);
    const [accountCategoryList, setAccountCategoryList] = useState([]);
    useEffect(()=>{
        api.handleAccountCategoryList(setAccountCategoryList);
    }, [setAccountCategoryList]);
    
    const handleCategory = (id) => {
        console.log(id);
        props.history.push({
            pathname: '/account-list',
            state: { category_id: id }
        });
    }

    return(
        <>
        <Navbar />
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
                    accountCategoryList.map((item, index)=>{
                        return(
                            <div key={index} onClick={() => handleCategory(item._id)}>{item.title}</div>
                        );
                        
                    })
                }
                
            </div>
            <FormModal 
                form="category"
                title="Add Category"
            />
        </section>
        </>
    )
    
}
  
export default Dashboard;
