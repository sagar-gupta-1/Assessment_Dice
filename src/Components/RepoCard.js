import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './RepoCard.css';


const RepoCard = ({repo}) => {
    

  return (
    <Col className='py-2 '>         
        <Card className='p-2  text-white' style={{ width: '18rem', height: '100%', background: '#495269', borderRadius: '2rem' }}>
            <Card.Img style={{width: '100%', borderRadius: '50%'}}  variant="top" src={repo.owner.avatar_url} />
            <Card.Body className='d-flex flex-column ' style={{height: '100%'}}>
                <Card.Text>
                    <span style={{ fontWeight: 'bold' }}>UserName:</span> {repo.name} <br/>
                    <span style={{ fontWeight: 'bold' }}>Stars:</span> {repo.stargazers_count} <br/>
                    <span style={{ fontWeight: 'bold' }}>Language:</span> {repo.language} <br/>
                    <div className='truncate' >
                    <span style={{ fontWeight: 'bold', overflow:'hidden'}}>Description:</span> {repo.description}
                    </div>
                </Card.Text>
                <div className='mt-auto d-flex justify-content-center '>
                    <Button  target='_blank' variant="info" href={repo.html_url}  >Go to Link</Button>
                </div>
            </Card.Body>
        </Card>
    </Col>

  )
}

export default RepoCard

