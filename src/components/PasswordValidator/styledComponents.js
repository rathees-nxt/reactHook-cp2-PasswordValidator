// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PasswordContainer = styled.div`
  background-color: #383a4e;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
`

export const PasswordHeading = styled.h1`
  font-family: Roboto;
  font-weight: 600;
  font-size: 36px;
  color: #ffffff;
  margin: 0px;
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`

export const PasswordPara = styled.p`
  font-family: Roboto;
  font-weight: 500;
  font-size: ${props => (props.para ? '10px' : '12px')};
  color: ${props => (props.para ? '#ef4444' : '#f8fafc')};
`

export const Input = styled.input`
  margin: 30px 0px 0px;
  width: 250px;
  height: 30px;
  padding-left: 10px;
  outline: none;
  border: none;
`
