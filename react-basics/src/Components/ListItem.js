import React from 'react';
import Button from './Button';

const ListItem = ({listItems, deleteItem}) => {
    if(!listItems)
        return null;
    return (
        <div className="list-items">
        {
            listItems.map((item, index) => {
                return (
                    <div key={index}>
                        {item}
                        <Button
                            index = {index}
                            onClick = {deleteItem}
                            text = "X"
                        />
                    </div>
                );
            })
        }
        </div>
    );
}

export default ListItem;