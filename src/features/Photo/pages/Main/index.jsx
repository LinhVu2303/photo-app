import React from 'react';
import Banner from '../../../../components/Banner';
import { Container } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import Images from '../../../../constants/image';
import { useSelector, useDispatch } from 'react-redux';
import PhotoList from '../../components/PhotoList';
import { removePhoto } from '../../photoSlice';

MainPage.propTypes = {

};

function MainPage(props) {
    const dispatch = useDispatch();

    const photos = useSelector(state => state.photos);
    const history = useHistory();

    // console.log('List of Photo', photos);

    const handlePhotoEditClick = (photo) => {
        console.log('Edit', photo);
        const editPhotoUrl = `/photos/${photo.id}`;
        history.push(editPhotoUrl);
    };

    const handlePhotoRemoveClick = (photo) => {
        console.log('Remove', photo);
        const removePhotoId = photo.id;
        const action = removePhoto(removePhotoId);
        dispatch(action);
    };

    return (
        <div className="photo-main ">
            <Banner title="You are awesome photos 💖" backgroundUrl={Images.PINK_BG} />

            <Container className="text-center">
                <div className="py-5">
                    <Link to="/photos/add">
                        Add new Photo
                    </Link>
                </div>

                <PhotoList
                    photoList={photos}
                    onPhotoEditClick={handlePhotoEditClick}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                />
            </Container>
        </div>
    );
}

export default MainPage;