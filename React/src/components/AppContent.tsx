import * as React from "react";

interface IAppContentProps {
    title: string;
    body: string;
}

export class AppContent extends React.Component<IAppContentProps, {}> {
    public render() {
        return (
            <div className="docs-page-content">
                <div className="docs-page-content-title">{this.props.title}</div>
                <div className="docs-page-content-body">{this.props.body}</div>
            </div>
        );
    }
}
