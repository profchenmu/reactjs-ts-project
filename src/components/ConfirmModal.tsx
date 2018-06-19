import * as React from 'react';
import { Modal, Button } from 'antd';
// import * as moment from 'moment'
// const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

// function onChange(date, dateString) {
//   console.log(date, dateString);
// }



class TimePickerModal extends React.Component<any, any> {
  
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
  public handleOk = () => {
    // const dateTime = new Date(`${this.state.date}T${this.state.time}`).getTime()/1000;
    // console.log(dateTime);
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 300);
    alert(this.props.confirmData)
  }
  public handleCancel = () => {
    this.setState({ visible: false });
  }
  public dateChange = (date:any, dateString:any) => {
    this.setState({date: dateString})
  }
  public timeChange = (date:any, dateString:any) => {
    this.setState({time: dateString})
  }
  public render() {
    const { visible, loading } = this.state;
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
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Confirm
            </Button>,
          ]}
        >
        <div>
          {this.props.confirmData}
        </div>
        </Modal>
      </div>
    );
  }
}
export default TimePickerModal;