import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="drbonvoyage">
    <Container>
      <Title>
        Dr. BonVoyage <Badge>2022-</Badge>
      </Title>
      <P>
      An app coded in React Native with a real customer, API AWS serverless for the back, this app was made to help people travelling across the world with useful medical informations of many sorts
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://travelkit.care/">
            View Source <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>AWS Serverless, React Native</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Captureprojet3test.png" alt="drbonvoyage" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'