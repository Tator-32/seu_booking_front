import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  phoneNumber:null,
	  mailAddress:null
  },
  mutations: {
	  userLoginPhone(state, phoneNumber){
		  state.phoneNumber=phoneNumber;		  
	  },
	  userLoginMail(state, mailAddress) {
		state.mailAddress=mailAddress;
	  },
	  userlogout(state){
		  state.phoneNumber=null;
		  state.mailAddress=null;
	  }
  },
  actions: {
  },
  modules: {
  }
  
})
