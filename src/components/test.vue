<template>
    <q-page class = "row justify-center items-center bg-primary">
    <div class="column">
      <q-card flat bordered >
        <q-card-section class="bg-yellow q-pa-md">
          <div class="row items-center">
            <div class="col">
              <div class="text-h6">LOGIN</div>
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          <q-input label="ID" />
          <q-input label="Password" />
        </q-card-section>

        <q-separator />

        <q-card-actions class="q-pa-md justify-center">
          <q-btn >로그인</q-btn>
        </q-card-actions>
      </q-card>
    </div>

    </q-page>
</template>

<script>
import Axios from 'axios'
export default {
  methods : {
    
  }
}
</script>
