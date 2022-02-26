import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="fives">
    <Container>
      <Title>
        Fives <Badge>2021-</Badge>
      </Title>
      <P>
      A Static html/css site first project after just 3 weeks of studying
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/RafaelDubois">
            View Source <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Html / Css</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Captureprojet1.png" alt="drbonvoyage" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'