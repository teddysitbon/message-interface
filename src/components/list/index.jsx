import React from 'react';
import Message from '../message';
import { messages } from '../../constants';

class List extends React.Component {

    state = {
        messages: []
    }
    
    componentWillMount() {
        this.setState({ messages });
    };

    render () {

        return (
            <section>
                {
                    this.state.messages.map(message => (
                        <Message
                            key={message.id}
                            isPrivated={message.isPrivated}
                            username={message.username}
                            text={message.text}
                        />
                    ))
                }
            </section>
        );
    }
}

export default List;
