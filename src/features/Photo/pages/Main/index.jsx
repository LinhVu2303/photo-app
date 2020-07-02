import React from 'react';
import Banner from '../../../../components/Banner';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Images from '../../../../constants/image';

MainPage.propTypes = {

};

function MainPage(props) {
    return (
        <div className="photo-main ">
            <Banner title="You are awesome photos 💖" backgroundUrl={Images.PINK_BG} />

            <Container className="text-center">
                <Link to="/photos/add">
                    Add new Photo
                </Link>
            </Container>
        </div>
    );
}

export default MainPage;