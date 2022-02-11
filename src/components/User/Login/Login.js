import { useState } from "react"
import { connect } from "react-redux";
import { register } from '../../../redux/actions/userActions';
import { content, validationMessages } from "../FormsContent";
import { Form, Input, Typography, Button } from 'antd';

function Login({ language }) {
  const messagesForRequiredFields = validationMessages.required[language];
  const [loginFormData, setLoginFormData] = useState({
    email: null,
    password: null
  })

  function onChangeInput(ev) {
    setLoginFormData(prevState => ({
      ...prevState,
      [ev.target.name]: ev.target.value
    }));
  }

  function submitLogin(ev) {
    ev.preventDefault();
    console.log(loginFormData)
  }

  return (
    <div className='form-container'>
      <Typography.Title className='text-center'>{content[language].loginFormTitle}</Typography.Title>
      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} layout="horizontal" size="large">
        <Form.Item label={content[language].emailLabel} >
          <Input  placeholder="example@gmail.com" typeof="email" value={loginFormData.email} onChange={onChangeInput} name="email" />
        </Form.Item>
        <Form.Item label={content[language].passwordLabel} >
          <Input value={loginFormData.password} onChange={onChangeInput} name="password" type="password" />
        </Form.Item>
        <Button htmlType='button' type='primary' block onClick={submitLogin}>{content[language].loginFormTitle}</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
