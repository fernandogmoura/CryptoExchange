<template>
  <v-row
      no-gutters
    >
    <v-col
      cols="12"
      sm="6"
    >
      <div class="text-h4 text-center">Contact us</div>
      <v-text-field
        label="Your name"
        placeholder="Name"
        color="orange"
        class=" pt-3 px-5"
        outlined
      ></v-text-field>
      <v-text-field
        label="Your e-mail"
        placeholder="E-mail"
        class=" pt-3 px-5"
        color="orange"
        outlined
      ></v-text-field>
      <v-text-field
        label="Contact reason"
        placeholder="Reason"
        color="orange"
        class=" pt-3 px-5"
        outlined
        
      ></v-text-field>
    </v-col>

    <v-col
      cols="12"
      sm="6"
      class="px-5"
      align-self="center"
    >
      <v-textarea
        color="orange"
        label="Type your message"
        outlined
      ></v-textarea>
      <v-btn
        elevation="2"
        color="orange"
        large
      >Enviar</v-btn>
    </v-col>
  </v-row>
</template>
