import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const PcSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const PcContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-pc"
    m="auto"
    mt={['-20px', '-60px', '-69px']}
    mb={['-40px', '-140px', '-269px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <PcContainer>
      <PcSpinner />
    </PcContainer>
  )
}

export default Loader
