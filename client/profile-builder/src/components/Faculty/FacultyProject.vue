<!DOCTYPE html>

<html>

<head>

    <title></title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="projcss.css">
</head>

<body>
    <div class="project-section">
        <div class="project-content">
            <h2>Add Project</h2>
            <hr>
            <label for="project-name">Project Name</label>
            <input type="text" class="project-name full">
            <label for="current-proj">I am currently working on this project</label>
            <input type="checkbox" class="project-check">
            <div class="proj-date">
                <div class="proj-start-date">
                    <label for="start-date">Start Date</label>
                    <input type="text " class="start-date half">
                </div>
                <div class="proj-start-month">
                    <label for="start-month">Start Month</label>
                    <input type="text " class="start-month half">
                </div>

            </div>
            <div class="proj-date">
                <div class="proj-end-date">
                    <label for="end-date">End Date</label>
                    <input type="text " class="end-date half">
                </div>
                <div class="proj-end-month">
                    <label for="end-month">End Month</label>
                    <input type="text " class="end-month half">
                </div>

            </div>
            <label for="contributers">Add contributers</label>
            <input type="text" class="contributers full">
            <form class="associated-field">
                <label> Associated With </label>
                <select class="full select-associated">
                    <option value="none" active> --None--
                    </option>
                    <option value="ML"> ML
                    </option>
                    <option value="DS"> DS
                    </option>
                    <option value="Security"> Security
                    </option>
                    <option value="Image Processing"> Image Processing
                    </option>
                </select>
            </form>
            <label for="project-url">Project URL</label>
            <input type="text" class="project-url full">
        </div>
    </div>

    <script src="" async defer></script>
</body>

</html>















body{
    background-color: grey;

}
.project-section{
    width: 60%;
    background-color: white;
    font-family: 'Nunito Sans', sans-serif;
    border-radius: 10px;
}
.project-content{
    padding: 10px;
}
.project-name{
    display: block;
}
input{
    margin: 5px 0px 5px 2px;
    border-radius: 5px;
    max-width: 100%;
}
.full{
    width: 95%;
    padding: 5px;
}
.project-check{
    width: 20px;
}
.half{
    margin-right: 10px;
    width: 260px;
    padding: 5px;
}
.proj-date{
    position: relative;
    height: 60px;
    padding-top: 5px;
}
.start-date,.start-month,.end-date,.end-month{
    display: block;
    margin: 5px 0px 5px 2px;
    border-radius: 5px;
    max-width: 100%;
}

.proj-start-date{
    position: absolute;
    right: 30px;
}
.proj-end-date{
    position: absolute;
    right: 30px;
}
.contributers{
    padding-top: 5px;
}