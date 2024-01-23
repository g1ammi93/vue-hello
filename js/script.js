console.log('Vue ok', Vue)

const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            saluto: 'Ciao a tutti i visitatori'
        }
    }
})
app.mount('#root');