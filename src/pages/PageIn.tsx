// import Button from 'antd/lib/button';
// import Divider from 'antd/lib/divider';
// import Icon from 'antd/lib/icon';
import Table from 'antd/lib/table';
// const { Column } = Table;

import * as React from 'react';
import './pageIn.less';

import { ColumnProps } from 'antd/lib/table';

interface IUser {
  key: number;
  name: string;
}

const columns: Array<ColumnProps<IUser>> = [{
  key: 'name',
  title: 'Name',
  dataIndex: 'name',
}];

const data: IUser[] = [{
  key: 0,
  name: 'Jack',
}];

class UserTable extends Table<IUser> {
  
}
// tslint:disable-next-line:no-unused-expression
<UserTable columns={columns} dataSource={data} />

// 使用 JSX 风格的 API
// tslint:disable-next-line:max-classes-per-file
class NameColumn extends Table.Column<IUser> {
  
}



// tslint:disable-next-line:max-classes-per-file
class PageIn extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
    this.state = {
    };
  }
  public render() {
    return (
      <div className="App">
        <UserTable dataSource={data}>
          <NameColumn key="name" title="Name" dataIndex="name" />
        </UserTable>
      </div>
    );
  }
}
export default PageIn;