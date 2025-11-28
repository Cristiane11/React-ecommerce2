import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const AnalyticsDashboard: React.FC = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-4">Analytics Dashboard</h2>
      <Row>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Page Views</Card.Title>
              <Card.Text className="h3">
                Check Firebase Analytics Console
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Product Views</Card.Title>
              <Card.Text className="h3">
                Real-time tracking active
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Add to Cart</Card.Title>
              <Card.Text className="h3">
                Events being tracked
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Analytics Information</Card.Title>
              <Card.Text>
                • <strong>App Started:</strong> Tracked when app initializes<br/>
                • <strong>Page Views:</strong> Tracked on Home and Profile pages<br/>
                • <strong>Product Views:</strong> Tracked when product cards are clicked<br/>
                • <strong>Add to Cart:</strong> Tracked when "Buy Now" button is clicked<br/>
                • <strong>Search:</strong> Ready for implementation when search feature is added<br/>
                • <strong>Purchase:</strong> Ready for implementation when checkout is added
              </Card.Text>
              <Card.Text className="text-muted">
                View detailed analytics in your{' '}
                <a 
                  href="https://analytics.google.com/analytics/web/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  Firebase Analytics Console
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AnalyticsDashboard;