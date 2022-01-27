import React from 'react';

const classes = {
    root: {
        display: 'inline-flex',
        marginTop: '10px',
        width: '50%'
    },
    card: {
        margin: '5px'
    },
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
        <div style={classes.root}>
            <div style={classes.card}>
                <img src={customer.avatar_url} style={classes.avatar}/>
            </div>
            <div style={classes.card}>
                <p>{customer.id}</p>
                <p>{customer.login}</p>
                <span><a href={customer.repos_url}>Repos</a></span>
            </div>
        </div>
    );
};

export default CustomerCard;