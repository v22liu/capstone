<script>
    import Button from "carbon-components-svelte/src/Button/Button.svelte";
    import User from "$lib/Icons/No_profile_pic.png";
</script>

<div>
    
        <img src={User}/>
        <a href="/create"><Button kind='secondary'> New Patient </Button></a>
</div>

<style>
    
    div{
        max-width:25VW;
        min-width: 350px;
        height: 550px;
        padding: 16px;
        background: #E0E0E0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>
