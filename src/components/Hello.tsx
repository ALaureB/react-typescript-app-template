import * as React from "react";

interface IHelloProps {
    compiler: string;
    framework: string;
}

class Hello extends React.Component<IHelloProps, {}> {
    public render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework} !</h1>;
    }
}

export default Hello;
