import * as React from "react";
import { Button } from 'antd-mobile';
import './index.less';

export interface HelloProps { compiler: string; framework: string; }

export class Hello2 extends React.Component<HelloProps, {}> {
    componentDidMount() {
        const a = '1';

    }

    formatAmount = () => {
        
    }

    render() {
        return <div className="test">
            <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
            <Button type="primary">提交</Button>
        </div>
    }
}