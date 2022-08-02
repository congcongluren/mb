import React, { PureComponent } from "react";

export default class ErrorBound extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // 1、错误信息（error）
        // 2、错误堆栈（errorInfo)
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <div>error</div>;
        }
        return (
            <>
                {this.props.children}
            </>
        );
    }
}