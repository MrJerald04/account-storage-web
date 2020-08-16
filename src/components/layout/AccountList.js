import React, { useContext, useState } from 'react';

import { Context } from '../../context/Context';
import FormModal from '../modal/ModalContainer';

const AccountList = (props) => {
    const {
        handleShow
    } = useContext(Context);

    const [ action, setAction ] = useState();
    console.log(props.location.state.category_id);
    const accountList = [
        {
            user_id: '1',
            account_category_id: 1,
            account_email: 'Google',
            account_password: 'google',
            description: 'sample'
        },
        {
            user_id: '2',
            account_category_id: 1,
            account_email: 'Facebook',
            account_password: 'facebook',
            description: 'sample'
        },
        {
            user_id: '3',
            account_category_id: 1,
            account_email: 'Github',
            account_password: 'github',
            description: 'sample'
        },
        {
            user_id: '4',
            account_category_id: 1,
            account_email: 'Yahoo',
            account_password: 'yahoo',
            description: 'sample'
        }
    ];

    const handleAction = (action) => {
        setAction(action);
        handleShow();
    }
    return(
        <section className="container">
        <h1 className="large text-primary">
            Google
        </h1>
        <p className="lead text-light"> Accounts</p>
        <div className="dash-buttons">
            <button onClick={() => handleAction('edit-category')} className="btn btn-light">
                <i className="fas fa-graduation-cap text-primary"></i>
                Edit Category
            </button>
            <button onClick={() => handleAction('Add Account')} className="btn btn-light">
                <i className="fas fa-graduation-cap text-primary"></i>
                Add Account
            </button>
        </div>

        <h2 className="my-2 text-light">List of Account</h2>
        
        <div className="table-overflow">
            <table className="table">
            <thead>
                <tr>
                <th>Email</th>
                <th className="hide-sm">Description</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    accountList.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td className="text-light">{item.account_email}</td>
                                <td className="hide-sm text-light">{item.description}</td>
                                <td>
                                    <button onClick={() => handleAction('View Account')} className="btn btn-success">
                                    <i className="fas fa-eye"></i>
                                    </button>
                                    <button onClick={() => handleAction('Update Account')} className="btn btn-primary">
                                    <i className="fas fa-edit"></i>
                                    </button>
                                    <button className="btn btn-danger">
                                    <i className="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
            </table>
        </div>
        <FormModal 
            form={action}
            title={action}
        />
        </section>
    )
}
  
export default AccountList;
