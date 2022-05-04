import { Helmet } from 'react-helmet';
import { Box, Button, Card, CardContent, CardHeader, Container, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AppointmentSlots = () => {

  const sellerId = "626d6bbd51db9539ec7cb0bd";

  const [date, setDate] = useState();
  const [newSlot, setNewSlot] = useState();
  const [appointmentSlots, setAppointmentSlots] = useState([]);


  useEffect(() => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    setDate(today);
  }, [])

  useEffect(() => {
    // fetch the appointment list from the server
    axios.get(`https://booking7-app.herokuapp.com/api/slots/${sellerId}/getSlots/list`)
      .then(response => {
        const result = response.data;
        setAppointmentSlots(result.slots)
      })
      .catch(e => {
        console.log(e.message)
      })
  }, [date])

  const addNewSlot = () => {
    if (newSlot) {

      const slot = {
        "slot": newSlot,
        "date": date
      }

      axios.post(`https://booking7-app.herokuapp.com/api/slots/${sellerId}`, slot)
        .then(response => {
          const createdSlot = response.data.slot;
          setAppointmentSlots((prevState) => {
            return [
              ...prevState,
              createdSlot
            ]
          })

        })
        .catch(e => {
          console.log(e.message)
        })
    }
  }

  return (<>
    <Helmet>
      <title>Appointment Slots</title>
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
                title='Appointment Slots'
              />
              <CardContent>
                <div>
                  <div style={{ width: '10%', display: 'inline-block' }}>
                    <label>Date </label>
                  </div>
                  <div style={{ width: '65%', display: 'inline-block' }} >
                    <input value={date} onChange={(e) => setDate(e.target.value)} type='date' />
                  </div>
                </div>
                <form>
                  <div>
                    <div style={{ width: '10%', display: 'inline-block' }}>
                      <label>Select a slot</label>
                    </div>
                    <div style={{ width: '65%', display: 'inline-block' }} >
                      <select name='slot' onChange={(e) => setNewSlot(e.target.value)}>
                        <option value={'8.00AM - 9.00AM'}>8.00AM - 9.00AM</option>
                        <option value={'9.00AM - 10.00AM'} >9.00AM - 10.00AM</option>
                        <option value={'10.00AM - 11.00AM'} >10.00AM - 11.00AM</option>
                        <option value={'11.00AM - 12.00PM'} >11.00AM - 12.00PM</option>
                        <option value={'12.00PM - 1.00PM'}>12.00PM - 1.00PM</option>
                        <option value={'1.00PM - 2.00PM'} >1.00PM - 2.00PM</option>
                        <option value={'2.00PM - 3.00PM'}>2.00PM - 3.00PM</option>
                        <option value={'3.00PM - 4.00PM'} >3.00PM - 4.00PM</option>
                      </select>
                    </div>
                  </div>
                </form>
                <Button onClick={addNewSlot} >Add</Button>
              </CardContent>
            </Card>

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    Date
                  </TableCell>
                  <TableCell>
                    Time Slot
                  </TableCell>
                  <TableCell>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appointmentSlots?.map(slot => (
                  <TableRow
                    hover
                    key={slot.id}>
                    <TableCell>
                      {date}
                    </TableCell>
                    <TableCell>
                      {slot.slot}
                    </TableCell>
                    <TableCell>
                      <Button >Delete</Button>
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

export default AppointmentSlots;
