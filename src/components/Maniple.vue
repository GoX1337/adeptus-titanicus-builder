<template>
<div>
    <div v-for="(titan, index) in maniple.composition" :key="titan.name + index" class="card" style="background-color: #f2f2f2;">
        <div class="card-header">
            <div class="row">
                <div class="col-md-10">
                    <h6>{{ titan.name + " (" + getTotalTitanCost(titan) + " pts)" }}</h6>
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
    name: 'Maniple',
    props: ['maniple'],
    data(){
        return {
            getTotalTitanCost(titan){
                let total = titan.cost;
                if(titan.type === "titan"){
                    if(titan.rightArm){
                        total += titan.rightArm.cost;
                    }
                    if(titan.carapace){
                        total += titan.carapace.cost;
                    }
                    if(titan.leftArm){
                        total += titan.leftArm.cost;
                    }
                }
                return total;
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
