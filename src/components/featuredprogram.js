import React from 'react'
import {Card, CardDeck} from 'react-bootstrap'
import './componentsCSS/featuredprogram.scss'



class FeaturedProgram extends React.Component {
    render () {
      return (

    <div className='container'>
    <CardDeck>
  <Card>
    <Card.Img variant="top" src={require('../assets/Card1.png')} alt="Card1" />
    <Card.Body>
      <Card.Title>Kabupaten Sleman kekurangan stok APD</Card.Title>
      <Card.Text>
        Kategori
        <br></br>
        <img src={require('../assets/Sandang.png')} alt="sandang" width="23px" height="23px"></img>
        <img src={require('../assets/Pangan.png')} alt="pangan" width="23px" height="23px"></img>
        <img src={require('../assets/Papan.png')} alt="papan" width="23px" height="23px"></img>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Terkumpul</small>
      <br></br>
      <small className="text-muted">Rp.</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={require('../assets/Card2.png')} alt="Card2" />
    <Card.Body>
      <Card.Title>Bantu rumah tidak layak huni</Card.Title>
      <Card.Text>
        Kategori{' '}
        <br></br>
        <img src={require('../assets/Papan.png')} alt="papan" width="23px" height="23px"></img>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Terkumpul</small>
      <br></br>
      <small className="text-muted">Rp.</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={require('../assets/Card3.png')} alt="Card3" />
    <Card.Body>
      <Card.Title>Bantu warga kurang mampu</Card.Title>      
      <Card.Text>
        Kategori
        <br></br>
        <img src={require('../assets/Sandang.png')} alt="sandang" width="23px" height="23px"></img>
        <img src={require('../assets/Pangan.png')} alt="pangan" width="23px" height="23px"></img>
        <img src={require('../assets/Papan.png')} alt="papan" width="23px" height="23px"></img>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Terkumpul</small>
      <br></br>
      <small className="text-muted">Rp.</small>
    </Card.Footer>
  </Card>
</CardDeck>

</div>

);
    }
  }

  export default FeaturedProgram;