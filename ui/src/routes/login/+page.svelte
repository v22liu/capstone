
<script>
	import {
		Button,
        TextInput,
        Tag,
        FormGroup, 
        Form,

	} from 'carbon-components-svelte';


</script>


<div style= "display:flex; justify-content:center; align-items:center; width:100vw; height: 100vh">
    <div class="container">
    <h1>Log in</h1>
    <TextInput labelText="Username" placeholder="pharmacist1@cacha.com" light/>
    <TextInput labelText="Passoword" placeholder="BestPharm01!" light/>
    
    <Tag type="red" style="width:125px">Insert YubiKey</Tag>
    <Button>Sign In</Button>

    </div>
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        width:25vw; 
        background-color:#f4f4f4; 
        gap: 16px;
        padding: 32px; 
    }
</style>