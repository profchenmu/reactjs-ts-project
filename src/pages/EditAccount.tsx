import * as React from 'react';
import { Form, Input, Button } from 'antd';
import * as getTradingPairFormAction from 'src/actions/getTradingPairFormAction.js'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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
  public state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  public componentDidMount(){
    this.props.actions.getTradingPairForm(this.props.match.params)
  }
  public handleSubmit = (e:any) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err:any, values:any) => {
      if (!err) {
        // console.log(this.props.tradingForm)
        values.id = this.props.tradingForm.id
        this.props.actions.postTradingPairForm(values)
        // console.log('Received values of form: ', values);
      }
    });
  }
  public cancel = () => {
    this.props.history.push(`/`)
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
  public componentWillReceiveProps(n:any){
    if(n.success === 0){
      this.props.history.push(`/`);
    }
  }
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
    const { tradingForm } = this.props;
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
            initialValue: tradingForm.asset1
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
            initialValue: tradingForm.asset2
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="weight"
        >
          {getFieldDecorator('weight', {
            // rules: [{
            //   // type: 'number', message: 'The input is not valid number!',
            // }, {
            //   // required: true, message: 'Please input your E-mail!',
            // }],
            initialValue: tradingForm.weight
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="expiration_in_sec"
        >
          {getFieldDecorator('expiration_in_sec', {
            // rules: [{
            //   // type: 'number', message: 'The input is not valid number!',
            // }, {
            //   // required: true, message: 'Please input your E-mail!',
            // }],
            initialValue: tradingForm.expiration_in_sec
          })(
            <Input />
          )}
        </FormItem>
        
        <FormItem
          {...formItemLayout}
          label="order_amount"
        >
          {getFieldDecorator('order_amount', {
            // rules: [{
            //   // type: 'number', message: 'The input is not valid number!',
            // }, {
            //   // required: true, message: 'Please input your E-mail!',
            // }],
            initialValue: tradingForm.order_amount
          })(
            <Input 
              // onChange={(value:any) => `${value}%`}
            />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="amount_floating"
        >
          {getFieldDecorator('amount_floating', {
            // rules: [{
            //   // type: 'number', message: 'The input is not valid number!',
            // }, {
            //   // required: true, message: 'Please input your E-mail!',
            // }],
            initialValue: tradingForm.amount_floating
          })(
            <Input 
              onChange={(value:any) => `${value}%`}
            />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="max_position_percentage"
        >
          {getFieldDecorator('max_position_percentage', {
            // rules: [{
            //   // type: 'number', message: 'The input is not valid number!',
            // }, {
            //   // required: true, message: 'Please input your E-mail!',
            // }],
            initialValue: tradingForm.max_position_percentage
          })(
            <Input 
              // onChange={(value:any) => `${value}%`}
            />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="price_nag_floating"
        >
          {getFieldDecorator('price_nag_floating', {
            // rules: [{
            //   // type: 'number', message: 'The input is not valid number!',
            // }, {
            //   // required: true, message: 'Please input your E-mail!',
            // }],
            initialValue: tradingForm.price_nag_floating
          })(
            <Input 
              // onChange={(value:any) => `${value}%`}
            />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="price_pos_floating"
        >
          {getFieldDecorator('price_pos_floating', {
            // rules: [{
            //   // type: 'number', message: 'The input is not valid number!',
            // }, {
            //   // required: true, message: 'Please input your E-mail!',
            // }],
            initialValue: tradingForm.price_pos_floating
          })(
            <Input 
              // onChange={(value:any) => `${value}%`}
            />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="lower"
        >
          {getFieldDecorator('lower', {
            // rules: [{
            //   // type: 'number', message: 'The input is not valid number!',
            // }, {
            //   // required: true, message: 'Please input your E-mail!',
            // }],
            initialValue: tradingForm.lower
          })(
            <Input 
              disabled={tradingForm.need_cancel}
              // onChange={(value:any) => `${value}%`}
            />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="upper"
        >
          {getFieldDecorator('upper', {
            // rules: [{
            //   // type: 'number', message: 'The input is not valid number!',
            // }, {
            //   // required: true, message: 'Please input your E-mail!',
            // }],
            // initialValue: tradingForm.upper,
            initialValue: tradingForm.upper
          })(
            <Input 
              disabled={tradingForm.need_cancel}
              // onChange={(value:any) => `${value}%`}
            />
          )}
        </FormItem>
        {/* <FormItem
          {...formItemLayout}
          label="amount"
        >
          {getFieldDecorator('amount', {
            initialValue: '100'
          })(
            <InputNumber
              min={0}
              max={100}
              formatter={value => `${value}%`}
              parser={(value:any) => value.replace('%', '')}
              // onChange={onChange}
            />
          )}
        </FormItem> */}
        
        {/* <FormItem {...formItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
          )}
        </FormItem> */}
        {/* <FormItem {...formItemLayout}> */}
          <Button onClick={this.cancel}>Cancel</Button>
          <Button type="primary" htmlType="submit">submit</Button>
        {/* </FormItem> */}
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

// export default WrappedRegistrationForm;

function mapStateToProps (state:any) {
  console.log(state)
  return {
    success: state.postTradingPairFormReducer.success,
    tradingForm: state.getTradingPairFormReducer || {}
  }
}
function mapDispatchToProps (dispatch?:any) {
  // const actions = Object.assign(productAction, policyPlanAction)
  return {
    actions: bindActionCreators(getTradingPairFormAction, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedRegistrationForm)