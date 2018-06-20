import { Link } from 'react-router-dom';
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


class Detail extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
    this.state = {
      // id: this.props.match.params
    };
  }
  public componentDidMount(){
    this.props.actions.demo(this.props.match.params);
    // this.props.actions.compare(this.props.match.params);
  }
  public render() {
    const accountListByPair = this.props.accountListByPair || [];
    accountListByPair.forEach((e:any, i:number) => {
      e.key = i;
    });
    let footStr:string = '';
    const totalAmount = this.props.totalAmount || [];
    totalAmount.forEach((e:any, i:number) => {
      console.log(e)
      footStr += `${e.assid} -  ${e.bal} ; `
    });
    return (
      <div className="App">
        <Link to={`/`}>back_to_index</Link>
        <Table 
          columns={columns} 
          dataSource={accountListByPair} 
          footer={() => footStr}
        />
        
      </div>
    );
  }
}
// export default PageIn;


function mapStateToProps (state:any) {
  return {
    accountListByPair: state.demoReducer.account_list_by_pair || [],
    totalAmount: state.demoReducer.totalAmount || []
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
)(Detail)