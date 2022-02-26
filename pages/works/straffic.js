import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="Straffic">
    <Container>
      <Title>
        Straffic <Badge>2021-</Badge>
      </Title>
      <P>
      A responsive website coded in React.js, using the API of the strasbourg company of transport (CTS) to help people getting informations faster 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/RafaelDubois/strasbourg-js-2109-project2-strafic">
            View Source <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, ReactJS and MUI Framework</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Captureprojet2.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
