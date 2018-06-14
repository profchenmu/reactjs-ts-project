import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider';
// import Icon from 'antd/lib/icon';
import Table from 'antd/lib/table';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import * as demoAction from 'src/actions/demoAction.js';

// const Column = Table.Column;

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: (text:any) => <a href="javascript:;">{text}</a>,
}, {
  title: 'Balance',
  key: 'balance',
  render: (text:any, record:any) => {
    return(
      <span>
        {record.bals.map((e:any,i:number) => (
          <span key={i}>
            <span>{e.assid} - {e.bal}</span>
            <Divider type="vertical" />
          </span>
        ))}
        
        {/* <a href="javascript:;">{record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;" onClick={caoAction.bind(record)}>Delete</a>
        <Divider type="vertical" />
        <a href="javascript:;" className="ant-dropdown-link">
          More actions <Icon type="down" />
        </a> */}
      </span>
    )
  },
}];
// function caoAction(this:any, e:any){
//   console.log(this, e);
// }
// const caoAction = (e:any) => {
//   const self:any = this;
//   console.dir(self);
// }


class PageIn extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
    this.state = {
    };
  }
  public componentDidMount(){
    this.props.actions.demo();
  }
  public render() {
    const accountListByPair = this.props.accountListByPair;
    accountListByPair.forEach((e:any, i:number) => {
      e.key = i;
    });

    // const data = [{
    //   key: '1',
    //   name: 'John Brown',
    //   age: 32,
    //   address: 'New York No. 1 Lake Park',
    // }, {
    //   key: '2',
    //   name: 'Jim Green',
    //   age: 42,
    //   address: 'London No. 1 Lake Park',
    // }, {
    //   key: '3',
    //   name: 'Joe Black',
    //   age: 32,
    //   address: 'Sidney No. 1 Lake Park',
    // }];


    return (
      <div className="App">
        <Table columns={columns} dataSource={accountListByPair} />
        <Button type="primary">Button</Button>
      </div>
    );
  }
}
// export default PageIn;


function mapStateToProps (state:any) {
  return {
    accountListByPair: state.demoReducer.account_list_by_pair || []
  }
}
function mapDispatchToProps (dispatch?:any) {
  // const actions = Object.assign(productAction, policyPlanAction)
  return {
    actions: bindActionCreators(demoAction, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageIn)