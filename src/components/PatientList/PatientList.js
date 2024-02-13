// src/components/AppointmentsList.js
import React from 'react';
import { useQuery } from 'react-query';
import { appointmentListAtom } from '../../atoms/AppointmentListAtom';
// import { useRecoilState } from 'recoil';

function AppointmentsList() {

    console.log(appointmentListAtom);
//   const [appointments, setAppointments] = useRecoilState(appointmentListState);


  return (
    <div>
      <h2>Appointments List</h2>
      <ul>
          <li > title 1 </li>
      </ul>
    </div>
  );
}

export default AppointmentsList;


