import React from 'react'
import { useNavigation } from '@react-navigation/core'
import SelectedImagesScreenHeader from '../../components/Headers/SelectedImagesScreenHeader/SelectedImagesScreenHeader'

const SelectImagesScreenHeader = ({selected, onSuccess, maxSelection}) => {
    const navigation = useNavigation()
    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => (<SelectedImagesScreenHeader selectedImagesCount={selected} onSuccess={onSuccess} maxSelection={maxSelection}/>)
        })
    }, [selected, onSuccess])

    return (<></>)
}

export default SelectImagesScreenHeader  