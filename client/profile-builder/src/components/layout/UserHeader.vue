<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="styles2.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
            integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">


    </head>
<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light"  >
    <a class="navbar-brand" href="#"><h2>Profile Builder</h2></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <div class="input-group rounded search-bar">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" >
                <i class="fas fa-search"></i>
            
        </div>
        <ul class="navbar-nav ml-auto ">
            <li class="nav-item">
                
                <a class="nav-link navigation-link" href="#"><i class="fas fa-home"></i> <p class="navigation-item">Home</p> <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
                
                <a class="nav-link" href="#"><i class="fas fa-globe"></i> <p class="navigation-item">Network</p> </a>
                
            </li>
            <li class="nav-item">
            
                <a class="nav-link" href="#"></i>
                    <p class="navigation-item logout">Logout</p>
                </a>
            
            </li>
          
        </ul>
        
    </div>
</nav>

    </body>
</html>


.navbar-brand{
    color: orangered;
    font-size: 2rem;

}
.nav-item{
    color:#008891
}
.nav-link{
    max-height: 60px;
    color:#008891

}
.navbar{
    border-radius: 10px;
    padding-bottom: 0px;
    max-height: 70px;
}
.fas{
    font-size: 1.5rem;
    padding-left: 6px;
}
.fa-globe{
    padding-left: 13px;
}
.navigation-item{
    font-size: 0.8rem;
}
.search {
    margin: 0  0 0 400px;
    display: inline-block;
}
.search-bar{
    max-width: 600px;
    margin-left: 200px;
}
.fa-search{
    padding-top: 6px;
}
.logout{
    font-size: 1rem;
}
