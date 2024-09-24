<template>
  <section>
    <header>
      <h1>My Family</h1>
    </header>
    <ul>
      <family-contact
        v-for="member in family"
        :key="member.id"
        :name="member.name"
        :phone-number="member.phone"
        :email-address="member.email"
        :is-favorite="member.favorite"
        :id="member.id"
        @favorite-status="toggleFavstatus"
      />
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      family: [
        {
          id: '1',
          name: 'Anushree Kulkarni',
          phone: '9108 821 641',
          email: 'anushree@gmail.com',
          favorite: false,
        },
        {
          id: '2',
          name: 'Abhinav Kulkarni',
          phone: '8147 176 732',
          email: 'abhinav@gmail.com',
          favorite: true,
        },
        {
          id: '3',
          name: 'Jayaraj Kulkarni',
          phone: '9449 768 262',
          email: 'jayaraj@gmail.com',
          favorite: true,
        },
        {
          id: '4',
          name: 'Usha Kulkarni',
          phone: '8867 246 245',
          email: 'usha@gmail.com',
          favorite: true,
        },
      ],
    };
  },
  methods: {
    toggleFavstatus(favid) {
      const selectedMember = this.family.find((member) => favid === member.id);
      if (selectedMember) {
        selectedMember.favorite = !selectedMember.favorite;
      }
    },
  },
};
</script>
