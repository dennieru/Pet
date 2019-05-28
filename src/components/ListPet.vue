// ListPet.vue

<template>
  <div>
  <h1>List Pet</h1>
  <div class="md-layout md-gutter md-alignment-center">
    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Media card</div>
          <div class="md-subhead">Normal size</div>
        </md-card-header-text>

        <md-card-media>
          <img src="../assets/cat-icon.png" alt="People">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>
    </div>
    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Media card</div>
          <div class="md-subhead">Normal size</div>
        </md-card-header-text>

        <md-card-media>
          <img src="../assets/black-cat-icon.png" alt="People">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>
    </div>
    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Media card</div>
          <div class="md-subhead">Normal size</div>
        </md-card-header-text>

        <md-card-media>
          <img src="../assets/bulldog-icon.png" alt="People">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>
    </div>
    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Media card</div>
          <div class="md-subhead">Normal size</div>
        </md-card-header-text>

        <md-card-media>
          <img src="../assets/cardinal-icon.png" alt="People">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>
    </div>
    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Media card</div>
          <div class="md-subhead">Normal size</div>
        </md-card-header-text>

        <md-card-media>
          <img src="../assets/chihuahua-icon.png" alt="People">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>
    </div>
    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Media card</div>
          <div class="md-subhead">Normal size</div>
        </md-card-header-text>

        <md-card-media>
          <img src="../assets/dog-icon.png" alt="Dog">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  components: {
      name: 'ListPet'
  }
}
</script>

<style lang="scss" scoped>
 @import "../../node_modules/vue-material/src/components/MdAnimation/variables";
 @import "../../node_modules/vue-material/dist/theme/engine";

  .md-layout-item {
    height: 100%;
    margin-top: 8px;
    margin-bottom: 8px;
    transition: .3s $md-transition-stand-timing;

    &:after {
      width: 100%;
      height: 100%;
      display: block;
      background: md-get-palette-color(gray, 200);
      content: " ";
    }
  }

  .md-card-media img {
    background-color: #e8354e;
    border-radius: 50%;
}
</style>