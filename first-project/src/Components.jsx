import React, {Component} from 'react';

class ClassComp extends Component {
    render() {
        return <p>ClassComp</p>;
    }
}

function FunctionComp() {
    return <p>Function Comp</p>;
}

const ArrowFunctionComp = () => {
    return <p>Arrow Function Comp</p>;
}

export {ClassComp, FunctionComp, ArrowFunctionComp};