import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <Grid
  templateAreas={`"clock search"
                  "side main"
                  "side main"`}
  gridTemplateRows={'10% 1fr 50px'}
  gridTemplateColumns={'25% 1fr'}
  h='93vh'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.300' area={'search'}>
    Google Search
  </GridItem>
  <GridItem pl='2' bg='pink.300' area={'side'}>
    side
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
    Main
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'clock'}>
    Clock
  </GridItem>
  </Grid>
    </div>
  )
}
