<template>
    <header>
        <h2>Adding New member to the Family!</h2>
    </header>
    <section>
        <form @submit.prevent="formSubmit">
            <input 
                type="text"
                placeholder="Enter Name of the Member"
                v-model="userDetails.name"
            />
            <input
                type="email"
                placeholder="Enter Email of the Member"
                v-model="userDetails.email"
            />
            <input 
                type="number"
                placeholder="Enter Phone number of the member"
                v-model="userDetails.phone"
            />
            <button type="submit">Submit</button>
        </form>
    </section>
</template>

<script>
export default{
    emits:{
        'formSubmit':function(userDetails){
            if(userDetails){
                return true
            }else{
                return false
            }
        }
    },
    data:function () {
        return{
            userDetails:{
                name:'',
                phone:'',
                email:'',
            }
        }
    },
    methods:{
        formSubmit(){
            this.$emit('form-submit',{
                ...this.userDetails,
                id:Math.random().toString()

            })
            this.userDetails.name='',
            this.userDetails.email='',
            this.userDetails.phone=''
        }
    }

}
</script>
