import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="youtube-clone">
    <Container>
      <Title>
        Youtube-Clone<Badge>2022-</Badge>
      </Title>
      <P>
      An app coded in React.js and axios for the back this app is a demo/personnal project, to use an Api and recreate a small youtube Ui with search results.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://youtube-clone-lyart-tau.vercel.app/">
            View Source <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js, Mui, Axios, YoutubeV3 Api</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Captureprojet6test.png" alt="youtube-clone" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'