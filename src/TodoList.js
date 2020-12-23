import React from "react";
import { List, Input } from "antd";


const TodoItem = ({ todo }) => <li>{ todo }</li>;

class TodoList extends React.Component {
    state = {
        todoList : ['파이썬 익히기', '장고익히기'],

    }
    onChange = (e) => {
        const { value } = e.target;
        this.setState({
            current: value,
        });
    };
    onKeyDown = (e) => {
       if ( e.keyCode === 13 ) {
          const { todoList, current } = this.state;
          if ( current.trim().length > 0) {
            this.setState({
                current: '',
                todoList: [...todoList, current.trim()],
            })
          }
       }
    };
    render() {
        return (
            <div style={{ width: '300px', margin: '30px auto' }}>
                <List 
                    header = {<div style={{backgroundColor:'red'}}>Todo List</div>}
                    bordered
                    dataSource={ this.state.todoList }
                    renderItem={todo => (
                        <List.Item>
                           { todo }
                        </List.Item>
                    )}
                    style={{
                        marginBottom: '4px'
                    }}
                />
                <Input type="text" value={this.state.current}
                       placeholder="할일을 입력하세요."
                       onChange={this.onChange} 
                       onKeyDown={this.onKeyDown} 
                />

                {/* <ul>
                    {this.state.todoList.map((todo, index) => 
                        <TodoItem key={ index } todo={ todo } />
                    )}
                </ul>
                <input type="text" value={this.state.current}
                       placeholder="할일을 입력하세요."
                       onChange={this.onChange} 
                       onKeyDown={this.onKeyDown} />
                <hr/>
                {JSON.stringify(this.state)} */}
            </div>
        );
    }
}

export default TodoList;