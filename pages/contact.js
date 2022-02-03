import React from 'react';
import { Container, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'


const Contact = () => {
    return (
        <Container>
         <Heading as="h3" fontSize={20} mb={4} mt={4} textUnderlineOffset="3px"
            textDecorationLine="underline "
            text-decoration-color={useColorModeValue(
              'whiteAlpha.500',
              'whiteAlpha.200'
            )}>
          Projects / Collaborations
        </Heading>
  
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          
          <Section>
            
             A responsive website coded in React.js, using the API of the strasbourg company of transport (CTS) to help people getting informations about transportation in Strasbourg and/or other useful informations like parkings location or tickets point of sales, in an easily usable and fast way
            
          </Section>
  
          <Section delay={0.1}>
            
              An app coded in React Native with a real customer, API AWS serverless for the back, this app was made to help people travelling across the world with useful medical informations of many sorts
           
          </Section>
          <Section>
            
              A Static html/css site first project after just 3 weeks of studying
            
          </Section>
        </SimpleGrid> 
  
        
      </Container>
    );
};

export default Contact;