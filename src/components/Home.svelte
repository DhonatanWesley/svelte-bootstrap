<!-- JavaScrip/TypeScript -->
<script>
    import Cabecalho    from "./Cabecalho.svelte";
    import Banner       from "./Banner.svelte";
    import MenuProduto  from "./MenuProduto.svelte"; 
    import ListaProduto from "./ListaProduto.svelte";
    import Rodape       from "./Rodape.svelte";

</script>

<!-- HTML -->
<body>
    <div class="d-flex flex-column wrapper">
        <Cabecalho/>
        <Banner/>
        <main class="flex-fill">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-3 col-lg-2 ">
                        <MenuProduto/>
                    </div>
                    <div class="col-12 col-md-9 col-lg-10">
                        <ListaProduto/>
                    </div>
                </div>
            </div>
        </main>
        <footer class="border-top text-muted bg-light">
            <Rodape/>
        </footer>
    </div>
</body>

<!-- CSS -->
<style>
    .wrapper {
        min-height: 100vh;
    }
</style>