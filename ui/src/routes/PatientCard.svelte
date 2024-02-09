<script>
    import Button from "carbon-components-svelte/src/Button/Button.svelte";
    import TextInput from "carbon-components-svelte/src/Button/Button.svelte";
    import profilePic from "$lib/images/profile_photo.png";
</script>
<div class="card">

<div class="profile_pic">
    <img src={profilePic} />
</div>

<div class="card_info">
    <p>
        Name: 
        <br> Sex: 
        <br> Brithday: 
        <br> Village: 
        <br> Phone Number: 
    </p>
    <p><b>Abbas Juma <!--Name-->
        <br>Male <!--Sex-->
        <br>January 4, 1980 <!--Birthday-->
        <br>Dar es Salamm<!--Village-->
        <br>123-456-7890</b> <!--Phone Number-->

    </p>
</div>

<div class = "button_group">
    <Button kind='secondary'>
        Patient Record
    </Button>
    <Button>
        Prescribe
    </Button>
</div>

<TextInput id="text-input-1" type='text' labelText="Conditions">
</TextInput>

</div>

<style>
    .card {
        width: 290px;
        height: 682px;
        padding: 16px;
        background: white;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        gap:16px; 
      }
    
    .card_info {
        display: flex;
        gap:16px
      }
    
    Button {
        /* padding-right=16px;
        Button text  */
        /* display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; */
    }
    .button_group {
        display: flex;
        flex-flow: space-between;
        gap:8px
      }
</style>
