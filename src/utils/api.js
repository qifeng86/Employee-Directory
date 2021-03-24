
import axios from "axios";
const url = 'https://randomuser.me/api/?results=20';

// eslint-disable-next-line
export default {
    search: function () {
        return axios.get(url)

    }
}