console.log('Vue ok', Vue)

const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            saluto: 'Ciao a tutti i visitatori',
            imgHello: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-people-waving-illustration_23-2149195759.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705881600&semt=sph'
        }
    }
})
app.mount('#root');