import React from 'react';
import Modal from 'react-modal';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      zIndex                : '1000'
    }
  };



const CommitModal = ({open, commit, handleDisplayModal, commitedAt}) => {
    return (
        <Modal
            isOpen={open}
            onRequestClose={handleDisplayModal}
            contentLabel="commitDetails"
            style={customStyles}>
            <div className="ui center aligned segment">
                <div className="ui medium circular image">
                    <img 
                    src={commit.author.avatar_url} 
                    alt="{commit.author.login}"
                    />
                </div>
                <div>
                    <div>
                        <a target="_blank" href={commit.author.html_url}><h2>{commit.author.login}</h2></a>
                    </div>
                    <br />
                    <div>
                        <p><span className="ui small header">CommitedAt:</span> {commitedAt}</p>
                    </div>
                    <div>
                        <p><span className="ui small header">Message:</span> {commit.commit.message}</p>
                    </div>
                    <br />
                </div>
                <button className="ui black button" onClick={handleDisplayModal}>Close</button>
            </div>
        </Modal>
    );
};

Modal.setAppElement('#root');
export default CommitModal;