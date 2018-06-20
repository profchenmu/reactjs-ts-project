import * as React from 'react';
// import { Form, Input, Button, Checkbox } from 'antd';
import * as addTradingPairAction from 'src/actions/addTradingPairAction.js'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddTradingForm from './AddTradingPairComponent';
// import { InputNumber, Checkbox } from 'antd';
// const FormItem = Form.Item;
// const Option = Select.Option;
// const AutoCompleteOption = AutoComplete.Option;

// const residences = [{
//   value: 'zhejiang',
//   label: 'Zhejiang',
//   children: [{
//     value: 'hangzhou',
//     label: 'Hangzhou',
//     children: [{
//       value: 'xihu',
//       label: 'West Lake',
//     }],
//   }],
// }, {
//   value: 'jiangsu',
//   label: 'Jiangsu',
//   children: [{
//     value: 'nanjing',
//     label: 'Nanjing',
//     children: [{
//       value: 'zhonghuamen',
//       label: 'Zhong Hua Men',
//     }],
//   }],
// }];

class WrappedRegistrationForm extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
    this.state = {
      // confirmDirty: false,
      // autoCompleteResult: [],
    };
  }
  // public handleSubmit = (e:any) => {
  //   e.preventDefault();
  //   this.props.form.validateFieldsAndScroll((err:any, values:any) => {
  //     if (!err) {
  //       this.props.actions.addTradingPair(values);
  //       // console.log('Received values of form: ', values);
  //     }
  //   });
  // }
  // public cancel = () => {
  //   this.props.history.push(`/`)
  // }

 
  // public handleConfirmBlur = (e:any) => {
  //   const value = e.target.value;
  //   this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  // }
  // public compareToFirstPassword = (rule:any, value:any, callback:any) => {
  //   const form = this.props.form;
  //   if (value && value !== form.getFieldValue('password')) {
  //     callback('Two passwords that you enter is inconsistent!');
  //   } else {
  //     callback();
  //   }
  // }
  // public validateToNextPassword = (rule:any, value:any, callback:any) => {
  //   const form = this.props.form;
  //   if (value && this.state.confirmDirty) {
  //     form.validateFields(['confirm'], { force: true });
  //   }
  //   callback();
  // }
  // public handleWebsiteChange = (value:any) => {
  //   let autoCompleteResult:any;
  //   if (!value) {
  //     autoCompleteResult = [];
  //   } else {
  //     autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
  //   }
  //   this.setState({ autoCompleteResult });
  // }
  public formCancel = () => {
    this.props.history.push(`/`)
  }
  public componentWillReceiveProps(n:any){
    if(n.success===0){
      this.props.history.push(`/`)
    }
  }
  public formSubmit = (data:any) => {
    this.props.actions.addTradingPair(data);
  }
  public render() {
    return (
      <div>
        <AddTradingForm 
          formCancel={this.formCancel}
          formSubmit={this.formSubmit}
        />
      </div>
    );
  }
}

// export default WrappedRegistrationForm;

function mapStateToProps (state:any) {
  return {
    success: state.addTradingPairReducer.success
  }
}
function mapDispatchToProps (dispatch?:any) {
  // const actions = Object.assign(productAction, policyPlanAction)
  return {
    actions: bindActionCreators(addTradingPairAction, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedRegistrationForm)