import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com/repos'

export const getCommits = ({username, repository}) => {
    return axios.get(`/${username}/${repository}/commits`)
}
