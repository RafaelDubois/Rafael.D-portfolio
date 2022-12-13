import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="mesmoires-app">
    <Container>
      <Title>
        MesMoires / Social-media-app <Badge>2022-</Badge>
      </Title>
      <P>
      An app coded in React.js and Node/Mongodb for the back-end, this app is a demo/personnal project to practice my back-end, it has signup and signin and anybody can create a post, comment and like each others posts.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://mesmoires-app.vercel.app/">
            View Source <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js, Mui, Redux, Node/Express</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Captureprojet7test.png" alt="mesmoires" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'