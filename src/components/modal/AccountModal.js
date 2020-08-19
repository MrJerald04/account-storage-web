import React, { useContext } from 'react'
import api from '../../api/api';

import { Context } from '../../context/Context';
const AccountModal = () => {
    const {
        accountFormData,
        onAccountChange,
        categoryID,
        setAccountList,
        handleClose
    } = useContext(Context);
    
    const { account_email, account_password, description } = accountFormData;

    const onSubmit = e =>{
        e.preventDefault();
        api.handleStoreAccount(categoryID, accountFormData).then(()=>{
            api.handleRetrieveAccount(setAccountList, categoryID);
            onClose();
        });
    }

    const onClose = () => {
        accountFormData.account_email = '';
        accountFormData.account_password = '';
        accountFormData.description = '';
        handleClose();
    }

    return (
        <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
                <input
                    type="email"
                    placeholder="Email"
                    name="account_email"
                    value={account_email}
                    onChange={e => onAccountChange(e)}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Password"
                    name="account_password"
                    value={account_password}
                    onChange={e => onAccountChange(e)}
                />
            </div>
            <div className="form-group">
                <textarea
                    placeholder="Description"
                    name="description"
                    value={description}
                    onChange={e => onAccountChange(e)}
                ></textarea>
            </div>
            <div className="modal-buttons">
                <input type="submit" className="btn btn-success" value="Login" />
                <button className="btn btn-danger" onClick={onClose}>Close</button>
            </div>
        </form>
    )
}

export default AccountModal
