<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="fill-height d-flex align-center">
        <v-avatar
          class="mr-10 ml-4"
          image="https://www.gravatar.com/avatar/832e31ae3ac02891a57060f1b73bb00d"
          size="32"
        ></v-avatar>

        <v-btn
          v-for="link in links"
          :key="link.text"
          variant="text"
          :to="link.to"
        >
          {{ link.text }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            density="compact"
            hide-details
            variant="solo"
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-sheet min-height="70vh">
          <v-container>
            <NuxtPage />
          </v-container>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
interface ILink {
  text: string
  to: string
}
const links: ILink[] = [
  { text: 'Home', to: '/' },
  { text: 'Certificates', to: '/certificates' },
  { text: 'Blog', to: '/blog' },
  { text: 'About', to: '/about' },
]
</script>
