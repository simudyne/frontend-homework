import React from 'react';
import moment from 'moment';

const Commit = ({commit}) => {
    const createdAt = moment(commit.commit.author.date).format("YYYY/M/D, H:m");

    return (
        <div className="ui segment">
            <div className="ui  small circular image">
                <img 
                src={commit.author.avatar_url} 
                alt="{commit.author.login}"
                />
            </div>
            
            <div className="ui content">
                <div className="ui header">
                    Username: <a target="_blank" href={commit.author.html_url}>{commit.author.login}</a>
                </div>
                <div className="meta">
                    commited at: {createdAt}
                </div>
                <div className="description">
                    Message: 
                    <p>{commit.commit.message}</p>
                </div>
            </div>
        </div>
    );
    
};

export default Commit;