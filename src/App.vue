<template>
    <section>
        <header>
            <h1>My Family</h1>
        </header>
        <ul>
            <family-contact 
                name="Anushree Kulkarni" 
                phone-number="91088 21641"
                email-address="anushree@gmail.com"
                is-favorite="1"
            >
            </family-contact>
            <family-contact
                name="Abhinav Kulkarni"
                phone-number="81471 76732"
                email-address="abhinav@gmail.com"
                is-favorite="0"
            >
            </family-contact>
        </ul>
    </section>
</template>

<script>
export default {
    data:function (){
        return{
            family:[
                {
                    id:'1',
                    name:'Anushree Kulkarni',
                    phone:'9108 821 641',
                    email:'anushree@gmail.com'
                },
                {
                    id:'2',
                    name:'Abhinav Kulkarni',
                    phone:'8147 176 732',
                    email:'abhinav@gmail.com'
                },
                {
                    id:'3',
                    name:'Jayaraj Kulkarni',
                    phone:'9449 768 262',
                    email:'jayaraj@gmail.com',
                },
                {
                    id:'4',
                    name:'Usha Kulkarni',
                    phone:'8867 246 245',
                    email:'usha@gmail.com'
                }
            ]
        }
    }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

</style>
