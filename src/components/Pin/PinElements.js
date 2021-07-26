import styled from 'styled-components'

export const Wrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;
  
  img {
    width: 100%;
    display: flex;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
  }
`