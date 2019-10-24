<template>
    <div>
        <ListagemProdutos
            :produtos=produtos
        ></ListagemProdutos>
        <CriarProduto
            :produtos=produtos
        ></CriarProduto>
    </div>
</template>

<script>
import ListagemProdutos from '@/components/ListagemProdutos'
import CriarProduto from '@/components/CriarProduto'


export default {
    name: "ViewProduto",

    components: {
        ListagemProdutos,
        CriarProduto
    },

    data(){
        return {
            produtos: []
        }
    }
}
</script>

<style>

</style>