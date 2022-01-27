import React, {useEffect, useState} from 'react';
import Sidebar from "./Sidebar";
import CustomerCard from "./CustomerCard";
import * as _ from "lodash";

const classes = {
    root: {
        display: 'inline-flex',
        width: '100%'
    },
    sidebar: {
        width: '20%',
    },
    list: {
        width: '70%'
    }
};

interface ICustomer {
    id: number,
    login: string,
    avatar_url: string,
    repos_url: string
};

const CustomersList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        if (!customers.length) {
            fetch('https://api.github.com/users')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    if (data.length) {
                        setCustomers(data);
                    }
                })
        }
    });

    const sort = (sort: "asc" | "desc") => {
        const sortedCustomers = _.orderBy(customers, ['id'], sort);
        setCustomers(sortedCustomers);
    };

    return (
        <div style={classes.root}>
            <div style={classes.sidebar}>
                <Sidebar sort={sort}/>
            </div>
            <div style={classes.list}>
                {
                    customers.map((customer: ICustomer) => {
                        return <CustomerCard customer={customer} key={customer.id}/>
                    })
                }
            </div>
        </div>
    );
};

export default CustomersList;