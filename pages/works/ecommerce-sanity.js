import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="ecommerce">
    <Container>
      <Title>
        E-Commerce Sanity / Stripe<Badge>2022-</Badge>
      </Title>
      <P>
      An app coded in Next.js and Stripe / Sanity for the serverless back, this app is a demo/personnal project to use sanity as a database, that can be modified by the client at anytime and rendering it dinamically, and also to be able to make a real secured payment with stripe.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://e-commerce-sanity-stripe-iota.vercel.app/">
            View Source <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Mui, Sanity, Stripe</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Captureprojet5.png" alt="ecommerce" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'