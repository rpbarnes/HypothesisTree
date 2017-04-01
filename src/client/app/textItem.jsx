import React from 'react';

var ENTER_KEY = 13;
var ESCAPE_KEY = 27;

class textItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        // The user can click on the box to edit the text, they can edit the text, they can cancel, they can submit the text, and they can delete the textItem.

    }
