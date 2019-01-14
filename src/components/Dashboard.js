import React from 'react';

import Commit from "./Commit"

const Dashboard = ({commits}) => {
    return (
            <div className="ui four column centered grid padded ">
                {commits.map((commit) => {
                    return <Commit key={commit.sha} commit={commit}/>
                })}
            </div>
    );
};

export default Dashboard;