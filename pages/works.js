import { Container, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbFives from '../public/images/works/Captureprojet1.png'
import thumbStraffic from '../public/images/works/Captureprojet2.png'
import thumbDrbonvoyage from '../public/images/works/Captureprojet3test.png'
import thumbYogaDanse from "../public/images/works/Captureprojet4test.png"
import thumbEcommerce from "../public/images/works/Captureprojet5.png"
import thumbYoutubeclone from "../public/images/works/Captureprojet6.png"
import thumbMesmoires from "../public/images/works/Captureprojet7.png"
import Layout from '../components/layouts/article'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={7} mt={4} textUnderlineOffset="3px"
          textDecorationLine="underline "
          text-decoration-color={useColorModeValue(
            'whiteAlpha.500',
            'whiteAlpha.200'
          )}>
        Projects / Collaborations
      </Heading>

      <SimpleGrid columns={[1, 1, 1]} gap={6} textAlign='start'>
     <Section>
          <WorkGridItem
            id="mesmoires-app"
            title="mesmoires-app"
            thumbnail={thumbMesmoires}

          >
            <Text text-align='start'>
            An app coded in React.js and Node/Mongodb for the back-end, this app is a demo/personnal project to practice my back-end, it has signup and signin and anybody can create a post, comment and like each others posts.
            </Text>
          </WorkGridItem>
        </Section>
      <Section delay={0.1}>
          <WorkGridItem
            id="ecommerce"
            title="E-commerce Sanity"
            thumbnail={thumbEcommerce}

          >
            <Text text-align='start'>
            An app coded in Next.js and Stripe / Sanity for the serverless back, this app is a demo/personnal project to use sanity as a database, that can be modified by the client at anytime and rendering it dinamically, and also to be able to make a real secured payment with stripe.
            </Text>
          </WorkGridItem>
        </Section>
      <Section delay={0.1}>
          <WorkGridItem
            id="yogadanse"
            title="Yoga Danse Project"
            thumbnail={thumbYogaDanse}

          >
            <Text text-align='start'>
            An app coded in Solid.js with a real customer, MongoDb for the back, this app was made to help people get in contact with the client and the danse association.
            </Text>
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="youtube-clone"
            title="Youtube Clone "
            thumbnail={thumbYoutubeclone}

          >
            <Text text-align='start'>
            An app coded in React.js and axios for the back this app is a demo/personnal project, to use an Api and recreate a small youtube Ui with search results.
            </Text>
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="drbonvoyage"
            title="Dr. BonVoyage"
            thumbnail={thumbDrbonvoyage}

          >
            <Text text-align='start'>
            An app coded in React Native with a real customer, API AWS serverless for the back, this app was made to help people travelling across the world with useful medical informations of many sorts
            </Text>
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="straffic"
            title="Straffic"
            thumbnail={thumbStraffic}
            height={200}
          >
           A responsive website coded in React.js, using the API of the strasbourg company of transport (CTS) to help people getting informations about transportation in Strasbourg and/or other useful informations like parkings location or tickets point of sales, in an easily usable and fast way
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem id="fives" title="FIVES" thumbnail={thumbFives}>
            A Static html/css site first project after just 3 weeks of studying
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      
    </Container>
    </Layout>
)

export default Works

