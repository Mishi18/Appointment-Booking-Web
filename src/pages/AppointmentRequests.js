import { Helmet } from 'react-helmet';
import { Box, Button, Card, CardContent, CardHeader, Container, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AppointmentRequests = () => {

  const sellerId = "626d6bbd51db9539ec7cb0bd";

  const [appointmentRequests, setAppointmentRequests] = useState([]);

  useEffect(() => {
    // fetch the appointment request list for the given seller from the server
    axios.get(`https://booking7-app.herokuapp.com/api/requests?sellerId=${sellerId}`)
      .then(response => {
        const result = response.data;
        setAppointmentRequests(result.request)
      })
      .catch(e => {
        console.log(e.message)
      })
  }, [])

  useEffect(() => {
    // fetch the appointment request list for the given seller from the server
    axios.get(`https://booking7-app.herokuapp.com/api/requests?sellerId=${sellerId}`)
      .then(response => {
        console.log(response.data.results)
        setAppointmentRequests(response.data.results)
      })
      .catch(e => {
        console.log(e.message)
      })
  }, [])

  const updateRequestStatus = (id, status) => {
    axios.patch(`https://booking7-app.herokuapp.com/api/requests/${id}`, { status: status })
      .then(response => {
        const updatedRequest = response.data.request;
        console.log(updatedRequest)
        const appointment = appointmentRequests.find(appointment => appointment.slot._id === updatedRequest.slotId)
        setAppointmentRequests([
          ...appointmentRequests.filter(apt => apt.requets._id !== appointment.requets._id),
          {
            requets: updatedRequest,
            slot: appointment.slot
          }
        ])
      })
      .catch(e => {
        console.log(e.message)
      })
  }


  return (<>
    <Helmet>
      <title>Appointment Requests</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Box>
          <Box sx={{ mt: 3 }}>
            <Card>
              <CardHeader
                title='Appointment Requests'
              />
            </Card>

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    User ID
                  </TableCell>
                  <TableCell>
                    Slot
                  </TableCell>
                  <TableCell>
                    Status
                  </TableCell>
                  <TableCell>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appointmentRequests?.map(appointment => (
                  <TableRow
                    hover
                    key={appointment.requets._id}>
                    <TableCell>
                      {appointment.requets.userId}
                    </TableCell>
                    <TableCell>
                      {appointment.slot.slot}
                    </TableCell>
                    <TableCell>
                      {appointment.requets.status}
                    </TableCell>
                    <TableCell>
                      <Button disabled={appointment.requets.status !== 'BOOKED'} onClick={() => updateRequestStatus(appointment.requets._id, 'ACCEPTED')} >Accept</Button>
                      <Button disabled={appointment.requets.status !== 'BOOKED'} onClick={() => updateRequestStatus(appointment.requets._id, 'REJECTED')} >Reject</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Container>
    </Box>
  </>

  )
};

export default AppointmentRequests;
