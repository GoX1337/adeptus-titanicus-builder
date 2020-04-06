<template>
<div>
    <div v-for="(knight, index) in banner.composition" :key="knight.name + index" class="card" style="background-color: #f2f2f2;">
        <div class="card-header">
            <div class="row">
                <div class="col-md-10">
                    <h6>{{ knight.name + " (" + getTotalKnightCost(knight) + " pts)" }}</h6>
                </div>
            </div>
        </div>
        <!-- <div class="card-body">
        </div> -->
    </div>
</div>
</template>

<script>

export default {
    name: 'Banner',
    props: ['banner'],
    data(){
        return {
            getTotalKnightCost (knight) {
                return knight.cost;
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
