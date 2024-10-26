import { useState } from "react";
import { Col, Row, Button, Alert } from "react-bootstrap";
import './resume.css';


export const ResumeSection = ({ status, message }) => {
  const [downloadStatus, setDownloadStatus] = useState('');

  const handleDownload = () => {
    setDownloadStatus("Downloading...");
    // Here, replace 'path/to/your/resume.pdf' with the actual path or URL of your resume.
    const link = document.createElement("a");
    link.href = "/path/to/your/resume.pdf";
    link.download = "Resume.pdf";
    link.click();
    setDownloadStatus("Download started!");
    setTimeout(() => setDownloadStatus(''), 3000); // Clear the status after 3 seconds
  };

  return (
    <Col lg={12}>
      <div className="resume-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Get my resume here<br /> & Access my career details</h3>
            {downloadStatus && <Alert>{downloadStatus}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <div className="download-cv-bx">
              <Button variant="primary" onClick={handleDownload}>Download CV</Button>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
