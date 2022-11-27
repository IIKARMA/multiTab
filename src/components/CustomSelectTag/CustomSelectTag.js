import React from 'react'
import { Modal } from 'native-base'
import { SelectTag, CreateTag, CustomButton } from '../'
const CustomSelectTag = ({
  activeTag,
  languages,
  theme,
  tags,
  handleSelectTag,
  closeModal
}) => {
  return (
    <>
      <Modal.Header
        _text={{
          color: 'text.50',
          textAlign: 'center',
          fontSize: 'lg'
        }}
        borderBottomWidth='0'
        background='rgba(54,58,75,0.6)'
      >
        {languages.tag}
      </Modal.Header>
      <Modal.Body
        h='sm'
        borderBottom={0}
        background='rgba(54,58,75,0.6)'
        borderColor='red'
      >
        <CreateTag languages={languages} />
        <SelectTag
          tags={tags}
          handleSelectTag={handleSelectTag}
          selectedTags={activeTag}
        />
        <CustomButton closeModal={closeModal} />
      </Modal.Body>
    </>
  )
}
export default CustomSelectTag
