import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <form>
                <input name="name" onChange={this.handleChange} placeholder="name of cow..." type="text" />
                <br />
                <input name="description" onChange={this.handleChange} placeholder="description of cow..." type="text" />
                <br />
                <button onClick={(e) => this.props.createCow(e, this.state.name, this.state.description)}>Create A Cow</button>
            </form>
        )
    }
}

export default Form;
