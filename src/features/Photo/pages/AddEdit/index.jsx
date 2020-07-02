import React from 'react';
import Banner from '../../../../components/Banner';
import Images from '../../../../constants/image';
import './styles.scss';
import PhotoForm from '../../../../components/PhotoForm';

AddEditPage.propTypes = {

};

function AddEditPage(props) {
    return (
        <div className="photo-edit " >
            <Banner title="Pick your amazing photo 😎" backgroundUrl={Images.ORANGE_BG} />


            <div className="photo-edit_form">
                <PhotoForm onSubmit={values => console.log('Form submit: ', values)} />
            </div>
        </div>
    );
}

export default AddEditPage;