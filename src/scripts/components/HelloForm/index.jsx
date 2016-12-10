import HelloSayer from './HelloSayer';
import React from 'react';
import './style';

class HelloForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        };
    }

    render() {
        return (<div className="hello-form">
            <input type="text" onChange={this.onChange.bind(this)} />
            <HelloSayer name={this.state.name} />
        </div>);
    }

    onChange(e) {
        this.setState({
            name: e.target.value
        });
    }
}

HelloForm.defaultProps = {
    name: 'World'
}

export default HelloForm;