import * as React from 'react';

export default function asyncComponent(importComponent: any) {
  class AsyncComponent extends React.Component<any, any> {
    constructor(props: object) {
      super(props);
      this.state = {
        component: null
      };
    }

    public async componentDidMount() {
      this.setState({
        component: await importComponent()
      });
    }

    public render() {
      const C = this.state.component && this.state.component.default || null;
      return C ? (<C {...this.props} />) : null;
    }
  }
  return AsyncComponent;
}