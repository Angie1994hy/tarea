<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>WebNative App</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <router-view />
    </ion-content>

    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button :href="'/seccion/tab1'">
          <ion-label>Tab1</ion-label>
        </ion-tab-button>
        <ion-tab-button :href="'/seccion/tab2'">
          <ion-label>Tab2</ion-label>
        </ion-tab-button>
        <ion-tab-button :href="'/seccion/menu'">
          <ion-label>Menu</ion-label>
        </ion-tab-button>
        <ion-tab-button :href="'/seccion/acordion'">
          <ion-label>Acordion</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonTabs, IonTabBar, IonTabButton, IonLabel } from '@ionic/vue';
</script>
