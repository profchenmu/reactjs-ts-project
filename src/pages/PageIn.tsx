import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider';
// import Icon from 'antd/lib/icon';
import Table from 'antd/lib/table';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TimePickerModal from 'src/components/TimePickerModal';
import ConfirmModal from 'src/components/ConfirmModal';
import * as React from 'react';
import * as allPairsAction from 'src/actions/allPairsAction.js';
import * as initAction from 'src/actions/initAction.js';

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
      showTimePickerModal: false,
      showConfirmModal: false,
      confirmData: '',
      comfirmRecord: {}
      // showConfirmTransInModal: false
    };
  }
  public componentDidMount(){
    this.props.actions.allPairs();
    this.props.actions.init();
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
            <a href="javascript:;" onClick={this.showConfirmModal.bind(this, 'trans_out', record)}>Transfor_out</a>
            <Divider type="vertical" />
            <a href="javascript:;" onClick={this.showConfirmModal.bind(this, 'trans_in', record)}>Transfor_in</a>
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
  public showConfirmModal(data?:any, record?:any){
    this.setState({showConfirmModal: true, confirmData: data, comfirmRecord: record})
  }
  // public showConfirmTransInModal(){
  //   this.setState({showConfirmTransOutModal: true})
  // }
  public caoAction(this:any, record:any, e:any){
    this.setState({showTimePickerModal: true, hotId: record.id})
    // console.log(this, record, e);
    
  }
  public addTradingPair = () => {
    this.props.history.push(`/addtradingpair`)
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
  public toTransOut(){
    alert('transOut')
  }
  public toTransIn(){
    alert('transIn')
  }
  public render() {
    const tradingPairs = this.props.tradingPairs;
    tradingPairs.forEach((e:any, i:number) => {
      e.key = i;
    });
    return (
      <div className="App">
        <Button type="primary" onClick={this.addTradingPair}>Add</Button>
        <Table columns={this.columns()} dataSource={tradingPairs} />
        <ConfirmModal 
          showConfirmModal={this.state.showConfirmModal}
          confirmData={this.state.confirmData}
          cancelCb={()=>{this.setState({
            showConfirmModal: false,
          })}}
          comfirmRecord={this.state.comfirmRecord}
          // cb={this.toTransOut}
        />
        {/* <ConfirmModal 
          showConfirmModal={this.state.ConfirmTransInModal}
          cb={this.toTransIn}
        /> */}
        <TimePickerModal 
          showTimePickerModal={this.state.showTimePickerModal}
          cb={this.toCompare}
          cancelCb={()=>{this.setState({
            showTimePickerModal: false,
          })}}
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
  const actions = Object.assign(allPairsAction, initAction)
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageIn)