<template>
    <form :class="classList" @submit.prevent="addList">
        <input v-model="title"
                type="text"
                class="text-input"
                placeholder="リストを追加"
                @focusin="startEditing"
                @focusout="finishEditing">
        <button type="submit" class="add-button">追加</button>
    </form>
</template>

<script>
export default{
    data: function() {
        return {
            title: '',
            isEditing: false,
        }
    },
    computed: {
        classList() {
            const classList = ['addlist']
            if (this.isEditing) {
                classList.push('active')
            }
            return classList
        }
    },
    methods: {
        addList: function() {
            this.$store.dispatch('addlist', {title: this.title})
            this.title = ''
        },
        startEditing: function() {
            this.isEditing = true
        },
        finishEditing: function() {
            this.isEditing = false
        },
    }
}
</script>
