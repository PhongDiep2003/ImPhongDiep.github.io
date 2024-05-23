import React from 'react'
import { Center, Box, Flex, Text, Grid, GridItem, Image } from '@chakra-ui/react'
import { colorTemplate } from '../style/app_styles';
import '../style/aboutMe.css'
const AboutMe = () => {
  return (
    <Box 
        h={{lg: '75vh',xl:'100vh', base:'175vh'}}
        bg={colorTemplate.primary}>
        <Center>
          <Flex 
                direction={'column'}>
            <Text 
                alignSelf={'center'} 
                fontSize={{lg:'xl', xl: 'md'}} 
                color={'gray.500'} 
                fontWeight={'bold'}>
                    Get to know
            </Text>
            <Text 
                fontSize={{lg:'4xl', xl: '3xl', base: '4xl'}} 
                fontWeight={'bold'}
                color={'gray.900'}>
                    About me
            </Text>
          </Flex>
        </Center>
        <Grid
            h='200px'
            templateColumns={{lg: 'repeat(2, 1fr)', xl: 'repeat(2, 1fr)', base: null}}
            templateRows={{base:'repeat(2, 1fr)'}}
            gap={4}
            mt={10}
          >
            <GridItem>
              <Flex 
                    w={'100%'} 
                    h={'100%'} 
                    justifyContent={'center'} 
                    pos={'relative'}>
                      <Box 
                            bg={colorTemplate.primary} 
                            height={{lg: 500, xl: 700, base: 450}} 
                            width={{lg: 350, xl: 600, base: 320}} 
                            borderRadius={50} 
                            boxShadow='dark-lg'/>
                      <Image 
                            src='/quote.jpeg' 
                            height={{lg: 500, xl: 700, base: 450}} 
                            width={{lg: 350, xl: 600, base: 320}} 
                            objectFit={'contain'} 
                            position={'absolute'} 
                            borderRadius={50} 
                            transform={'rotate(30deg)'}
                            _hover={{'transform': 'rotate(0)'}} 
                            transition={'0.3s ease-in-out'} boxShadow='dark-lg'/>
              </Flex>
            </GridItem>
            <GridItem>
                <Flex w={'100%'} h={'100%'} justifyContent={'center'} pt={{base: 20, xl: 0, lg: 0}}>
                  <div className="about_me_card">
                    <p className="title">Get To Know Me</p>
                    <div className="card-hidden">
                        <p className="title-in">Hello! &#128512;</p>
                        <p> My name is Phong Diep. Currently, I am enrolled as a full-time student at San Jose State University. My area of academic focus is software engineering. During periods of leisure, I enjoy playing soccer with my friends, watching movies, and listening to music. My long-term professional goal is to leverage my expertise in web and app development in conjunction with artificial intelligence (AI) and machine learning (ML) to enhance the lives of humans and contribute something valuable to global advancement.</p>
                    </div>
                  </div>
                  <div className="card-border"></div>
                </Flex>
            </GridItem>
      </Grid>
    </Box>
  )
}

export default AboutMe