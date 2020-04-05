<template>
    <div class="col-sm-2 total">
        <h2 style="">Total {{ total }} pts</h2>
    </div>
</template>

<script>

export default {
    name: 'Total',
    props: ['total']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .total {
        text-align: center;
    }
</style>
