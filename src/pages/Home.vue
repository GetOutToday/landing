<template>
  <div class="hello">
    <section id="intro">
      <div class="container-lg">
        <h1>Des évènements autour de vous!</h1>
        <p class="common-description">
          Des évènements, rencontres vous correspondant.. autour de vous!
          De temps en temps notre chatbot viendra vous parler pour vous proposer des activités.
        </p>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Home',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #intro {
    height: 760px;

    display: flex;
    align-items: center;
  }

  #intro h1 {
    font-size: 40px;
  }


  #intro p {
    width: 50%;
  }

  .common-description {
    font-size: 17px;
  }

</style>
