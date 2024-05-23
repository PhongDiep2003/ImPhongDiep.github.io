import React from 'react'
import { Center, Box, IconButton , Flex, Text } from '@chakra-ui/react'
import ProjectCard from '../components/ProjectCard'
import { colorTemplate } from '../style/app_styles'
const Project = () => {
  return (
    <Box 
          h={{lg: '75vh',xl:'80vh', base:'280vh'}}
          bg={colorTemplate.primary}>
          <Center>
              <Flex direction={'column'}>
                  <Text 
                          alignSelf={'center'} 
                          fontSize={{lg:'xl', xl: 'md'}} 
                          color={'gray.500'} 
                          fontWeight={'bold'}>
                              My Most Works
                  </Text>
                  <Text 
                          fontSize={{lg:'4xl', xl: '3xl', base:'4xl'}} 
                          fontWeight={'bold'}
                          color={'gray.900'}>
                              Porforlio
                  </Text>
              </Flex>
          </Center>
          <Flex 
                justifyContent={'space-evenly'} 
                mt={5} overflowWrap={'normal'} 
                wrap="wrap"
                >
              <ProjectCard 
                            imgSrc={'/ScanSlate.png'} 
                            title={'ScanSlate'} 
                            projectLink={'https://github.com/PhongDiep2003/Scanslate-2.0'} 
                            content={"A mobile app developed for the CMPE 133 group project. allows users to capture a picture of an object and label it using TensorFlow's MobileNet image classification, and then translate that label into one of the many languages that users selected when creating their account. The app includes a quiz mode feature-based flashcard meant to help users learn and reinforce their memory. Aside from that, the app also offers some basic flashcard management features such as removing and viewing flashcards."} 
                            isOnGithub={true}/>
              <ProjectCard 
                            imgSrc={'/GmailCloneLogo.png'} 
                            title={'GmailClone'} 
                            projectLink={'https://github.com/PhongDiep2003/CMPE131-Project'} 
                            content={"Cloned the Google Gmail application, which simulates every fundamental feature of Google Gmail, including registration, authentication, and email composition. Furthermore, this cloned version of Google Gmail provides extra functionalities, such as the ability to add contacts and create to-do lists. These additions are intended to improve the overall user experience and transform this cloned application into a more collaborative and managed tool for its users."} 
                            isOnGithub={true}/>
              <ProjectCard 
                            imgSrc={'/chatgptImage.jpeg'} 
                            title={'ChatGPT Clone'} 
                            projectLink={'https://chatgptclone-ea865.web.app/'} 
                            content={"Utilized OpenAI API to clone the ChatGPT application and incorporated an additional feature to the cloned application, namely speech-to-text feature. This speech-to-text feature enables users to input their questions by utilizing the built-in microphone on their computer, which transcribes their spoken words into text and sends them to the API. The application also includes a text input, which allows users, who choose not to use their microphone, to send question to the API by typing it."}/>
          </Flex>
    </Box>
  )
}

export default Project