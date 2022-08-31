import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <Grid
  templateAreas={`"nav header"
                  "nav main"
                  "nav main"`}
  gridTemplateRows={'10% 1fr 30px'}
  gridTemplateColumns={'25% 1fr'}
  h='93vh'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.300' area={'header'}>
    
  </GridItem>
  <GridItem pl='2' bg='pink.300' area={'nav'}>
    Nav
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
    Main
  </GridItem>
  {/* <GridItem pl='2' bg='blue.300' area={'footer'}>
    Footer
  </GridItem> */}
  </Grid>
    </div>
  )
}
