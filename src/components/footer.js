import React from 'react'
import {Card, Button} from 'react-bootstrap'

export const Footer = () => (
<div className='container'>
<Card className="text-center">
  <Card.Body>
    <Card.Title>TANGANKU.ID</Card.Title>
    <Card.Text>
    Tanganku.id menyalurkan donasimu kepada orang yang membutuhkan melalui BPBD Kabupaten Seleman, dengan informasi pengalangan dana dan pengumpulan donasi berdasarakan sandang, pangan dan papan.
    </Card.Text>
    <Card.Title>CONTACT US</Card.Title>
    <Card.Text>
    Beran Kidul, Tridadi, Kec. Sleman, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55511
    </Card.Text>
    <Button variant="primary">DOWNLOAD</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2020 TANGANKU. All rights reserved</Card.Footer>
</Card>
</div>
)