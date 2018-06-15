import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider';
// import Icon from 'antd/lib/icon';
import Table from 'antd/lib/table';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TimePickerModal from 'src/components/TimePickerModal';
import * as React from 'react';
import * as allPairsAction from 'src/actions/allPairsAction.js';

// const Column = Table.Column;



// const public caoAction = (this:any, e:any) => {
//   // const self:any = this;
//   console.log(this, e);
// }


class PageIn extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
    this.state = {
      hotId: 1,
      showTimePickerModal: false
    };
  }
  public componentDidMount(){
    this.props.actions.allPairs();
  }
  public columns(){
    return [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text:any, record:any) => {
        return(<span><a href="javascript:;">{record.asset1} - {record.asset1}</a></span>)
      }
    }, {
      title: 'Detail',
      key: 'detail',
      render: (text:any, record:any) => {
        return(
          <span>
              <span>amount_floating - {record.amount_floating}</span>
              <br />
              <span>expiration_in_sec - {record.expiration_in_sec}</span>
              <br />
              <span>max_position_percentage - {record.max_position_percentage}</span>
              <br />
              <span>need_cancel - {record.need_cancel?'true':'false'}</span>
              <br />
              <span>order_amount - {record.order_amount}</span>
              <br />
              <span>price_nag_floating - {record.price_nag_floating}</span>
              <br />
              <span>price_pos_floating - {record.price_pos_floating}</span>
              <br />
              <span>upper - {record.upper}</span>
              <br />
              <span>weight - {record.weight}</span>
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
    }, {
      title: 'Action',
      key: 'action',
      render: (text:any, record:any) => {
        return(
          <span>
            <a href="javascript:;">Transfor_out</a>
            <Divider type="vertical" />
            <a href="javascript:;">Transfor_in</a>
            <Divider type="vertical" />
            <a href="javascript:;" onClick={this.caoAction.bind(this, record)}>Compare</a>
            <Divider type="vertical" />
            <Link to={`/editaccount/${record.id}`}>Edit</Link>
            {/* <a href="javascript:;" onClick={this.editAction.bind(this, record)}>Edit</a> */}
            <Divider type="vertical" />
            <Link to={`/detail/${record.id}`}>Detail</Link>
            {/* <a href="javascript:;" className="ant-dropdown-link">
              More actions <Icon type="down" />
            </a> */}
          </span>
        )
      },
    }]
  }
  public caoAction(this:any, record:any, e:any){
    this.setState({showTimePickerModal: true, hotId: record.id})
    // console.log(this, record, e);
    
  }
  public addAccount = () => {
    this.props.history.push(`/addaccount`)
  }
  // public editAction(this:any, record:any, e:any){
  //   this.props.history.push(`/editaccount/${record.id}`)
  // }
  public toCompare = (ts:any) => {
    // const data = {
    //   pair_id:this.state.hotId,
    //   ts
    // }
    this.props.history.push(`/compare/${this.state.hotId}/${ts}`);
  }
  public render() {
    const tradingPairs = this.props.tradingPairs;
    tradingPairs.forEach((e:any, i:number) => {
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

    console.log(this.state)
    return (
      <div className="App">
        <Button type="primary" onClick={this.addAccount}>Add</Button>
        <Table columns={this.columns()} dataSource={tradingPairs} />
        <TimePickerModal 
          showTimePickerModal={this.state.showTimePickerModal}
          cb={this.toCompare}
        />
      </div>
    );
  }
}
// export default PageIn;


function mapStateToProps (state:any) {
  console.log(state)
  return {
    tradingPairs: state.allPairsReducer.tradingPairs || []
  }
}
function mapDispatchToProps (dispatch?:any) {
  // const actions = Object.assign(productAction, policyPlanAction)
  return {
    actions: bindActionCreators(allPairsAction, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageIn)