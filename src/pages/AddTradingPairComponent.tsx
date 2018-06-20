import * as React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
// import * as addTradingPairAction from 'src/actions/addTradingPairAction.js'; 
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { InputNumber, Checkbox } from 'antd';
const FormItem = Form.Item;
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

class RegistrationForm extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  }
  public handleSubmit = (e:any) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err:any, values:any) => {
      if (!err) {
        this.props.formSubmit(values);
        // console.log('Received values of form: ', values);
      }
    });
  }
  public cancel = () => {
    this.props.formCancel();
  }

 
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
  public render() {
    const { getFieldDecorator } = this.props.form;
    // const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    // const tailFormItemLayout = {
    //   wrapperCol: {
    //     xs: {
    //       span: 24,
    //       offset: 0,
    //     },
    //     sm: {
    //       span: 16,
    //       offset: 8,
    //     },
    //   },
    // };
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="baseName"
        >
          {getFieldDecorator('baseName', {
            // rules: [{
            //   // type: 'number', message: 'The input is not valid number!',
            // }, {
            //   // required: true, message: 'Please input your E-mail!',
            // }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="quoteName"
        >
          {getFieldDecorator('quoteName', {
            rules: [{
              // type: 'number', message: 'The input is not valid number!',
            }, {
              // required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="amount"
        >
          {getFieldDecorator('amount', {
            // rules: [{
            //   // type: 'number', message: 'The input is not valid number!',
            // }, {
            //   // required: true, message: 'Please input your E-mail!',
            // }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('cancel', {
            valuePropName: 'Y',
            // initialValue: true,
          })(
            <Checkbox>Cancel</Checkbox>
          )}
        </FormItem>
        
        {/* <FormItem {...formItemLayout}> */}
          <Button onClick={this.cancel}>cancel</Button>
          <Button type="primary" htmlType="submit">submit</Button>
        {/* </FormItem> */}
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;

// function mapStateToProps (state:any) {
//   return {
//     success: state.addTradingPairReducer.success || null
//   }
// }
// function mapDispatchToProps (dispatch?:any) {
//   // const actions = Object.assign(productAction, policyPlanAction)
//   return {
//     actions: bindActionCreators(addTradingPairAction, dispatch)
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(WrappedRegistrationForm)