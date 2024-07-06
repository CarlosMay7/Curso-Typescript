import React from "react";
import { Button, List, Icon } from "semantic-ui-react";

interface ToDoListProps {
    items: {
        id: string,
        text: string
    }[]

    onDelete: (id: string) => void;
}

const ToDoList: React.FC<ToDoListProps> = props => {
    return <List>
        {props.items.map((todo => 
            <List.Item key={todo.id}>
            <Button onClick={props.onDelete.bind(null, todo.id)} circular size="mini" icon>
                <Icon color="purple" name="cancel"/>
            </Button>
            {todo.text}
            </List.Item>))}
    </List>
}

export default ToDoList;