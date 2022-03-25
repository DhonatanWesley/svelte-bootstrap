<script lang="ts" >
	import { onMount } from 'svelte';
	import { Produtos } from '../stores/ProdutoStore';
	
	let showModal = false;
    let id_produto;

    function ClickItem( i ){
        //id_produto = ( i );
		//showModal  = true
        console.log("Está funcionando");
    }
</script>

<!--<div class="container m-0">-->
    <div class="row g-2 g-md-3 mb-4">
        {#each $Produtos as produto}
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                <div class="card text-center bg-light h-100">
                    <a href="/" class="position-absolute end-0 p-2 text-danger">
                        <i class="bi-suit-heart" style="font-size: 24px; line-height: 24px;"></i>
                    </a>
                    <img src={produto.src} alt={produto.codigo} class="card-img-top my-2">
                    <div class="card-body ">
                        <h5>{produto.codigo}</h5>
                        <p class="card-text truncar-3l">
                            {produto.nome} - {produto.un}
                        </p>
                    </div>
                    <div class="card-footer">
                        R$ <b>{produto.valor.toFixed(2)}</b>
                    </div>
                </div>
            </div>
        {/each}
    </div>
<!--</div>-->
<!--
{#if showModal}
	<DigitacaoItem on:close="{() => showModal = false}" id = {id_produto} />
{/if}
-->
<style>
    p.truncar-3l {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
