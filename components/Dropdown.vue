<template>
  <div class="dropdown" v-if="articles">
    <!-- Dropdown Input -->
    <input class="dropdown-input"
      :title="title"
      @focus="showOptions()"
      @blur="exit()"
      @keyup="keyMonitor"
      v-model="searchFilter"
      :disabled="disabled"
      :placeholder="placeholder" />

    <!-- Dropdown Menu -->
    <div class="dropdown-content"
      v-show="optionsShown">
      <div
        class="dropdown-item"
        @mousedown="selectOption(article)"
        v-for="(article, index) in filteredOptions"
        :key="index">
          {{ article.title || '-' }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Dropdown',
    props: {
      title: {
        type: String,
        required: false,
        default: 'dropdown',
        article: 'Input title'
      },
      articles: {
        type: Array,
        required: true,
        default: function () { return[] },
        article: 'Options of dropdown. An array of options with id and title',
      },
      placeholder: {
        type: String,
        required: false,
        default: 'Please select an option',
        article: 'Placeholder of dropdown'
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
        article: 'Disable the dropdown'
      },
      maxItem: {
        type: Number,
        required: false,
        default: 4,
        article: 'Max items showing'
      }
    },
    data() {
      return {
        selected: {},
        optionsShown: false,
        searchFilter: ''
      }
    },
    created() {
      this.$emit('selected', this.selected);
    },
    computed: {
      filteredOptions() {
        const filtered = [];
        const regOption = new RegExp(this.searchFilter, 'ig');
        for (const article of this.articles) {
          if (this.searchFilter.length < 1 || article.title.match(regOption)){
            if (filtered.length < this.maxItem) filtered.push(article);
          }
        }
        return filtered;
      }
    },
    methods: {
      selectOption(article) {
        this.selected = article;
        this.optionsShown = false;
        this.searchFilter = this.selected.title;
        this.$emit('selected', this.selected);
      },
      showOptions(){
        if (!this.disabled) {
          this.searchFilter = '';
          this.optionsShown = true;
        }
      },
      exit() {
        if (!this.selected.title) {
          this.selected = {};
          this.searchFilter = '';
        } else {
          this.searchFilter = this.selected.title;
        }
        this.$emit('selected', this.selected);
        this.optionsShown = false;
      },
      // Selecting when pressing Enter
      keyMonitor: function(event) {
        if (event.key === "Enter" && this.filteredOptions[0])
          this.selectOption(this.filteredOptions[0]);
      }
    },
    watch: {
      searchFilter() {
        if (this.filteredOptions.length === 0) {
          this.selected = {};
        } else {
          this.selected = this.filteredOptions[0];
        }
        this.$emit('filter', this.searchFilter);
      }
    }
  };
</script>


<style lang="scss" scoped>
  .dropdown {
    position: relative;
    display: block;
    margin: auto;
    .dropdown-input {
      background: #fff;
      cursor: pointer;
      border-radius: 1px;
      color: #333;
      font-size: .8em;
      &:hover {
        background: #f8f8fa;
      }
    }
    .dropdown-content {
      position: absolute;
      background-color: #fff;
      border: 1px solid #e7ecf5;
      overflow: auto;
      z-index: 1;
      .dropdown-item {
        color: black;
        font-size: .7em;
        line-height: 1em;
        text-decoration: none;
        display: block;
        cursor: pointer;
        &:hover {
          background-color: #e7ecf5;
        }
      }
    }
    .dropdown:hover .dropdowncontent {
      display: block;
    }
  }
</style>
