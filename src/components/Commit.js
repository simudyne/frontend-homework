import React from 'react';
import moment from 'moment';
import CommitModal from './CommitModal'


class Commit extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            commitedAt: moment(this.props.commit.commit.author.date).format("YYYY/MM/DD, H:m"),
            message: "",
            openModal: false
        }
    }

    componentDidMount() {
        let { message } = this.props.commit.commit
        if(message.length > 24 ) {
            message = message.substring(0, 24) + "..."
        }

        this.setState(() => ({message}))

    }

    handleDisplayModal () {
        this.setState(() => ({openModal: !this.state.openModal}))
    }

    render() {
        const commit = this.props.commit;
        return (
            <div onClick={this.handleDisplayModal.bind(this)} className="ui padded segment">
                <div className="ui small circular image">
                    <img 
                    src={commit.author.avatar_url} 
                    alt="{commit.author.login}"
                    />
                </div>
                
                <div className="">
                    <div className="ui header">
                        Username: <a target="_blank" href={commit.author.html_url}>{commit.author.login}</a>
                    </div>
                    <div className="ui small header">
                        <p><span>commited at: </span>{this.state.commitedAt}</p>
                    </div>
                    <div className="">
                        <p>
                            <span className="ui small header">Message: </span>
                            {this.state.message}
                        </p>
                    </div>
                </div>
                <CommitModal 
                    open={this.state.openModal}
                    handleDisplayModal={this.handleDisplayModal.bind(this)}
                    commit={commit}
                    commitedAt={this.state.commitedAt}/>
            </div>
        );
    }
};

export default Commit;