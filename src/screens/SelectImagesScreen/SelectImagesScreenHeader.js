import React from 'react'
import { useActions } from '../../hooks_and_functions/useActions'

const SelectImagesScreenHeader = ({selected, onSuccess}) => {
    const { setSelectedImagesState, clearHelper } = useActions()
    React.useEffect(() => {
        setSelectedImagesState({
            selectedImagesCount : selected,
            onSuccess : () => onSuccess()
        })

        return () => {
            clearHelper()
        }
    }, [selected, onSuccess])
    return (
        <></>
    )
}

export default SelectImagesScreenHeader