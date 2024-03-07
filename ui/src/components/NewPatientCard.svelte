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
        max-width:25VW;
        min-width: 340px;
        height: 530px;
        padding: 16px;
        background: #E0E0E0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>
