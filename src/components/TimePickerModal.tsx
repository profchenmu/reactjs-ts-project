import * as React from 'react';
import { Modal, Button, DatePicker, TimePicker } from 'antd';
import * as moment from 'moment'
// const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

// function onChange(date, dateString) {
//   console.log(date, dateString);
// }



class TimePickerModal extends React.Component<any, any> {
  
  constructor(props:any) {
    super(props);
    const date = new Date();
    this.state = {
      loading: false,
      visible: this.props.showTimePickerModal,
      date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
      time: `00:00:00`
    };
  }
  public componentWillReceiveProps(n:any){
    this.setState({
      visible: n.showTimePickerModal
    })
  }
  public showModal = () => {
    this.setState({
      visible: true,
    });
  }
  public handleOk = () => {
    const dateTime = new Date(`${this.state.date}T${this.state.time}`).getTime()/1000;
    // console.log(dateTime);
    this.props.cb(dateTime)
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 300);
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
              Submit
            </Button>,
          ]}
        >
          <div>
            <DatePicker onChange={this.dateChange} />
            <TimePicker onChange={this.timeChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
          </div>
        </Modal>
      </div>
    );
  }
}
export default TimePickerModal;