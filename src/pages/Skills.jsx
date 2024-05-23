import React from 'react'
import { Center, Box, Text,Flex} from '@chakra-ui/react'
import { colorTemplate } from '../style/app_styles'
import ThreeDCube from '../components/ThreeDCube'
const Skills = () => {
  return (
    <Box 
          h={{lg: '60vh',xl:'70vh', base:'80vh'}}
          bg={colorTemplate.primary}
          >
      <Center 
              flexDirection={'column'} justifyContent={'space-between'}>
               <Text 
                    fontSize={{lg:'4xl', xl: '3xl', base:'4xl'}} 
                    fontWeight={'bold'}
                    color={'gray.900'} 
                    alignSelf={'center'}>
                      Skills
               </Text>
      </Center>
      <Flex 
            w={'100%'} 
            h={'100%'}
            alignItems={'center'}
            justifyContent={'center'}
            paddingBottom={20}>
        <ThreeDCube/>
      </Flex>
    </Box>
  )
}

export default Skills