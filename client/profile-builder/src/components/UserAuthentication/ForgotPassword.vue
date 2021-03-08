<template>
        <form class="box" method="post">
            <h2>Enter credentials</h2>
            <div class="container">
                <input type="email" placeholder="Email">
                <h5>Description:</h5>
                <textarea id="description" name="description" rows="7" cols="40"> </textarea>
            </div>
            <p id="question"></p><input id="ans" type="text">
			<div id="message">Please verify.</div>
			<div id="success">Validation complete :)</div>
			<div id="fail">Validation failed :(</div>			
			<button type="submit" value="submit">Submit</button>
			<button type="reset" value="reset">Reset</button>
        </form>
</template>
<script>
export default {
    
}
var total;

function getRandom(){return Math.ceil(Math.random()* 20);}
function createSum(){
		var randomNum1 = getRandom(),
			randomNum2 = getRandom();
	total =randomNum1 + randomNum2;
  $( "#question" ).text("Enter captcha: "+ randomNum1 + " + " + randomNum2 + "=" );  
  $("#ans").val('');
  checkInput();
}

function checkInput(){
		var input = $("#ans").val(), 
    	slideSpeed = 200,
      hasInput = !!input, 
      valid = hasInput && input == total;
    $('#message').toggle(!hasInput);
    $('button[type=submit]').prop('disabled', !valid);  
    $('#success').toggle(valid);
    $('#fail').toggle(hasInput && !valid);
}

$(document).ready(function(){
	//create initial sum
	createSum();
	// On "reset button" click, generate new random sum
	$('button[type=reset]').click(createSum);
	// On user input, check value
	$( "#ans" ).keyup(checkInput);
});
</script>

<style scoped>
    div{
    margin: 0;
    }
#success, #fail{
	display: none;
    color: white;
}

#message, #success, #fail{
    color: white;
	margin-top: 10px;
	margin-bottom: 10px;
}


.box{
    border-radius: 5%;
    width: 400px;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #383e56;
    text-align: center;
  }
  .box h2{
    color: white;
    text-transform: uppercase;
    font-weight: 500;
  }
  .box input[type = "email"]{
    border:0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
  }
  .box input[type = "email"]:focus{
    width: 280px;
    border-color: #2ecc71;
  }
.box h5{
    color:white;
    padding-right: 240px;
    margin-bottom:0px;
}
.box .container{
    padding-left: 2px;
    padding-right: 2px;
    
}
  p {
    color: white;
    display: inline;
    margin-right: 5px;

  }
  #ans{
    border:0;
    background: none;
    display: inline;
    margin: 2px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 2px 2px;
    width: 42px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
 }
  button {
    border: none;
    border-radius: 1.5em;
    color: #FFF;
    background:  #2ecc71;
    padding: 2.5px 10px;
    width: 75px;
    height: 30px;
    cursor: pointer;
    transition: background .5s ease-in-out;
  }
  button:hover:enabled {
    background: #303030;
  }
  button:disabled {
    opacity: .5;
    cursor: default;
  }
</style>