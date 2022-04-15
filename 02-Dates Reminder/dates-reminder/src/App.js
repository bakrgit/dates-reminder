import { Button, Col, Container, Row } from "react-bootstrap";
import React, { useState, useEffect } from 'react'
import { person } from './data'
import DatesCount from './components/DatesCount'
import DatesList from './components/DatesList'
import DatesAction from './components/DatesAction'
function App() {

  const [personData, setPersonData] = useState(person)
  //dafadf
  const onDelete = () => {
    setPersonData([])
  }
  const onViewData = () => {
    setPersonData(person)
  }
  useEffect(() => {
    setPersonData([])
  }, [])
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount person={personData} />
        <DatesList person={personData} />
        <DatesAction deleteData={onDelete} onViewData={onViewData} />
      </Container>
    </div>
  );
}

export default App;
