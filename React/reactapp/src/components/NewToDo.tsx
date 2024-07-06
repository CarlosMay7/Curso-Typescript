import React, { useRef } from "react";
import { Button, Form } from "semantic-ui-react";

interface NewToDoProps {
    onAddToDo: (text: string) => void;
}

const NewToDo: React.FC<NewToDoProps> = props => {
    const inputRef = useRef<HTMLInputElement>(null);
     
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = inputRef.current!.value;
        props.onAddToDo(enteredText);
    }

    return (
    <Form onSubmit={submitHandler}>
        <Form.Field>
            <label htmlFor="todo-text">Título</label>
            <input type="text" id="todo-text" ref={inputRef}/>
        </Form.Field>

        <Button type="submit">Agregar</Button>
    </Form>
    );
}

export default NewToDo;