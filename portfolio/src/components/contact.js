import React, { useState } from "react";
import styled from "styled-components";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tilt } from "react-tilt";

const Ground = styled.div`
  height: 87vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) {
    height: 200vh;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
  margin-top:80%;
    flex-direction: column;
    width: 90vh;
    z-index:-1;
  }
`;

const ContactForm = styled.form`
  background: linear-gradient(#dceaea, #d4d9b0, #f8dec7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid grey;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  width: 90vh;
  height: 55vh;
  border-radius: 40px;
  padding: 40px;
  z-index: 1;
  @media (max-width: 480px) {
    width: 35vh;
    height: 70vh;
    margin-bottom: 80vh;
    margin-left:0;
  }
`;

const FormTitle = styled.h3`
  text-align: center;
  font-family: "Satisfy", cursive;
  text-shadow: 10px 10px 10px #4a4a4a;
  font-weight: 600;
  font-style: normal;
  color: black;
  font-size: 42px;
  margin-bottom: 20px;
`;

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 7%;
`;

const InputIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  input {
    height: 30px;
    width: 65%;
    margin-top: 20px;
    margin-left: 30px;
    padding: 15px;
    border: 1px solid black;
    border-radius: 10px;
    font-size: 17px;
    font-weight: 700;
    padding-left: 60px;
  }
  svg {
    position: absolute;
    top: 60%;
    left: 45px;
    transform: translateY(-50%);
    color: #646465;
  }
  ::placeholder {
    font-family: "Dancing Script", cursive;
    font-size: 20px;
  }
    @media (max-width:480px){
      input{
        width:100%
        margin-right:20px;
      }
    }
`;

const TextArea = styled.textarea`
  margin-top: 20px;
  margin-left: 30px;
  border-radius: 20px;
  height: 95px;
  width: 72%;
  font-weight: 600;
  font-size: 0.9rem;
  padding-left: 40px;
  font-size: 17px;
  font-weight: 700;
  border: 1px solid black;
  &::placeholder {
    font-family: "Dancing Script", cursive;
    font-size: 20px;
  }
`;

const Support = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: -1;
`;

const SupportCard = styled.div`
  background-color: #05b3a5c6;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
  border: 2px solid rgb(124, 124, 124);
  border-radius: 16px;
  padding: 18px 36px;
  max-width: 500px;
  margin-top: 20px;
  width: 60%;
  margin-left: 60px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7);
  }

  @media (max-width:480px){
    width:150%;

  }
`;

const SupportTitle = styled.div`
  font-family: "Satisfy", cursive;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 480px) {
    font-size: 23px;
  }
`;

const SupportInfo = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: white;
  border: 1px solid white;
  border-radius: 12px;
  padding: 12px 16px;
  margin-bottom: 10px;
  display: flex;
  align-item: center;
  justify-content: center;
`;

const SubmitButton = styled.button`
  margin-top: 35px;
  display: grid;
  place-items: center;
  width: 110px;
  background-color: rgb(0, 115, 128);
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 20px;
  height: 50px;
  font-family: "Satisfy", cursive;
  font-size: 20px;
  font-weight: 400;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
  border: 1px solid rgb(1, 1, 1);

  &:hover {
    background-color: #ff0000;
    color: black;
  }
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const Content123Tn = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 70vh;
  margin-right: 30px;
  padding-bottom: 70px;
  border-radius: 10px;
  background: transparent;
  font-weight: 600;
  font-size: 7.5rem;
  font-family: "Lora", serif;
  z-index: -1;
  @media (max-width: 480px) {
    margin-left:-255px;
    top:40px;
    width: 50%;
    height: 100vh;
    z-index:-10;
    margin-top:290px;
  }
`;
const ContactInfo = styled.div`
  margin-right:55px;
  font-family: "Satisfy", cursive;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
  @media (max-width: 480px) {
    margin-left:150px;
    font-family: "Satisfy", cursive;
    width:100%;
    font-size: 23px;
    z-index:-1;
  }

`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gtz8znf",
        "template_qcltqy2",
        e.target,
        "WHVDoLNCZ01fkh6s0"
      )
      .then(
        (result) => {
          toast.success("Email sent successfully!!!");
          setFormData({
            name: "",
            email: "",
            mobileNumber: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <Ground>
      <ContactContainer>
        <Content123Tn>
          <ContactInfo>Contact Information</ContactInfo>
          <Tilt>
            <SupportCard>
              <SupportTitle>Address</SupportTitle>
              <SupportInfo>
                <Img src="https://cdn-icons-png.flaticon.com/512/6614/6614958.png" />
                Kinathukadavu,Coimbatore-642109
              </SupportInfo>
            </SupportCard>
          </Tilt>
          <Tilt>
            <SupportCard>
              <SupportTitle>Mobile Number</SupportTitle>
              <SupportInfo>
                <Img src="https://cdn4.iconfinder.com/data/icons/social-media-2097/94/phone-512.png" />
                +91 - 9500335440
              </SupportInfo>
            </SupportCard>
          </Tilt>
          <Tilt>
            <SupportCard>
              <SupportTitle>Email</SupportTitle>
              <SupportInfo>
                <Img src="https://imaginethatcreative.net/blog/wp-content/uploads/2023/06/2250206.png" />
                pravin4893@gmail.com
              </SupportInfo>
            </SupportCard>
          </Tilt>
          <Tilt>
            <SupportCard>
              <SupportTitle>Website</SupportTitle>
              <SupportInfo>
                <Img src="https://st.depositphotos.com/1005920/2437/i/450/depositphotos_24379131-stock-photo-earth-blue-circle-web-glossy.jpg" />
                pravins.vercel.app
              </SupportInfo>
            </SupportCard>
          </Tilt>
        </Content123Tn>
        <ContactForm onSubmit={handleSubmit}>
          <FormTitle>Get in touch</FormTitle>
          <InputFieldContainer>
            <InputIcon>
              <PersonIcon style={{ fontSize: "33px" }} />
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </InputIcon>
            <InputIcon>
              <EmailIcon style={{ fontSize: "33px" }} />
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </InputIcon>
            <InputIcon>
              <LocalPhoneIcon style={{ fontSize: "33px" }} />
              <input
                required
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="Mobile Number"
              />
            </InputIcon>
            <TextArea
              name="message"
              id="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="...how can we help?"
            />
          </InputFieldContainer>
          <Support>
            <SubmitButton type="submit">Send</SubmitButton>
          </Support>
        </ContactForm>
      </ContactContainer>
    </Ground>
  );
};

export default Contact;
