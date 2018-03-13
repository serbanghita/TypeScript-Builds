import * as React from "react";

interface IAppHeaderProps {
    id?: string;
}

export class AppHeader extends React.Component<IAppHeaderProps, {}> {
    public render() {
        return (
            <div className="docs-header">
                <div className="docs-header-content content">
                    Header contents.
                </div>
            </div>
        );
    }
}