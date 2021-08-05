import styled from 'styled-components'

export const Container = styled.div`
  color: #fff;
  height: 60px;
  display: flex;
  padding: 0 30px;
  background: ${props => props.theme.colors.primary};
  width: 50%;
  height: 500px;
  margin-top: 12.5%;
  margin-left: 25%;
  border-radius: 35px;
`

export const ContainerInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 150px;
  width: 100%;
`

export const Title = styled.p`
  font-size: 50px;
  margin-left: 37%;
  margin-top: 40px;
  margin-bottom: -90px;
`
