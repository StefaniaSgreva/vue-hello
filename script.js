const { createApp } = Vue 

createApp ({ 

    data (){
        return {
            message: 'Hello Vue!',
            myClass:'title',
            myImage:'./img/logo.png'
        }
    }
}).mount('#app') 