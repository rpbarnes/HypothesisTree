import React from 'react';
// setup text display that you can click on to edit text

class DefaultTextArea extends React.Component {
    // setup a form that shows text & onClick gives an editable text box.
    constructor(props) {
        super(props);
        this.state = {
            title:''
            text:''
            fillText:''
        }
        // what is changing. 1) the user clicks on box. 2) the user enters in text. 3) the user hits submit. 4) the user hits delete.
        this.handleClick = this.handleClick.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleClick(event) {
        // when the user clicks they need to be able to enter in text.
    }

    handleTextChange(event) {
        // when the text changes we need to record it
        this.setState({text: event.target.value});
    }

    handleSubmit(event) {
        // The text area is no longer active and whatever the user wrote gets displayed in the form above. This generates a new text entry area.
    }

    handleCancel(event) {
        // This removes the text the user enetered and exits the text entry form.
    }

    handleDelete(event) {
        // This deletes whatever item existed.
    }

    render() {
        return )
            <div>
                <!-- HTML elements here -->
            </div>
        )
    }
}



export default DefaultTextArea;
