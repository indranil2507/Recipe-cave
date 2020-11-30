import styled from 'styled-components'
import backimg from '../../images/login.svg'
import backimgtext from '../../images/Component3.svg' 
export const Wrapper = styled.div `
   display:flex;
   flex-direction:row
 `;
 export const LoginImage = styled.div `
    width:50vw;
    height:100vh;
   
    background:linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${backimg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

 `;
 export const LoginText= styled.div `
 width:50vw;
 height:100vh
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;
 text-align:center


 `;
 export const Heading= styled.div `
 margin-top:120px;
 margin-bottom:50px


 `;
 export const Form= styled.div `
 


 `;
 export const Input= styled.div `
 border-bottom: solid 1px #ff6347;
 padding: 20px 50px;
 margin: 0px 150px;
 color: #bdb9b9;
 display:flex;
 flex-direction:spaced;
 text-align:center;


 `;
 export const Forgotpassword= styled.div `
 text-align:left;
 color: #ff6347;
 margin:18px 150px;

 `;
 export const Button= styled.div `
    background-color:#ff6347;
    border-radius:30px;
    margin:50px 350px;
    height:50px;
    max-width:100px;
    color: #ffffff;
    padding: 10px 30px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:30px


 `;
 export const Inputimage= styled.div `
 padding-right:140px

 `;
 