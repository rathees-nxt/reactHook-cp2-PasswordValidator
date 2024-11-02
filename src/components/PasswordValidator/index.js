// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  PasswordContainer,
  PasswordHeading,
  PasswordPara,
  Input,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const valid = password.length >= 8

  return (
    <MainContainer>
      <PasswordContainer>
        <PasswordHeading>Password Validator</PasswordHeading>
        <PasswordPara>
          check how strong and secure is your password
        </PasswordPara>
        <Input onChange={onChangePassword} type="password" />
        {!valid && (
          <PasswordPara para="para">
            Your password must be at least 8 characters
          </PasswordPara>
        )}
      </PasswordContainer>
    </MainContainer>
  )
}

export default PasswordValidator
