import { Container, Row, Col} from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { fetchCampsites } from '../features/campsites/campsitesSlice';

const CampsitesDirectoryPage = () => {
    const selectedCampsite = fetchCampsites;

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <CampsitesList />
                </Col>
                <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;