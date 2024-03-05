<script>
    import Button from "carbon-components-svelte/src/Button/Button.svelte";
    import profilePic from "$lib/images/profile_photo.png";
</script>

<div class="card">
<h1>Patient</h1>
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
    <p class= "patient_info">Abbas Juma <!--Name-->
        <br>Male <!--Sex-->
        <br>January 4, 1980 <!--Birthday-->
        <br>Dar es Salamm<!--Village-->
        <br>123-456-7890 <!--Phone Number-->

    </p>
</div>

<div class= "button_group">
    <Button kind='tertiary'>
        Update Patient Record
    </Button>
</div>

</div>

<style>
    .card {
        max-width:20%;
        padding: 8px;
        background: #f4f4f4;
        display: flex;
        flex-direction: column;
        gap:16px; 
      }
    
    .card_info {
        display: flex;
        gap:16px
      }
    
    .profile_pic {
        display: flex;
        justify-content: center;
      }
    
    .button_group {
        display: flex;
        justify-content: center;
        flex-flow: space-between;
        gap:8px
      }
    .patient_info {
        font-weight: bold;
        flex: 1; 
        display: fill; 
    }
</style>
