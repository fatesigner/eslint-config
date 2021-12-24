<template>
  <div>
    <dl>
      <dt v-for="item in 20" :key="item">
        {{ item }}
      </dt>
      <dd style="text-align: center"></dd>
    </dl>
  </div>
</template>

<script lang="jsx">
import Vue from 'vue';
import { Component, Inject, Prop, Provide } from 'vue-property-decorator';

const str = "dasdasd what's insdas";
const str2 = `dasdasd what's insdas`;

export default class Jsx extends Vue {
  ds(d) {
    const s = {
      das: '',
      dd: 2
    };
    return '';
  }

  render() {
    const s = this.ds(2);
    const path = '/';
    return s === '2' ? (
      <div class='mg-notFound' s='{dd}'>
        <div class='fixed-center text-center'>
          <p>img goes here</p>
          <p class='text-faded'>
            Sorry, nothing here...<strong>(404)</strong>
          </p>
          <q-btn color='secondary' style='width:200px;' onClick={() => console.log(path)}>
            Go back
          </q-btn>
        </div>
      </div>
    ) : (
      <div>sds</div>
    );
  }
}
</script>
