import React from 'react'
import '../style/projectCard.css';
import { Text, Image, Card, CardBody, Heading, Stack, Button, Avatar, Box} from '@chakra-ui/react'
const ProjectCard = ({imgSrc, title, content, projectLink, isOnGithub}) => {
  return (
  <div 
        className={"flip_card"}>
    <div 
        className={"flip_card_inner"}>
        <div 
            className={"flip_card_front"}>
            <Image 
                  pos={'absolute'} 
                  w={'100%'} 
                  h={'100%'} 
                  src={imgSrc} 
                  objectFit={'cover'}/>
        </div>
        <div 
            className={"flip_card_back"}>
          <Box 
              w={'100%'} 
              h={'100%'}  
              p={10}>
              <Heading 
                      size={{lg: 'lg', xl: 'md'}}
                      color={'black'}>
                            Description
              </Heading>
              <Text 
                      color={'black'} 
                      mt={5}
                      fontSize={{lg: 'md'}}>
                            {content}
              </Text>
              <Button 
                      onClick={() => window.open(projectLink, '_blank')} size={'md'} 
                      mt={5} 
                      color={'black'} 
                      _hover={{'transform': 'scale(1.1)', 'color': 'gray.500'}} 
                      transition={'0.2s ease-in-out'}>
                            {isOnGithub ? 'Github' : 'View Project'}
              </Button>
          </Box>
        </div>
    </div>
  </div>
  )
}

export default ProjectCard