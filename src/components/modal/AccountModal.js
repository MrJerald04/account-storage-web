import React, { useContext } from 'react'

import { Context } from '../../context/Context';
const CategoryModal = () => {
    const {
        categoryFormData,
        onCategoryChange,
        handleClose
    } = useContext(Context);
    
    const { title, description } = categoryFormData;

    const onSubmit = e =>{
        e.preventDefault();
        console.log(categoryFormData)
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
                <input type="submit" className="btn btn-success" value="Login" />
                <button className="btn btn-danger" onClick={onClose}>Close</button>
            </div>
        </form>
    )
}

export default CategoryModal
