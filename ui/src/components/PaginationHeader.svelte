<script>
    import ArrowLeft from '$lib/Icons/Arrow--left.svg';
    import ArrowRight from '$lib/Icons/Arrow--right.svg';

    export let backLink = {};
    export let backText = {};
	export let nextLink = {};
    export let nextText= {};
    export let finalPage = false;
    
</script>

<div class="container">
	<div class="link"> <a id="backLink" href={backLink}> <img src={ArrowLeft}/> {backText}</a> </div>
    {#if !finalPage}
        <div class="link"> <a id="forwardLink" href={nextLink}>{nextText} <img src={ArrowRight}/></a></div>	
	{/if}	
</div>

<style>
    .container{
        display:flex; 
        flex-direction:row; 
        justify-content:space-between; 
        align-items:top; 
        height:30px;
    }
    a{
        font-size: 14pt;
        display:flex; 
        flex-direction:row; 
        align-items:center; 
        gap: 8px;
        color:black;
    }
</style>