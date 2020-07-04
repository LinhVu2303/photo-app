import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, FormFeedback } from 'reactstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';

SelecField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array
};

SelecField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: []
}

function SelecField(props) {
    const { field, options, label, placeholder, disabled, form } = props;
    const { name, value } = field;

    const selectedOption = options.find(options => options.value === value);

    const handleSelectdOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        };
        field.onChange(changeEvent);
    }

    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}

            <Select
                id={name}
                {...field}
                value={selectedOption}
                onChange={handleSelectdOptionChange}

                isDisabled={disabled}
                placeholder={placeholder}
                options={options}

                className={showError ? 'is-invalid' : ''}
            >
            </Select>
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default SelecField;