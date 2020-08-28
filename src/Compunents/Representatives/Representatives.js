import React from 'react';
import './Representatives.css';
import { CardDeck, Card } from 'react-bootstrap';
import repImg from '../../resource/image/man-staff.png';

const Representatives = () => {
    return (
        <div className="representative-block">
            <div className="container">
                <h1 className="representatives-title">Our Representatives</h1>
                <CardDeck>
                    <div className="col-md-4 cards">
                        <Card>
                            <Card.Img variant="top" src={repImg} />
                            <Card.Body>
                                <Card.Title>Anne Helen</Card.Title>
                                <Card.Text>
                                    Chairman
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 cards">
                        <Card>
                            <Card.Img variant="top" src={repImg} />
                            <Card.Body>
                                <Card.Title>Anne Helen</Card.Title>
                                <Card.Text>
                                    Chairman
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 cards">
                        <Card>
                            <Card.Img variant="top" src={repImg} />
                            <Card.Body>
                                <Card.Title>Anne Helen</Card.Title>
                                <Card.Text>
                                    Chairman
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 cards">
                        <Card>
                            <Card.Img variant="top" src={repImg} />
                            <Card.Body>
                                <Card.Title>Anne Helen</Card.Title>
                                <Card.Text>
                                    Chairman
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 cards">
                        <Card>
                            <Card.Img variant="top" src={repImg} />
                            <Card.Body>
                                <Card.Title>Anne Helen</Card.Title>
                                <Card.Text>
                                    Chairman
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 cards">
                        <Card>
                            <Card.Img variant="top" src={repImg} />
                            <Card.Body>
                                <Card.Title>Anne Helen</Card.Title>
                                <Card.Text>
                                    Chairman
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 cards">
                        <Card>
                            <Card.Img variant="top" src={repImg} />
                            <Card.Body>
                                <Card.Title>Anne Helen</Card.Title>
                                <Card.Text>
                                    Chairman
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 cards">
                        <Card>
                            <Card.Img variant="top" src={repImg} />
                            <Card.Body>
                                <Card.Title>Anne Helen</Card.Title>
                                <Card.Text>
                                    Chairman
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 cards">
                        <Card>
                            <Card.Img variant="top" src={repImg} />
                            <Card.Body>
                                <Card.Title>Anne Helen</Card.Title>
                                <Card.Text>
                                    Chairman
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </CardDeck>
            </div>
        </div>
    );
};

export default Representatives;