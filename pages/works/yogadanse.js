import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="yogadanse">
    <Container>
      <Title>
        Yoga Danse Sarasvaty<Badge>2022-</Badge>
      </Title>
      <P>
      An app coded in Solid.js with a real customer, MongoDb for the back, this app was made to help people get in contact with the client and the danse association. 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://front-end-yogadanse-eamt.vercel.app/">
            View Source <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Solid.js, SolidStrap, MongoDb, Express</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Captureprojet4test.png" alt="yogadanse" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'