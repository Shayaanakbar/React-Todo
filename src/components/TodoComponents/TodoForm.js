import React from 'react';

// const TodoForm = props => {
//     return (
//         <form onSubmit={props.addTodo}>
//             <input type="text" value={props.input} name="item" onChange={props.handleChanges} />
//             <button type="submit">Add Todo</button>
//         </form>
//     );
// }

// export default TodoForm;

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ""
        };
    }

    handleChanges = e => {
        console.log(e.target.name);
        this.setState({item: e.target.value });
    }

    submitItem = e => {
        this.props.addItem(e, this.state.item);
        this.setState(() => ({item: ""}));
    };

    render() {
        return (
            <form onSubmit={this.submitItem}>
                <input
                    type="text"
                    value={this.state.item}
                    name= "item"
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;