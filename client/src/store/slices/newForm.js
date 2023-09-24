import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useAuth } from "../../contexts/UserAuth";

axios.defaults.withCredentials = true;

const initialQuestion = {
  question: "",
  type: "",
  activeOptionIdx: null,
  options: [],
  required: false,
};

const initialState = {
  id: null,
  title: "",
  description: "",
  active: { title: true, description: false, questionIdx: null },
  questions: [initialQuestion],
};

const newFormSlice = createSlice({
  name: "newForm",
  initialState,
  reducers: {
    activateTitle(state, action) {
      state.active = { title: true, description: false, questionIdx: null };
    },
    activateDescription(state, action) {
      state.active = { title: false, description: true, questionIdx: null };
    },
    activateQuestion(state, action) {
      const questionIdx = action.payload;
      state.active = { title: false, description: false, questionIdx };
    },
    updateTitle(state, action) {
      const title = action.payload;
      state.title = title;
    },
    updateDescription(state, action) {
      const description = action.payload;
      state.description = description;
    },
    addQuestionObj(state, action) {
      const { newQuestion } = action.payload;

      state.questions.push(newQuestion);

      const activeQuestionIdx = state.questions.length;
      state.active.questionIdx = activeQuestionIdx;
    },
    deleteQuestionObj(state, action) {
      const deletedQuestionIdx = action.payload;
      const questions = state.questions.filter(
        (q, idx) => idx !== deletedQuestionIdx
      );
      if (state.active.questionIdx === deletedQuestionIdx) {
        state.active.questionIdx = null;
      }
      state.questions = questions;
    },
    updateQuestion(state, action) {
      const { questionIdx, question } = action.payload;

      state.questions[questionIdx].question = question;
    },
    changeType(state, action) {
      const { questionIdx, type } = action.payload;
      const hasOptions =
        type === "multiple-choice" ||
        type === "check-boxes" ||
        type === "dropdown";

      const questions = state.questions.map((q, idx) => {
        if (idx === questionIdx) {
          q.type = type;
          if (hasOptions) {
            if (q.options.length === 0) {
              q.options.push("");
              q.activeOptionIdx = 0;
            }
          } else {
            q.options = [];
          }
        }
        return q;
      });

      state.questions = questions;
    },
    addOption(state, action) {
      const { questionIdx, option } = action.payload;

      const optionIdx = state.questions[questionIdx].options.length;

      state.questions[questionIdx].activeOptionIdx = optionIdx;

      state.questions[questionIdx].options.push(option);
    },
    deleteOption(state, action) {
      const { questionIdx, optionIdx } = action.payload;

      state.questions[questionIdx].activeOptionIdx = null;

      state.questions[questionIdx].options = state.questions[
        questionIdx
      ].options.filter((op, opIdx) => opIdx !== optionIdx);
    },
    updateOptionValue(state, action) {
      const { questionIdx, optionIdx, value } = action.payload;

      state.questions[questionIdx].options[optionIdx] = value;
    },
    activateOption(state, action) {
      const { questionIdx, optionIdx } = action.payload;

      state.questions[questionIdx].activeOptionIdx = optionIdx;
    },
    toggleRequired(state, action) {
      const idx = action.payload;

      state.questions[idx].required = !state.questions[idx].required;
    },
    resetForm(state, action) {
      return initialState;
    },
  },
});

const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

export async function postRefinedForm(refinedForm) {
  try {
    console.log(refinedForm);
  const res = await axios.post(`${BASE_URL}/questionForm`, refinedForm, {
    withCredentials: true,
  }).catch(error => error.response)
  return res;
  } catch (error) {
    console.log(error)
  }
  
}

export async function deleteForm(formId) {
  const res = await axios.delete(`${BASE_URL}/questionForm/${formId}`, null, {
    withCredentials: true,
  });

  return res;
}

export async function getFormsList() {
  try {
    const res = await axios
      .get(`${BASE_URL}/questionForm/forms`, null, {
        withCredentials: true,
      })
      .catch((error) => error.response);
    if (res.status === 200) {
      const forms = res.data.forms;
      return forms;
    } else if (res.status === 401) {
    }
  } catch (error) {}
}

export async function getFormFromServer(formId) {
  const res = await axios.get(`${BASE_URL}/questionForm/${formId}`, null, {
    withCredentials: true,
  });

  const form = res.data.form;
  return form;
}

export async function toggleAcceptingStatus(formId) {
  const res = await axios.post(
    `${BASE_URL}/questionForm/formStatus/${formId}`,
    null,
    {
      withCredentials: true,
    }
  );
  if (res.status === 200) return true;

  return false;
}

export const {
  addQuestionObj,
  deleteQuestionObj,
  updateTitle,
  updateDescription,
  updateQuestion,
  changeType,
  addOption,
  deleteOption,
  updateOptionValue,
  activateOption,
  toggleRequired,
  activateTitle,
  activateDescription,
  activateQuestion,
  resetForm,
} = newFormSlice.actions;

export default newFormSlice.reducer;

export const getActiveOptionIdx = (questionIdx) => (state) =>
  state.newForm.questions.find((q, idx) => idx === questionIdx).activeOptionIdx;

export const getActiveInfo = (state) => state.newForm.active;

export const getQuestions = (state) => state.newForm.questions;

export const getForm = (state) => state.newForm;

export const getRefinedForm = (form) => {
  const refinedForm = {
    title: form.title,
    description: form.description,
    questions: form.questions.map((q) => {
      const { question, type, options, required } = q;
      return { question, type, options, required };
    }),
  };

  return refinedForm;
};
