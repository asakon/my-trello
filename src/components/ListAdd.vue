<template>
    <form class="addlist" @submit.prevent="addList">
        <input v-model="title"
                type="text"
                class="text-input"
                placeholder="リストを追加">
        <button type="submit" class="add-button">追加</button>
    </form>
</template>

<script>
export default{
    data: function() {
        return {
            title: '',
        }
    },
    methods: {
        addList: function() {
            this.$store.dispatch('addlist', {title: this.title})
            this.title = ''
        },
    }
}
</script>
