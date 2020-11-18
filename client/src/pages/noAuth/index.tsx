import * as React from 'react';
import './index.less';

declare interface ErrorPageProps {
  deniedError: string;
}

export default class ErrorPage extends React.PureComponent<ErrorPageProps, {}> {
  public render(): JSX.Element {
    const { deniedError } = this.props;
    return (
        <div className="err-page">
          <div>{deniedError}</div>
        </div>
    );
  }
}
