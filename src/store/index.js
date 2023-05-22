import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  username:null,
	  adminid:null,
  },
  mutations: {
	  userlogin(state,username){
		  state.username=username;
	  },
	  userlogout(state){
		  state.username=null;
	  },
	  adminlogin(state,adminid){
		  state.adminid=adminid;
	  },
	  adminlogout(state){
		  state.adminid=null;
	  }
  },
  actions: {
  },
  modules: {
  }
  
})
