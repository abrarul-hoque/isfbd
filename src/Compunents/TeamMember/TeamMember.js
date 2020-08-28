import React from 'react';
import './TeamMember.css';
import { CardDeck, Card } from 'react-bootstrap';
import teamImg from '../../resource/image/team1.jpg';

const TeamMember = () => {
    return (
        <div>
            <div className="meetTeam staff-section">
                <div className="meetTeam-title">
                    <h1>Meet our team</h1>
                </div>
                <div className="container">
                    <CardDeck>
                        <div className="col-md-4 cards">
                        <Card>
                            <Card.Img variant="top" src={teamImg} />
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
                            <Card.Img variant="top" src={teamImg} />
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
                            <Card.Img variant="top" src={teamImg} />
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
                            <Card.Img variant="top" src={teamImg} />
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
                            <Card.Img variant="top" src={teamImg} />
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
                            <Card.Img variant="top" src={teamImg} />
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
                            <Card.Img variant="top" src={teamImg} />
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
                            <Card.Img variant="top" src={teamImg} />
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
                            <Card.Img variant="top" src={teamImg} />
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
        </div>
    );
};

export default TeamMember;