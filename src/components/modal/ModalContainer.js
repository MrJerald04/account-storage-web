import React, { useContext } from 'react';

import { Context } from '../../context/Context';

import CategoryModal from './CategoryModal';
import AccountModal from './AccountModal';

const ModalContainer = (
    data
) => {
  const {
    show,
  } = useContext(Context);

    var modal = document.getElementsByClassName('modal');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "block";
        }
    }

  return (
    
    <div id="myModal" className={show ? "modal" : "modal close-modal"}>
      <div className="modal-content">
        <div className="modal-header">
        <h2>{data.title}</h2>
        </div>
        <div className="modal-body">
          {
              data.form === 'category' ? 
                <CategoryModal /> :
              data.form ==='Add Account' ?
                <AccountModal /> :
                null
          }
        </div>
        
      </div>
    </div>

  );
};

export default ModalContainer;
