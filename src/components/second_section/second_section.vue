<template src="./second_section.html"> </template>

<script>
export default {
  name: "second_section",
  props: ["title"],
};
</script>

<style>
@media screen and (max-width: 54.4em) { /** 870px /16 */
  .banner__title{
    font-size: 25px;
  } 
}

@media screen and (max-width: 37.5em) { /** 600px /16 */
  .banner__title{
    font-size: 14px;
  } 
}

</style>
