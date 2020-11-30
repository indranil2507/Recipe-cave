import React from 'react'
import {
    Wrapper,
    LoginImage,
    LoginText,
    Heading,
    Form,
    Input,
    Button,
    Forgotpassword,
    Inputimage

} from './LoginElement'
import title from '../../images/Recipe Cave.png'
import userid from '../../images/User Icon.svg'
import password from '../../images/Password Icon.svg'

const Login = () => {
    return (
        <>
        <Wrapper>
            <LoginImage>
                
            </LoginImage>
            <LoginText>
                <Heading>
                    <img src={title} alt="recipe cave"/>
                </Heading>
                <Form>
                    <Input>
                    <Inputimage><img src={userid} alt="recipe cave"/></Inputimage>
                    Email Id
                    </Input>
                    <Input>
                    <Inputimage><img src={password} alt="recipe cave"/></Inputimage>
                    Password
                    </Input>
                   <Forgotpassword>
                       Forgot Password?
                   </Forgotpassword>
                   
                    <Button>
                        Login
                    </Button>

                </Form>

            </LoginText>

        </Wrapper>
        </>
    )
}

export default Login
