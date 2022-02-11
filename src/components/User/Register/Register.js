import { useState } from "react"
import { connect } from "react-redux";
import { register } from '../../../redux/actions/userActions';
import { content, validationMessages } from "../FormsContent";
import { Form, Input, Typography, Button } from 'antd';

function Register({ language }) {
  const messagesForRequiredFields = validationMessages.required[language];
  const [registerFormData, setRegisterFormData] = useState({
    email: null,
    mobilePhone: null,
    firstName: null,
    lastName: null,
    firstNameBG: null,
    lastNameBG: null,
  })

  function onChangeInput(ev) {
    setRegisterFormData(prevState => ({
      ...prevState,
      [ev.target.name]: ev.target.value
    }));
    console.log(registerFormData)
  }

  function submitRegistration(ev) {
    ev.preventDefault();
    console.log(registerFormData)
  }

  return (
    <div className='form-container'>
      <Typography.Title className='text-center'>{content[language].registerFormTitle}</Typography.Title>
      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} layout="horizontal" size="large">
        <Form.Item label={content[language].emailLabel} >
          <Input  placeholder="example@gmail.com" typeof="email" value={registerFormData.email} onChange={onChangeInput} name="email" />
        </Form.Item>
        <Form.Item label={content[language].mobilePhoneLabel} rules={[{ required: true, message: messagesForRequiredFields.mobilePhone }]} >
          <Input placeholder='8548523324' value={registerFormData.mobilePhone} onChange={onChangeInput} name="mobilePhone"/>
        </Form.Item>
        <Form.Item label={content[language].firstNameLabel} rules={[{ required: true, message: messagesForRequiredFields.title }]}>
          <Input placeholder="Petar" value={registerFormData.firstName} onChange={onChangeInput} name="firstName"/>
        </Form.Item>
        <Form.Item label={content[language].lastNameLabel} rules={[{ required: true, message: messagesForRequiredFields.title }]}>
          <Input placeholder="Petrov" value={registerFormData.lastName} onChange={onChangeInput} name="lastName"/>
        </Form.Item>
        <Form.Item label={content[language].firstNameBGLabel} >
          <Input placeholder="Петър" value={registerFormData.firstNameBG} onChange={onChangeInput} name="firstNameBG"/>
        </Form.Item>
        <Form.Item label={content[language].lastNameBGLabel} >
          <Input placeholder="Петров" value={registerFormData.lastNameBG} onChange={onChangeInput} name="lastNameBG"/>
        </Form.Item>
        <Button htmlType='button' type='primary' block onClick={submitRegistration}>{content[language].registerFormTitle}</Button>
      </Form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = {
  register,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);