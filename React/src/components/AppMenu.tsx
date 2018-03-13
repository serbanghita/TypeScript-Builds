import * as React from "react";

interface IAppMenuProps {
    id?: string;
}

interface IAppMenuState {
    items: IAppMenuItem[];
}

interface IAppMenuItem {
    label: string;
    link: string;
}

function bindLocal(target: any, key: string, descriptor: any) {
    const fn = descriptor.value;

    if (typeof fn !== "function") {
        throw new Error(`@autobind decorator can only be applied to methods not: ${typeof fn}`);
    }

    // In IE11 calling Object.defineProperty has a side-effect of evaluating the
    // getter for the property which is being replaced. This causes infinite
    // recursion and an "Out of stack space" error.
    let definingProperty = false;

    return {
        configurable: true,
        get() {
            if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
                return fn;
            }

            const boundFn = fn.bind(this);
            definingProperty = true;
            Object.defineProperty(this, key, {
                value: boundFn,
                configurable: true,
                writable: true
            });
            definingProperty = false;
            return boundFn;
        }
    };
}

export class AppMenu extends React.Component<IAppMenuProps, IAppMenuState> {
    constructor(props: IAppMenuProps) {
        super(props);
        this.state = {
            items: [
                {label: "Tutorials", link: "#page/tutorials"},
                {label: "What's new", link: "#page/whatsnew"},
                {label: "Handbook", link: "#page/handbook"},
                {label: "Declaration Files", link: "#page/declarations"},
                {label: "Project Configuration", link: "#page/configurations"},
            ],
        };
    }

    public shouldComponentUpdate(nextProps: IAppMenuProps, nextState: IAppMenuState) {
        console.log(nextProps);
        console.log(nextState);
        return true;
    }

    @bindLocal
    public addItem(e) {
        const newItem: IAppMenuItem = {
            label: "New item",
            link: `#page/newitem${Date.now()}`,
        };
        this.setState({
            items: this.state.items.concat([newItem]),
        });
    }

    public render() {
        console.log("AppMenu.render");
        const items = this.state.items.map((item: IAppMenuItem, index: number) => (
                <li key={index}>
                    <a href={item.link}>{item.label}</a>
                </li>
            ));
        return (
            <div className="docs-nav">
                <ul>
                    {items}
                    <button onClick={this.addItem}>Add</button>
                </ul>
            </div>
        );
    }
}