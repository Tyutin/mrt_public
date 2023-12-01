<template>
  <div class="container banner">
    <div class="banner__logo">
      <img src="/img/logo1.png" alt="">
    </div>
    <div class="banner__text">
      <h1><nobr>МРТ- и КТ-ИССЛЕДОВАНИЯ</nobr></h1>
      <h2><nobr>КОНСУЛЬТАЦИЯ ОНКОЛОГА</nobr></h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  margin-bottom: 40px;
  padding: 0 30px;

  @media screen and (max-width: 1023px) {
    height: 546px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media screen and (max-width: 767px) {
    background-image: url("/img/banner_mob.jpg");
    background-size: cover;
    padding: 15px;
    height: 81.48vw;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 425px) {
    margin-bottom: 20px;
  }

  &__text {
    height: 76px;
    padding-top: 105px;
    margin-bottom: 80px;
    max-width: 420px;
    text-transform: uppercase;

    @media screen and (max-width: 1023px) {
      display: none;
    }
  }

  &__logo {
    @media screen and (min-width: 1024px) {
      display: none;
    }

    @media screen and (max-width: 767px) {
      width: 45.31vw;
    }
  }
}
</style>

<style lang="scss">
.banner__callbackWrapper {
  width: 309px;
  @media screen and (max-width: 1023px) {
      text-shadow: 0px 0px 10px white;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
}
</style>
