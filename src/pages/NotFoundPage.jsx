import React from 'react'
import { Text, Box, Center, Image, Flex, Link} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
const NotFoundPage = () => {
  return (
    <Box h={'100vh'}>
      <Image src='/404NotFound.png' h={'100vh'} w={'100vw'} alt='Not Found Page' bgPos={'center'} cursor={'pointer'} />
      <Box pos={'absolute'} top={9} left={10} height={'20px'}>
        <Link to={'/'}  as={RouterLink} _hover={{color:'gray.500'}} transition={'.2s ease-in-out'} color={'black'} fontSize={24} fontWeight={'bold'}>Go Back</Link>
      </Box>
    </Box>
  )
}

export default NotFoundPage
