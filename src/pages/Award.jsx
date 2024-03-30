import { Center, Box, Flex, Text} from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { colorTemplate } from '../style/app_styles';


import { Pagination } from 'swiper/modules';
import AwardCard from '../components/AwardCard';
const Award = () => {
  const myAwards = [
    {
      srcImg: '/presidentScholar.webp',
      awardTitle: "President's scholar", 
      awardDescription: "Awarded to students who have a 4.0 GPA in a specific semester"
    },
    {
      srcImg: '/DeanList.png',
      awardTitle: "Dean's scholar", 
      awardDescription: "Awarded to students who have a GPA higher than 3.65 in a specific semester"
    }
  ]
  return (
    <Box  h={{lg: '65vh',xl:'50vh', base:'50vh'}} bg={colorTemplate.primary}>
      <Center>
        <Flex direction={'column'}>
            <Text 
                fontSize={{lg:'4xl', xl: '3xl', base:'4xl'}} 
                fontWeight={'bold'}
                color={'gray.900'} 
                alignSelf={'center'}>
                  Awards
            </Text>
        </Flex>
      </Center>
        <Swiper
        // install Swiper modules
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
          {myAwards.map((award, i) => 
            <SwiperSlide>
              <AwardCard {...award} key={i.toString()}/>
            </SwiperSlide>
          )}
        
      </Swiper>
  
    </Box>
  )
}

export default Award
