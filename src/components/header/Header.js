import { Box, Button, Container, Grid } from '@material-ui/core'
import React from 'react'
import './nav.css'

function Header() {
    return (

        <header style={{color:'black', background:'white'}}>
          <div style={{
            display: 'flex',backgroundColor: 'red'}}><div style={{width: '60%'}}></div><div style={{width: '40%',display: 'flex',justifyContent: 'center',alignItems: 'center',height: '50px'}}><p style={{
            fontWeight: '600', fontSize: '19px', color: '#fff' }}>Call Us 1300 758 608</p></div></div>

          <Box >
                <Container maxWidth="lg">
                    <Grid container >
                        {/*<Grid item xs={1} sm={2}>*/}
                        {/*    */}
                        {/*</Grid>*/}
                        <div style={{padding:'20px'}}>
                          <img width="150px" height="100px" src="https://www.gradeamovers.com.au/wp-content/uploads/2021/02/logo-new.png" />
                        </div>

                      <div className="navbar">

                        <a href="https://www.gradeamovers.com.au/">HOME</a>
                        <div className="dropdown">
                          <button className="dropbtn">ABOUT
                            <i className="fa fa-caret-down" style={{marginLeft:'8px'}}></i>
                          </button>
                          <div className="dropdown-content">
                            <a href="https://www.gradeamovers.com.au/about/">ABOUT US</a>
                            <a href="https://www.gradeamovers.com.au/our-vision/">OUR VISION</a>
                            <a href="https://www.gradeamovers.com.au/feedback/">FEEDBACK</a>
                            <a href="https://www.gradeamovers.com.au/suburbs-we-cover/">AREAS WE COVER</a>
                          </div>
                        </div>
                        <div className="dropdown">
                          <button className="dropbtn">OUR SERVICES
                            <i className="fa fa-caret-down" style={{marginLeft:'8px'}}></i>
                          </button>
                          <div className="dropdown-content">
                            <a href="https://www.gradeamovers.com.au/van-and-man-hire/">MAN WITH A VAN / TRUCK</a>
                            <a href="https://www.gradeamovers.com.au/moving-few-items/">PERMANENT RUN</a>
                            <a href="https://www.gradeamovers.com.au/truck-men-hire/">TRUCK & MEN HIRE</a>
                            <a href="https://www.gradeamovers.com.au/house-moving/">HOUSE MOVING</a>
                            <a href="https://www.gradeamovers.com.au/furniture-delivery/">FURNITURE DELIVERY</a>
                            <a href="https://www.gradeamovers.com.au/industrial-deliveries/">INDUSTRIAL & INTERSTATE</a>
                            <a href="https://www.gradeamovers.com.au/office-moving/">OFFICE RELOCATION</a>
                            <a href="https://www.gradeamovers.com.au/storage-solution/">STORAGE SOLUTION</a>
                          </div>
                        </div>
                        <a href="https://www.gradeamovers.com.au/faqs/">FAQS</a>
                        <a href="https://www.gradeamovers.com.au/contact-us/">CONTACT US</a>
                        <div className="dropdown">
                          <button className="dropbtn">TOOLS
                            <i className="fa fa-caret-down" style={{marginLeft:'8px'}}></i>
                          </button>
                          <div className="dropdown-content">
                            <a href="https://www.gradeamovers.com.au/moving-cost-calculator-form/">HOUSE MOVING ESTIMATOR</a>
                            <a href="https://www.gradeamovers.com.au/vol_cal/">REMOVALS VOLUME CALCULATOR</a>
                          </div>
                        </div>
                          <a href='#' id='btn_new'>GET FREE QUOTE</a>
                          <a href='https://www.gradeamovers.com.au/book-moving-job/' id='btn_new'>BOOK A MOVE</a>
                      </div>

                        {/*<Grid item xs={1} sm={1} style={{position:'relative'}}>*/}
                        {/*    <a href="" style={{position:'absolute', top: '50%', color:'gray', fontWeight:'bold'}}>Home</a>*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={1} sm={1} style={{position:'relative'}}>*/}
                        {/*    <a href="" style={{position:'absolute', top: '50%', color:'gray', fontWeight:'bold'}}>About</a>*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={1} sm={1.4} style={{position:'relative'}} >*/}
                        {/*    <a href="" style={{position:'absolute', top: '50%', color:'gray', fontWeight:'bold'}} >Our Services</a>*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={1} sm={0.9} style={{position:'relative'}} >*/}
                        {/*    <a href="" style={{position:'absolute', top: '50%', color:'gray', fontWeight:'bold'}} >FAQs</a>*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={1} sm={1} style={{position:'relative'}} >*/}
                        {/*    <a href="" style={{position:'absolute', top: '50%', color:'gray', fontWeight:'bold'}} >Contact Us</a>*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={1} sm={1} style={{position:'relative'}} >*/}
                        {/*    <a href="" style={{position:'absolute', top: '50%', color:'gray', fontWeight:'bold'}} >Tools</a>*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={1} sm={1.5} style={{position:'relative'}} >*/}
                        {/*    <Button variant="contained" style={{position:'absolute', top: '40%', backgroundColor: '#282424', color:'whitesmoke', padding: '5%', fontWeight:'bold'}} > GET FREE QUOTE</Button>*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={1} sm={1.4} style={{position:'relative'}} >*/}
                        {/*    <Button variant="contained" style={{position:'absolute', top: '40%', backgroundColor: '#282424', color:'whitesmoke', padding: '5%', fontWeight:'bold'}}>BOOK A MOVE</Button>*/}
                        {/*</Grid>*/}
                    </Grid>
                </Container>
            </Box>
            <div style={{
              "backgroundImage": "url(\"http://www.gradeamovers.com.au/wp-content/uploads/2021/04/Banner-new.jpg\")",
              "width": "100%",
              "backgroundSize": "cover",
              "backgroundRepeat": "no-repeat",
              "display":"flex"
            }}>

                <div style={{width: '50%',padding: '4.5rem 0 4.5rem 7rem',color:' #fff',display: 'flex',flexDirection: 'column',gap: '1rem'}}><h2 style={{
                  fontSize: '30px'}}>GET A FREE QUOTE</h2>
                  <p style={{fontWeight: '600'}}><a href="#" style={{color:"#fff"}}>Home</a> / GET FREE QUOTE</p></div>
              <div style={{width: '50%'}}>

              </div>
            </div>
            {/*<img  src="http://www.gradeamovers.com.au/wp-content/uploads/2021/04/Banner-new.jpg" />*/}

        </header>
    )
}

export default Header;
