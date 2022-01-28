import React from 'react';

const classes = {
    avatar: {
        width: '150px',
        margin: '5px',
        borderRadius: '10px'
    }
};

interface IProps {
    customer: {
        id: number,
        login: string,
        avatar_url: string,
        repos_url: string
    }
};

const CustomerCard = ({customer}: IProps) => {
    return (
        <div className="col-md-6">
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <img src={customer.avatar_url} style={classes.avatar}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <p>Id: {customer.id}</p>
                        <p>Login: {customer.login}</p>
                        <span>Repos <a href={customer.repos_url}>link</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerCard;