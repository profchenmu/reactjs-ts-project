import * as React from 'react';
import { Modal, Button } from 'antd';
import { Input } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as transferOut from 'src/actions/transfer.js';
// import * as moment from 'moment'
// const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

// function onChange(date, dateString) {
//   console.log(date, dateString);
// }



class ConfirmModal extends React.Component<any, any> {
  
  constructor(props:any) {
    super(props);
    this.state = {
      loading: false,
      visible: this.props.showConfirmModal,
    };
  }
  public componentWillReceiveProps(n:any){
    this.setState({
      visible: n.showConfirmModal
    })
  }
  public showModal = () => {
    this.setState({
      visible: true,
    });
  }
  public handleOk(){
    // const dateTime = new Date(`${this.state.date}T${this.state.time}`).getTime()/1000;
    // console.log(dateTime);
    // console.log(this.refs.assetName);
    const assetName:any = this.refs.assetName;
    const { comfirmRecord } = this.props;
    const confirmData = this.props.confirmData;
    const data:any = {TradingPairId: comfirmRecord.id, assetName: assetName.input.value, confirmData};
    if(confirmData === 'trans_in'){
      const totalAmount:any = this.refs.totalAmount;
      data.totalAmount = totalAmount.input.value;
    }
    this.props.actions.postTransfer(data);

    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 300);
    
  }
  public handleCancel = () => {
    this.setState({ visible: false });
    this.props.cancelCb();
  }
  public dateChange = (date:any, dateString:any) => {
    this.setState({date: dateString})
  }
  public timeChange = (date:any, dateString:any) => {
    this.setState({time: dateString})
  }
  public render() {
    const { visible, loading } = this.state;
    console.log(this.props.comfirmRecord)
    const { comfirmRecord } = this.props;
    return (
      <div>
        {/* <Button type="primary" onClick={this.showModal}>
          Open
        </Button> */}
        <Modal
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk.bind(this)}>
              Confirm
            </Button>,
          ]}
        >
        <div>
          action - {this.props.confirmData} <br />
          pair_id - {comfirmRecord.id} <br />
          <div>assetName - <Input ref={`assetName`} /></div>
          {this.props.confirmData === 'trans_in'?
            (<div>totalAmount - <Input ref={`totalAmount`} /></div>)
          :null}
        </div>
        </Modal>
      </div>
    );
  }
}
// export default ConfirmModal;

function mapStateToProps (state:any) {
  console.log(state)
  return {
    // tradingPairs: state.allPairsReducer.tradingPairs || []
  }
}
function mapDispatchToProps (dispatch?:any) {
  // const actions = Object.assign(productAction, policyPlanAction)
  return {
    actions: bindActionCreators(transferOut, dispatch)
  }
}

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmModal)