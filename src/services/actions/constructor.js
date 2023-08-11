const UPD_CONSTRUCTOR_DATA = 'UPD_CONSTRUCTOR_DATA'
const DEL_CONSTRUCTOR_DATA = 'DEL_CONSTRUCTOR_DATA'

const updateConstructorData = (payload) => ({ type: UPD_CONSTRUCTOR_DATA, currCart: payload.data })
const delConstructorData = () => ({ type: DEL_CONSTRUCTOR_DATA })

export { UPD_CONSTRUCTOR_DATA, DEL_CONSTRUCTOR_DATA, updateConstructorData, delConstructorData }