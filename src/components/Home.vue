// Home.vue

<template>
    <div>
  <h1>Pet Store
    <!--img alt="Vue logo" src="./assets/logo.png"-->
  </h1>
    <md-list class="md-double-line">
      <md-subheader>Phone</md-subheader>

      <md-list-item>
        <md-icon class="md-primary">phone</md-icon>

        <div class="md-list-item-text">
          <span>(650) 555-1234</span>
          <span>Mobile</span>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>sms</md-icon>
        </md-button>
      </md-list-item>

      <md-list-item class="md-inset">
        <div class="md-list-item-text">
          <span>(650) 555-1234</span>
          <span>Mobile</span>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>sms</md-icon>
        </md-button>
      </md-list-item>

      <md-divider></md-divider>

      <md-subheader>Email</md-subheader>

      <md-list-item>
        <md-icon class="md-primary">email</md-icon>

        <div class="md-list-item-text">
          <span>aliconnors@example.com</span>
          <span>Personal</span>
        </div>
      </md-list-item>

      <md-list-item class="md-inset">
        <div class="md-list-item-text">
          <span>ali_connors@example.com</span>
          <span>Work</span>
        </div>
      </md-list-item>
    </md-list>

    <md-list class="md-double-line md-dense">
      <md-subheader>Phone</md-subheader>

      <md-list-item>
        <md-icon class="md-primary">phone</md-icon>

        <div class="md-list-item-text">
          <span>(650) 555-1234</span>
          <span>Mobile</span>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>sms</md-icon>
        </md-button>
      </md-list-item>

      <md-list-item class="md-inset">
        <div class="md-list-item-text">
          <span>(650) 555-1234</span>
          <span>Mobile</span>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>sms</md-icon>
        </md-button>
      </md-list-item>

      <md-divider></md-divider>

      <md-subheader>Email</md-subheader>

      <md-list-item>
        <md-icon class="md-primary">email</md-icon>

        <div class="md-list-item-text">
          <span>aliconnors@example.com</span>
          <span>Personal</span>
        </div>
      </md-list-item>

      <md-list-item class="md-inset">
        <div class="md-list-item-text">
          <span>ali_connors@example.com</span>
          <span>Work</span>
        </div>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  components: {
      name: 'Home'
  }
}
</script>