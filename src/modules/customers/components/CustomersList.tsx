import React, {useEffect, useState} from 'react';
import Sidebar from "./Sidebar";
import CustomerCard from "./CustomerCard";
import * as _ from "lodash";

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
        <div className="row">
            <div className="col-md-4">
                <Sidebar sort={sort}/>
            </div>
            <div className="col-md-8">
                <div className="row">
                    {
                        customers.map((customer: ICustomer) => {
                            return <CustomerCard customer={customer} key={customer.id}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default CustomersList;