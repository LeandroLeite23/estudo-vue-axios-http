import Vue from 'vue'
import axios from 'axios'

//axios.defaults.baseURL = 'https://curso-vue-15ee7-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue){
        //Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-15ee7-default-rtdb.firebaseio.com/',
            headers:{
                "Authorization": "Abc123"
            }
        })

        //Interceptors de requisição e de response para manipular retornos

        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            return config
        }, error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(res => {
            /* const array = []
            for(let chave in res.data){
                array.push({id: chave, ...res.data[chave]}) //Exemplo que pega tudo de uma vez só operador spread
                //array.push({id: chave, nome: res.data[chave].nome, email: res.data[chave].email}) //Exemplo pegando manualmente item a item
            }

            res.data = array */

            return res

        }, error => Promise.reject(error))
    }
})