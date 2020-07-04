import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Button, Spinner } from 'reactstrap';
import { PHOTO_CATEGORY_OPTION } from '../../../../constants/global';
import { Formik, Form, FastField } from 'formik';
import InputField from '../../../../custom-field/InputField';
import SelecField from '../../../../custom-field/SelecField';
import RandomPhotoField from '../../../../custom-field/RandomPhotoField';
import * as Yup from 'yup';

PhotoForm.propTypes = {
    onSubmit: PropTypes.func
};

PhotoForm.defaultProps = {
    onSubmit: null
}

function PhotoForm(props) {
    const { initialValues, isAddmode } = props;

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required.'),

        categoryId: Yup.number().required('This field is required.').nullable(),

        photo: Yup.string().when('categoryId', {
            is: 1,
            then: Yup.string().required('This field is required.'),
            otherwise: Yup.string().notRequired()
        }),
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={props.onSubmit}
            validationSchema={validationSchema}
        >
            {formikProps => {
                // do something here ...
                const { values, errors, touched, isSubmitting } = formikProps;
                console.log({ values, errors, touched });

                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}

                            label="Title"
                            placeholder="Eg: Wow nature..."
                        />

                        <FastField
                            name="categoryId"
                            component={SelecField}

                            label="Category"
                            placeholder="What's your photo category"
                            options={PHOTO_CATEGORY_OPTION}
                        />

                        <FastField
                            name="photo"
                            component={RandomPhotoField}

                            label="Photo"
                        />

                        <FormGroup>
                            <Button type="submit" color="primary">
                                {isSubmitting && <Spinner size="sm" />}
                                Add to album
                            </Button>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default PhotoForm;