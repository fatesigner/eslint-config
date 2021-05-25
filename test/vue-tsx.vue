<template>
  <div>
    <dl>
      <dt></dt>
      <dd style="text-align: center"></dd>
    </dl>
  </div>
</template>

<script lang="tsx">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

interface ITest {
  das: string;
  dd: number;
}

@Component({})
export default class Jsx extends Vue {
  ds(d: number) {
    const s: ITest = {
      das: '',
      dd: 2
    };
    return '';
  }

  render() {
    const s = this.ds(2);
    const path: any = '/';
    return (
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
    );
  }
}
</script>
