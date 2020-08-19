import React, { useContext } from 'react'

import { Context } from '../../context/Context';

import api from '../../api/api';
const CategoryModal = () => {
    const {
        categoryFormData,
        onCategoryChange,
        handleClose,
        setAccountCategoryList
    } = useContext(Context);
    
    const { title, description } = categoryFormData;

    const onSubmit = e =>{
        e.preventDefault();
        api.handleStoreAccountCategory(categoryFormData).then(()=>{
            api.handleAccountCategoryList(setAccountCategoryList);
            onClose();
        });
    }

    const onClose = () => {
        categoryFormData.title = '';
        categoryFormData.description = '';
        handleClose();
    }

    return (
        <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="alert alert-danger">
            Invalid credentials
            </div>
            <div className="form-group">
            <input
                type="text"
                placeholder="Category Title"
                name="title"
                value={title}
                onChange={e => onCategoryChange(e)}
                required
            />
            </div>
            <div className="form-group">
            <input
                type="text"
                placeholder="Desctiption"
                name="description"
                value={description}
                onChange={e => onCategoryChange(e)}
            />
            </div>
            <div className="modal-buttons">
                <input type="submit" className="btn btn-success" value="Save" />
                <button className="btn btn-danger" onClick={onClose}>Close</button>
            </div>
        </form>
    )
}

export default CategoryModal
