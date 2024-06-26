// import React from 'react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Remove the unnecessary 'Route' and 'Routes' imports
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import ExampleCard1 from "pages/Presentation/components/ExampleCard/index1";
import RealtimeData from './RealtimeData';
import LoginForm from '../logi';
import data2 from './ok';

function DesignBlocks12() {
const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating an asynchronous data fetch operation
        // Replace this with your actual data fetching logic
        await new Promise(resolve => setTimeout(resolve, 1000));
        setData(data1);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  let val = 1;
  const renderData = data2.map(({ title, items }) => {
     val = val + 1;
    return(
    <Grid container spacing={0} sx={{ mb: -5 }} key={title}>
      <Grid item xs={12} lg={0}>
        <MKBox position="sticky" top="100px" pb={{ xs: 5, lg: 7 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={0}>
        <Grid container spacing={1}>
          {items.map(({ image, name, count, des, route, pro }) => (
            <Grid item xs={12} lg={0} md={17} sx={{ mb: '-2vh' }} key={name}>
              <Link to={route}>
                <ExampleCard1 image={image} name={name} count={count} des={des} pro={pro} />
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={60}>
               <RealtimeData val={val} />
             </Grid>
         <Grid item xs={60}>
           <LoginForm val={val} />
         </Grid>
      </Grid>
      
      
  
  {/* <div style={{ textAlign: 'right', marginBottom: '60px' }}>
  <a
    href="http://127.0.0.1:3000/material-kit-react-main/src/pages/Presentation/sections/DC%20Publication/cse.iitkgp.ac.in/resgrp/ubinet/publications/publications.html"
    style={{ textDecoration: 'underline', marginLeft: "1100px" }}
  >
    See All Publication
  </a>
</div> */}
<div style={{ textAlign: 'right', marginBottom: '-90px', marginTop: '10px', marginLeft: 'auto' }}>
  <a
    href="http://127.0.0.1:3000/material-kit-react-main/src/pages/Presentation/sections/DC Publication/cse.iitkgp.ac.in/resgrp/ubinet/publications/publications.html"
    style={{ textDecoration: 'underline' }}
  >
    See All Publications
  </a>
</div>





    </Grid>
  )});

  return (
    <MKBox component="section" my={-15} py={6}>
      <Container>
        <Grid
          container
          item
          xs={0}
          lg={9}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge variant="contained" color="info" container sx={{ mb: 2 }} />
        </Grid>
      </Container>
     
      <Container sx={{ mt: 3 }}>{renderData}</Container>
      
    </MKBox>
  );
}

export default DesignBlocks12;