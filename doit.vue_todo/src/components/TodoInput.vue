<template>
    <div>
        <input type="text" v-model="newTodoItem"></div>
    <button v-on:click="addTodo">추가</button>
</template>

<script>
export default {
    data(){
        return{
            newTodoItem : ''
        }
    },
    methods : {
        addTodo(){
            if(this.newTodoItem !== ""){
                var value = this.newTodoItem && this.newTodoItem.trim();
                localStorage.setItem(value, value);
                this.clearInput();
            }
        },
        clearInput(){
            this.newTodoItem = '';
        }
    }
}
</script>

<style>
</style>