const CreateDreamForm = {
  email: '',
  elements: '',
  title: '',
  description: ''
};

const MODIFY_CREATEDREAM_FORM = (data) => {
  return {
    type: 'MODIFY_CREATEDREAM_FORM',
    payload: {
      data,
    }
  }
}

export { MODIFY_CREATEDREAM_FORM, CreateDreamForm };
