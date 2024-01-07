import React from 'react';
import styled from 'styled-components';
import "./App.css";

function NewsLetter() {
  return (
    <News>
      <br />
      <br />
      <h1 className='heading-h1'><b>Connect with us</b></h1>
      <p style={{ marginTop: 10 }}>Enter your email address to contact us!</p>

      <Input type="email" placeholder='Email' />
      <br />
      <br />
      <Button>Send</Button>
      <br />
      <br />
      <br />
      <Connect>
        <h3><b>Connect with us</b></h3>
        <SocialLinks>
          <SocialLink href='https://www.instagram.com/' target='_blank'><img src='https://th.bing.com/th/id/OIP.OaA1UyS1Zq3dW4ztbuK9EgHaHW?rs=1&pid=ImgDetMain' alt='Instagram' /></SocialLink>
          <SocialLink href='https://twitter.com/i/flow/login' target='_blank'><img src='https://th.bing.com/th/id/OIP.PSj_SQum7CH01WhmY2kFcAHaHx?rs=1&pid=ImgDetMain' alt='Twitter' /></SocialLink>
          <SocialLink href='https://in.linkedin.com/' target='_blank'><img src='https://th.bing.com/th/id/OIP.aYVbqEFb2M-SWsBh_LafIQHaHa?rs=1&pid=ImgDetMain' alt='LinkedIn' /></SocialLink>
        </SocialLinks>
      </Connect>
      <br />
      <br />
      <br />
    </News>
  );
}

export default NewsLetter;

const News = styled.div`
  background-color: rgb(1, 50, 32, 0.2);
`;

const Input = styled.input`
  width: 740px;
  height: 40px;
  margin-top: 10px;
`;

const Button = styled.button`
  height: 30px;
  width: 70px;
  background: rgb(1, 50, 32, 0.8);
  color: white;
`;

const Connect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left:150px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  margin-left: 10px;
  img {
    width: 40px;
    height: 40px;
  }
`;
