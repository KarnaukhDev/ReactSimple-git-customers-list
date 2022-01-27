import React from 'react';

const classes = {
    button: {
        backgroundColor: 'transparent',
        borderRadius: '5px',
        margin: '5px',
        padding: '5px',

        '&:hover': {
            border: '1px solid green',
            overflow: 'hidden',
        },
    }
};

const Sidebar = ({sort}: any) => {
    return (
        <div>
            <button style={classes.button} onClick={() => {sort('asc')}}>A-Z</button>
            <button style={classes.button} onClick={() => {sort('desc')}}>Z-A</button>
        </div>
    );
};

export default Sidebar;