
<script>
	import {
		Button,
        TextInput,
        Tag,
        FormGroup, 
        Form,

	} from 'carbon-components-svelte';


</script>


<Form style= "display:flex; flex-direction:column; justify-content:center; align-items:center; background-color: red; width:100vw; height: 100vh; padding 32px 0">
    <h1>Log in</h1>
    <TextInput labelText="Username" placeholder="pharmacist1@cacha.com" style=""/>
    <TextInput labelText="Passoword" placeholder="BestPharm01!"/>
    
    <Tag type="red" style="width:125px">Insert YubiKey</Tag>
    <Button> Sign In</Button>
</Form>