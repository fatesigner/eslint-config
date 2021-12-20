<template>
  <div>
    <dl>
      <dt v-for="item in 20" :key="item">
        {{ item }}
      </dt>
      <dd style="text-align: center" />
    </dl>
  </div>
</template>

<script>
import { Component, Inject, Prop, Provide } from 'vue-property-decorator';

const str = "dasdasd what's insdas";
const str2 = `dasdasd what's insdas`;

export default {
  data() {
    return {
      a: 1,
      b: '2'
    };
  },
  mounted() {
    const s = '';
  }
};
</script>
