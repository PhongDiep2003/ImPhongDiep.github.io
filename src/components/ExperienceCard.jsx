import React from 'react'
import { Box, Text,  Card, CardHeader, CardBody, Heading, Stack, StackDivider, List, ListItem, ListIcon, Divider } from '@chakra-ui/react'
import { MdCheckCircle} from 'react-icons/md'
const ExperienceCard = ({companyName,title, time, description, techused}) => {
  return (
      <Card w={{lg: '63vw', xl: '50vw', 'base': '100vw'}} opacity={0.9} _hover={{'transform': 'scale(0.99)', 'border': '2px solid #38ACFF'}} transition={'0.2s ease-in-out'} mt={5} zIndex={0} bg={'white'}>
          <CardHeader textAlign={'center'}>
            <Heading size={{lg: 'lg', xl: 'md'}} color={'black'}>{companyName}</Heading>
          </CardHeader>
          <Divider border={'0.05px solid black'} bg={'black'}/>
          <CardBody>
            <Stack divider={<StackDivider bg={'black'} />} spacing='4'>
              <Box>
                <Heading size={{lg: 'md', xl: 'xs'}} textTransform='uppercase' color={'black'}>
                  Title
                </Heading>
                <Text pt='2' fontSize={{lg: 'md', xl: 'sm'}} textTransform={'uppercase'} color={'black'}>
                  {title}
                </Text>
              </Box>
              <Box>
                <Heading size={{lg: 'md', xl: 'xs'}} textTransform='uppercase' color={'black'}>
                  Start date - End date
                </Heading>
                <Text pt='2' fontSize={{lg: 'md', xl: 'sm'}} textTransform={'uppercase'} color={'black'}>
                  {time}
                </Text>
              </Box>
              <Box>
                <Heading size={{lg: 'md', xl: 'xs'}} textTransform='uppercase' color={'black'}>
                  Job Description
                </Heading>
                <List pt={'2'}>
                    {description.map((des, i) => <ListItem key={i.toString()} color={'black'}>
                                                        <ListIcon as={MdCheckCircle} color='green.500'  />
                                                        <Text fontSize={{lg: 'lg', xl: 'sm'}} display={'inline'}>{des}</Text>
                                                  </ListItem>)}
                </List>
              </Box>
              <Box>
                <Heading size={{lg: 'md', xl: 'xs'}} textTransform='uppercase' color={'black'} >
                  Technologies used
                </Heading>
                <Text pt='2' fontSize={{lg: 'lg', xl: 'sm'}} textTransform='uppercase' color={'black'} >
                  {techused}
                </Text>
              </Box>
            </Stack>
          </CardBody>
      </Card>
  )
}

export default ExperienceCard