<template>
    <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keypress.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo">
        <i class="addBtn fas fa-plus" aria-hidden="true"></i>
      </span>
  
      <AlertModal v-if="showModal" @close="showModal = false">
        <template v-slot:header>경고</template>
        <template v-slot:footer>
            <span>할 일을 입력하세요.</span>
            <i class="closeModalBtn fas fa-times" aria-hidden="true" @click="showModal = false"></i>
        </template>
      </AlertModal>
    </div>
  </template>
  
  <script>
  import AlertModal from './common/AlertModal.vue'
  
  export default {
    data() {
      return {
        newTodoItem: '',
        showModal: false
      }
    },
    methods: {
      addTodo() {
        if (this.newTodoItem !== "") {
          var value = this.newTodoItem && this.newTodoItem.trim();
                  this.$emit('addTodo', value)
          this.clearInput();
        } else {
          this.showModal = !this.showModal;
        }
      },
      clearInput() {
        this.newTodoItem = '';
      }
    },
    components: {
      'AlertModal': AlertModal
    }
  }
  </script>
  
  <style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: inline-block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }
  </style>