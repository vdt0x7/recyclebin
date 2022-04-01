import React from 'react'
import {Form,Input,Button} from 'antd'
 const UserForm = () => {
  return (
    <div className='user-form'>
        <Form labelWrap wrapperCol={{ flex: '250px' }}  labelCol={{ flex: '150px' }}  labelAlign="left" >
            <Form.Item label="User email" name="useremail">
              <Input type="email"></Input>
            </Form.Item>
            <Form.Item label="New password" name="newpassword">
            <Input type="password"/>
            </Form.Item>
            <Form.Item label="Old password" name="oldpassword">
              <Input type="password"/>
            </Form.Item>
            <Form.Item label="Re-Enter Password" name="reenterpassword">
               <Input type="password"/>
            </Form.Item>
               <Button type="primary" >Submit</Button>
        </Form>
    </div>
  )
}
export default UserForm
