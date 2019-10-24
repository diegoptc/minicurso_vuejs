<template>
    <div>
        <div class="ui container">
            <div class="ui grid">
                <div class="row">
                    <div class="column">
                        <div class="ui form">
                            <div class="field">
                                <label>Descrição</label>
                                <input type="text" v-model="produto.descricao">
                            </div>
                            <div class="field">
                                <label>Quantidade Estoque</label>
                                <input type="number" min=0 v-model="produto.quantidade">
                            </div>
                            <div class="field">
                                <label>Preço</label>
                                <input type="text" v-model="produto.preco">
                            </div>
                            <button class="ui green button" @click="novoProduto()">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CriarProduto",
    
    props: {
        produtos: {
            type: Array
        }
    },

    data(){
        return {
            produto: {}
        }
    },

    methods: {
        novoProduto: function() {
            this.produtos.push(this.produto)
            this.produto = {}
        }
    }
}
</script>

<style>

</style>