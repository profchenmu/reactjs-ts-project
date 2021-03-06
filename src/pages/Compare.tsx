import { Link } from 'react-router-dom';
import Divider from 'antd/lib/divider';
// import Icon from 'antd/lib/icon';
import Table from 'antd/lib/table';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import * as compareAccountListByPairAction from 'src/actions/compareAccountListByPairAction.js';
import './Compare.less';
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
    this.props.actions.compareAccountListByPair(this.props.match.params);
  }
  public render() {
    const compareDatas = this.props.compareDatas;
    let accountListByPair0 = [];
    let accountListByPair1 = [];
    let footStr0 = '';
    let footStr1 = '';
    
    if(compareDatas.length>0){
      accountListByPair0 = compareDatas[0].account_list_by_pair||[];
      accountListByPair1 = compareDatas[1].account_list_by_pair||[];
      accountListByPair0.forEach((e:any, i:number) => {
        e.key = i;
      });
      accountListByPair1.forEach((e:any, i:number) => {
        e.key = i;
      });
      const totalAmount0 = compareDatas[0].totalAmount || [];
      const totalAmount1 = compareDatas[1].totalAmount || [];
      totalAmount0.forEach((e:any, i:number) => {
        footStr0 += `${e.assid} -  ${e.bal} ; `
      });
      totalAmount1.forEach((e:any, i:number) => {
        footStr1 += `${e.assid} -  ${e.bal} ; `
      });
    }

    // const totalAmount = this.props.totalAmount || [];
    // totalAmount.forEach((e:any, i:number) => {
    //   console.log(e)
    //   footStr += `${e.assid} -  ${e.bal} ; `
    // });
    

    return (
      <div className="App">
      <div>
        <Link to={`/`}>back_to_index</Link>
        </div>
        <div className="compare-in">
        <p>{accountListByPair0.ts}</p>
        <Table columns={columns} dataSource={accountListByPair0} footer={() => footStr0}/>
        </div>
        <div className="compare-in">
        <p>{accountListByPair1.ts}</p>
        <Table columns={columns} dataSource={accountListByPair1} footer={() => footStr1}/>
        </div>
      </div>
    );
  }
}
// export default PageIn;


function mapStateToProps (state:any) {
  console.log(state)
  return {
    compareDatas: state.compareAccountListByPairReducer.compareDatas || []
  }
}
function mapDispatchToProps (dispatch?:any) {
  // const actions = Object.assign(productAction, policyPlanAction)
  return {
    actions: bindActionCreators(compareAccountListByPairAction, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)