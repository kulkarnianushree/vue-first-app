<template>
    <li>
        <h2>{{ family.name }}</h2>
        <button @click="toggleHandler">Show Details</button>
        <ul v-if="showStatus">
            <li><strong>Phone:</strong>{{ family.phone }}</li>
            <li><strong>Email:</strong>{{ family.email }}</li>
        </ul>
    </li>
</template>

<script>
export default{
    data:function(){
        return{
            showStatus:false,
            family:
                {
                    id:'1',
                    name:'Anushree Kulkarni',
                    phone:'9108 821 641',
                    email:'anushree@gmail.com'
                },
            
        }
    },
    methods:{
        toggleHandler(){
            this.showStatus = !this.showStatus
        }
    }
}
</script>
