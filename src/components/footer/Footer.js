import { Box, Button, Container, Grid } from '@material-ui/core'
import React from 'react'

function Footer() {
    return (
        <>
        <footer style={{backgroundColor:'#282424', marginTop:'5%', color:'white'}}>
            <Box p={5}>
                <Container maxWidth="lg" >
                    <Grid container spacing={5}>
                        <Grid item xs={4} sm={3}>
                            <img width="200px" height="150px" src="https://www.gradeamovers.com.au/wp-content/uploads/2021/02/logo-new.png" />
                        </Grid>
                        <Grid item xs={4} sm={3}>
                            <div>
                                <h4 style={{fontSize:'1.2em', marginBottom:'8px'}}>Grade A Movers Pty Ltd.</h4>
                                <p style={{marginBottom:'8px'}}>21 -23 Aristoc Road,</p>
                                <p style={{marginBottom:'8px'}} >Glen Waverley, VIC 3150</p>
                                <p style={{marginBottom:'8px'}} >1300 758 608</p>
                                <p style={{marginBottom:'8px'}} >0438 758 608</p>
                            </div>
                        </Grid>
                        <Grid item xs={4} sm={2} style={{textAlign:'center'}}>
                            <h4>SITE MAP</h4>
                            <div><a style={{color:'white'}} href="https://www.gradeamovers.com.au/our-services/">Our Services</a></div>
                            <div><a style={{color:'white'}} href="https://www.gradeamovers.com.au/feedback/">Feedback</a></div>
                            <div><a style={{color:'white'}} href="https://www.gradeamovers.com.au/faqs/">FAQs</a></div>
                            <div><a style={{color:'white'}} href="https://www.gradeamovers.com.au/contact-us/">Contact Us</a></div>
                            <div><a style={{color:'white'}} href="https://www.gradeamovers.com.au/privacy-policy/">Privary Policy</a></div>
                            <div><a style={{color:'white'}} href="https://www.gradeamovers.com.au/terms-and-conditions/">Terms and Conditions</a></div>
                            <div><a style={{color:'white'}} href="https://www.gradeamovers.com.au/blog/">Blog</a></div>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <h4  style={{marginBottom:'8px'}}>Inquries</h4>
                            <p style={{marginBottom:'8px'}} >Send us your email, we will get back to you</p>
                            <form><input type="email"/> <input type="submit"/></form>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
        <div style={{textAlign: 'center', padding:'12px', fontSize:'0.75em', color:'gray'}}>
            <p>© 2021 GRADE A MOVERS PTY LTD | ALL RIGHTS RESERVED | ABN 36 644 855 103</p>
        </div>
        </>
    )
}

export default Footer
