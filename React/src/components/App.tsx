import * as React from "react";
import {AppMenu} from "./AppMenu";
import {AppHeader} from "./AppHeader";
import {AppContent} from "./AppContent";

interface IAppProps {
    title: string;
}

export class App extends React.Component<IAppProps, {}> {
    public render() {
        return (
            <div>
                <AppHeader/>
                <div className="docs-body">
                    <div className="docs-body-content content">
                        <AppMenu />
                        <AppContent title="This is a page" body="This is the content." />
                    </div>
                </div>
            </div>
        );
    }
}
