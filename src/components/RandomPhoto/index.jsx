import './RandomPhoto.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

RandomPhoto.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    onImageUrlChange: PropTypes.func,
    onRandomButtonBlur: PropTypes.func
};

RandomPhoto.defaultProps = {
    name: '',
    imageUrl: '',
    onImageUrlChange: null,
    onRandomButtonBlur: null
}

const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000);
    return `https://picsum.photos/id/${randomId}/300/300`;
}

function RandomPhoto(props) {
    const { name, imageUrl, onRandomButtonBlur, onImageUrlChange } = props;


    const handleRandomPhotoClick = async () => {
        if (onImageUrlChange) {
            const randomImageUrl = getRandomImageUrl();
            onImageUrlChange(randomImageUrl);
        }
    }

    return (
        <div className="random-photo">
            <div className="random-photo_button">
                <Button
                    outline
                    name={name}
                    color="primary"
                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhotoClick}
                >
                    Random Photo
                </Button>
            </div>

            <div className="random-photo_photo">
                {imageUrl &&
                    <img src={imageUrl}
                        alt="Oops... Not found. Please click random again"
                        onError={e => e.target.src = getRandomImageUrl()}
                    />}
            </div>
        </div>
    );
}

export default RandomPhoto;