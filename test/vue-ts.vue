<template>
  <div>
    <dl>
      <dt v-for="item in 20"></dt>
      <dd style="text-align: center"></dd>
    </dl>
  </div>
</template>

<script lang="tsx">
import { Component, Inject, Prop, Provide } from 'vue-property-decorator';

interface ITest {
  das: string;
  dd: number;
}

const str = "dasdasd what's insdas";
const str2 = `dasdasd what's insdas`;

@Component({})
export default class Jsx extends Vue {
  ds(d: number) {
    const s: ITest = {
      das: '',
      dd: 2
    };
    return '';
  }
}
</script>
