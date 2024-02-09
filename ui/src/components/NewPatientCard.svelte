<script>
    import Button from "carbon-components-svelte/src/Button/Button.svelte";
    import User from "$lib/Icons/No_profile_pic.png";
</script>

<div>
        <img src={User}/>
        <Button kind='secondary'> New Patient </Button>
</div>

<style>
    
    div{
        width: 290px;
        height: 682px;
        padding: 16px;
        background: #E0E0E0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>
