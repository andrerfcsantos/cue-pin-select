<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <div class="form-container">
      <div class="grid-container">
        <label for="passphrase" class="phrase-label">Passphrase: </label>
        <textarea
          id="passphrase"
          v-model="passphrase"
          class="phrase-input"
        ></textarea>

        <label for="pin" class="pin-label">Pin: </label>
        <input id="pin" type="textarea" v-model="pin" class="pin-input" />

        <label for="cue" class="cue-label">Cue: </label>
        <input id="cue" type="textarea" v-model="cue" class="cue-input" />

        <button @click="doSomething" class="password-button">
          Create password
        </button>
      </div>
    </div>

    <div>
      <div v-if="password !== ''">
        <h2>Your password is:</h2>
        <span id="password" class="password-output"> {{ password }}</span>
      </div>
      <div v-else>
        <span
          >To generate a password, input your passphrase, pin and cue and click
          on the button above.</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import getPassword from "@/services/cps.js";

export default {
  name: "Home",
  data() {
    return {
      message: "Cue-Pin-Select Password Generator",
      passphrase: "parallel major domain disastrous divergent waterways",
      pin: "6908",
      cue: "amzn",
      password: ""
    };
  },
  methods: {
    doSomething() {
      this.password = getPassword(this.passphrase, this.pin, this.cue);
    }
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style>
button {
  background: none;
  border: solid 1px;
  border-radius: 2em;
  font: inherit;
  padding: 0.75em 2em;
  color: lightgreen;
}

.form-container {
  display: inline-block;
}

.grid-container {
  display: grid;
  grid-template-columns: max-content max-content;
}

.phrase-label {
  grid-column: 1;
  grid-row: 1;
}
.phrase-input {
  grid-column: 2;
  grid-row: 1;
  width: 20em;
}

.pin-label {
  grid-column: 1;
  grid-row: 2;
}

.pin-input {
  grid-column: 2;
  grid-row: 2;
  width: 4em;
}

.cue-label {
  grid-column: 1;
  grid-row: 3;
}
.cue-input {
  grid-column: 2;
  grid-row: 3;
  width: 4em;
}

.password-button {
  grid-row: 4;
  grid-column-start: 1;
  grid-column-end: 3;
  width: 25em;
  margin: 1em 0;
}
.password-label {
  grid-column: 1;
  grid-row: 5;
}
.password-output {
  grid-column: 2;
  grid-row: 5;
}

label {
  text-align: end;
  vertical-align: middle;
}
</style>
