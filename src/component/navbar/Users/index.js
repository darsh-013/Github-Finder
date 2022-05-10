import React, { Component } from 'react';
import UserItem from '../UserItem';


export class Users extends Component {

    state = {
        users: [
            {
                id: "1",
                login: "Darsh Dhameliya",
                avatar_url: "https://avatars.githubusercontent.com/darsh-013",
                html_url: "https://github.com/darsh-013"
            },

            {
                id: "2",
                login: "Divyesh Vyas",
                avatar_url: "https://avatars.githubusercontent.com/u/60111682?v=4",
                html_url: "https://github.com/Divyesh_Vyas"
            },

            {
                id: "3",
                login: "Hardik Rana",
                avatar_url: "https://avatars.githubusercontent.com/Hardik-Rana",
                html_url: "https://github.com/Hardik-Rana"
            },

            {
                id: "4",
                login: "Hardik Rana",
                avatar_url: "https://avatars.githubusercontent.com/Hardik-Rana",
                html_url: "https://github.com/Hardik-Rana"
            }

        ]
    };

    render() {
        return (
            <div className="container">
                <div style={userStyle}>
                    {
                        this.state.users.map(user => (
                            <UserItem key={user.id} user={user} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}
export default Users