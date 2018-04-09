import axios from 'axios'
const state = {
    companyData: []
}
const types = {
  OPEN_COMPANY: 'environment/companyData',
  OPENDATA_SEARCH_REGION: 'environment/OPENDATA_SEARCH_REGION',
  OPENDATA_SEARCH_KEYWORD: 'environment/OPENDATA_SEARCH_KEYWORD'
}

const getters = {
  getCompanyData: state => {
    let _openData = state.companyData;
    return _openData
  } 
}

const actions = {
    actionGetCompanyData({ commit }){
      return new Promise((resolve, reject) => {
        axios({
          url: 'https://franklion-resume.herokuapp.com/api/open1999'
        })
        .then( response => {
          commit(types.OPEN_COMPANY, response.data)
        })
      })
    }
}

const mutations = {
  [types.OPEN_COMPANY](state, companyData){
    state.companyData = companyData;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}