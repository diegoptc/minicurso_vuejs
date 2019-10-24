<template>
    <div>
        <div class="ui container">
            <div class="ui grid center aligned">
                <div class="row">
                    <div class="column">
                        <table class="ui celled inverted table">
                            <thead>
                                <tr>
                                    <th>Descrição</th>
                                    <th>Qtd. Estoque</th>
                                    <th>Preço</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(produto, indice) in produtos" :key=indice>
                                    <td>{{ produto.descricao }}</td>
                                    <td>{{ produto.quantidade }}</td>
                                    <td>{{ produto.preco }}</td>                                                
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ListagemProdutos",

    props: {
        produtos: {
            type: Array
        }
    },

    data(){
        return {
            /*
            produtos: [
                {descricao: "Camiseta", quantidade: 0, preco: 23.80},
                {descricao: "Meia", quantidade: 0, preco: 10.00}
            ]
            */
        }
    }
}
</script>

<style>
</style>