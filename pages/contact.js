import React, { useState } from 'react'
import {
  Box,
  Container,
  useColorModeValue,
  Button,
  FormLabel,
  Textarea,
  Input,
  Heading,
  FormControl,
  FormHelperText,
  FormErrorMessage
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { useAlert } from 'react-alert'
import Section from '../components/section'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [inputEmail, setInputEmail] = useState('')
  const [inputMes, setInputMes] = useState('')
  const isErrorEmail = setInputEmail === ''
  const isErrorMes = inputMes === ' '
  const alert = useAlert()
  
  const handleSubmit = e => {
    e.preventDefault()
    console.log('Sending')
    let data = {
      name,
      email,
      message
    }
    fetch('/api/contactapi', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {
      console.log('Response received')
      if (res.status === 200) {
        alert.show('Message successfully sent')
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
      }
    })
  }

  return (
    <Layout>
      <Container>
      <Heading
            as="h3"
            variant="section-title"
            textUnderlineOffset="3px"
            textDecorationLine="underline "
            text-decoration-color={useColorModeValue(
              'whiteAlpha.500',
              'whiteAlpha.200'
            )}
            mb={7}
          >
            Contact me here :
          </Heading>
          <Section>
        <form onSubmit={handleSubmit} >
          
          <Box
          boxShadow= "rgba(0, 0, 0, 0.2) 0px 20px 30px;"
            borderRadius="lg"
            mt={2}
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            
          >
            <Section delay={0.1}>
            <FormLabel htmlFor="name" mt={2} ml={2}>
              Name:
            </FormLabel>
            <Input
              type="text"
              id="name"
              required
              placeholder="Name.."
              onChange={e => {
                setName(e.target.value)
              }}
            />
           </Section>
           <Section delay={0.2}>
           <FormControl isInvalid={isErrorEmail} isRequired>
            <FormLabel htmlFor="email" mt={2} ml={2}>
              Email:
            </FormLabel>
            <Input
              type="email"
              id="email"
              placeholder="Email.."
              onChange={e => {
                setEmail(e.target.value); setInputEmail(e.target.value)
              }}
            />
            {!isErrorEmail ? (
        <FormHelperText>
          Enter the email you'd like to contact me with.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>
            </Section>
            <Section delay={0.3}>
            <FormControl isInvalid={isErrorMes}>
            <FormLabel htmlFor="message" mt={2} ml={2}>
              Message:
            </FormLabel>
            <Textarea
              id="message"
              required
              onChange={e => {
                setMessage(e.target.value);setInputMes(e.target.value)
              }}
            />
            {!isErrorMes ? (
        <FormHelperText>
          Enter your message.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Message is required.</FormErrorMessage>
      )}
            </FormControl>
            </Section>
            <Section delay={0.5} >
            <Button type="submit"  mt={6} mb={2} onClick={(e)=>{handleSubmit(e)}}>
              Submit
            </Button>
            </Section>
          </Box>
         
        </form>
        </Section>
      </Container>
    </Layout>
  )
}

export default Contact
