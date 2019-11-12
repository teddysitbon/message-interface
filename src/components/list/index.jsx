import './styles.scss';
import Message from '../message';
import React from 'react';
import { messages } from '../../constants';
class List extends React.Component {
    state = {
        messages: []
    }

    // eslint-disable-next-line react/no-deprecated
    componentWillMount () {
        this.setState({ messages });
    }

    render () {
        return (
            <section className="container">
                {
                    this.state.messages.map((message) => (
                        <Message
                            isPrivated={message.isPrivated}
                            key={message.id}
                            text={message.text}
                            username={message.username}
                        />
                    ))
                }
            </section>
        );
    }
}

export default List;
