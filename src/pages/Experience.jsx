import React from 'react'
import { Center, Box,Flex, Text } from '@chakra-ui/react'
import ExperienceCard from '../components/ExperienceCard'
import { colorTemplate } from '../style/app_styles'
const workExperiences = [
  {
    companyName: 'Resilience Inc',
    title: 'Mobile Application Developer',
    time: 'January 2023 - August 2023', 
    description: ["Developed a feature-rich full stack mobile application that helps refugees search for free necessities such as food and health care from non-governmental organizations.", "Developed 60% of the application’s front end based on the given UX-designed layout from the design team.", "Developed functions for API calls to the backend server using Axios library."], 
    techused : 'React Native, JavaScript, Node.js'
  },
  {
    companyName: 'San Jose State University',
    title: 'Computer Science Grader',
    time: 'January 2022 - May 2022', 
    description: ["Assessed and graded students' assignments and quizzes and provided constructive feedback."], 
    techused : 'Java'
  },

]
const Experience = () => {
  return (
    <Box h={{lg: '140vh',xl:'110vh', base:'130vh'}} bg={colorTemplate.primary}>
       <Center>
        <Flex 
              direction={'column'}>
              <Text 
                      alignSelf={'center'} 
                      fontSize={{lg:'xl', xl: 'md'}} 
                      color={'gray.500'} 
                      fontWeight={'bold'}>
                          My Most Recent
              </Text>
              <Text 
                      fontSize={{lg:'4xl', xl: '3xl',base: '4xl'}} 
                      fontWeight={'bold'}
                      color={'gray.900'}>
                          Work Experiences
              </Text>
        </Flex>
      </Center>
      <Center flexDirection={'column'} >
        {workExperiences.map((work, i) => <ExperienceCard {...work} key={i.toString()}/>)}
      </Center>
  </Box>
  )
}

export default Experience