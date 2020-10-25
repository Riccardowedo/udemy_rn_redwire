import React,{ useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Title }from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { useDispatch, useSelector} from 'react-redux';
import { updateUserData } from '../../../store/actions';

const UserData = () => {
    const  [loading,setLoading] = useState(false)
    const error =  useSelector(state => state.auth.error);
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();


    const handleSubmit = (values) => {
        alert('submit');
    }

    return(
        <Formik
            enableReinitialize={true}
            initialValues={{
                name: user.name ? user.name :'',
                lastname:user.lastname ? user.lastname :'',
                age:user.age ? user.age :''
            }}
            validationSchema={Yup.object({
                name: Yup.string().required('The name is required'),
                lastname:Yup.string().required('The lastname is required'),
                age:Yup.number().required('The age is required')
            })}
            onSubmit={ values => handleSubmit(values)}
        >
        { ({ handleChange, handleBlur, handleSubmit, values, touched, errors })=> (
            <View style={{padding:20}}>
                 <Title>About you</Title>
                <TextInput
                    label="name"
                    mode="flat"

                    error={ errors.name && touched.name ? true : false}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                />
                <TextInput
                    label="lastname"
                    mode="flat"
                    error={ errors.lastname && touched.lastname ? true : false}
                    onChangeText={handleChange('lastname')}
                    onBlur={handleBlur('lastname')}
                    value={values.lastname}
                />
                 <TextInput
                    label="age"
                    mode="flat"
                    error={ errors.age && touched.age ? true : false}
                    onChangeText={handleChange('age')}
                    onBlur={handleBlur('age')}
                    value={values.age}
                />
                 <Button
                    mode="contained"
                    onPress={handleSubmit}
                >
                    Update
                </Button>
            </View>
        )}  
        </Formik>
    )

}


export default UserData;