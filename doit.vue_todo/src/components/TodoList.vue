<template>
    <section>
        <ul>
            <li v-for="(todoItem, index) in propsdata" :key="todoItem" class="shadow">
                <i class="checkBtn fas fa-check" aria-hidden="true"></i>
                {{ todoItem }}
                <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    props : ['propsdata'],
    // data() {
    //     return {
    //         todoItems : []
    //     }
    // },
    
    methods: {
        removeTodo(todoItem, index) {
            console.log(todoItem, index);
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1);
        }
    }
}
</script>

<style>
    ul{list-style-type: none; padding-left: 0px; margin-top: 0; text-align: left;}
    li{display:flex; min-height: 50px; height: 50px; line-height: 50px; margin:0.5rem 0; padding:0 0.9rem; background:white; border-radius: 5px;}
    .checkBtn {line-height: 45px; color:#1ac26a; margin-right: 5px;}
    .removeBtn{margin-left:auto; color:#e40707c4;}
</style>